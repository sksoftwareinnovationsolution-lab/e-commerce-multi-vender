import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { DUMMY_SERVICES, SERVICE_CATEGORIES, filterServices } from "../../../data/services";
import "./NearbyServices.css";

/* ========================================
   Skeleton Loading Card
   ======================================== */
function ServiceSkeletonCard() {
  return (
    <div className="svc-skeleton">
      <div className="svc-skeleton__banner">
        <div className="svc-skeleton__shimmer" />
      </div>
      <div className="svc-skeleton__body">
        <div className="svc-skeleton__line svc-skeleton__line--title" />
        <div className="svc-skeleton__line svc-skeleton__line--subtitle" />
        <div className="svc-skeleton__line svc-skeleton__line--category" />
        <div className="svc-skeleton__line svc-skeleton__line--rating" />
        <div className="svc-skeleton__meta">
          <div className="svc-skeleton__meta-block" />
          <div className="svc-skeleton__meta-block" />
          <div className="svc-skeleton__meta-block" />
        </div>
      </div>
      <div className="svc-skeleton__actions">
        <div className="svc-skeleton__btn" />
        <div className="svc-skeleton__btn svc-skeleton__btn--filled" />
      </div>
    </div>
  );
}

/* ========================================
   Empty State
   ======================================== */
function EmptyState() {
  return (
    <div className="svc-empty">
      <div className="svc-empty__icon">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
      <h3 className="svc-empty__title">No services available nearby.</h3>
      <p className="svc-empty__desc">
        We couldn&apos;t find any services matching your criteria. Try adjusting your filters or search.
      </p>
      <Link to="/" className="svc-empty__btn">
        Explore Other Categories
      </Link>
    </div>
  );
}

/* ========================================
   NearbyServices — Main Section
   ======================================== */
function NearbyServices({ services = DUMMY_SERVICES, compact }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  /* Slider state */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const autoPlayRef = useRef(null);

  /* Simulate initial loading */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), compact ? 800 : 1800);
    return () => clearTimeout(timer);
  }, [compact]);

  /* Responsive visible count */
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 576) setVisibleCount(1);
      else if (w < 768) setVisibleCount(2);
      else if (w < 992) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  /* Filtered services */
  const filteredServices = useMemo(
    () => filterServices(services, searchQuery, activeCategory).slice(0, compact ? 4 : services.length),
    [services, searchQuery, activeCategory, compact]
  );

  /* Max index for slider */
  const maxIndex = useMemo(
    () => Math.max(0, filteredServices.length - visibleCount),
    [filteredServices.length, visibleCount]
  );

  /* Clamped index — derived, no effect needed */
  const clampedIndex = Math.min(currentIndex, maxIndex);

  /* Handlers that reset slider index when filters change */
  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
    setCurrentIndex(0);
  }, []);

  const handleCategoryChange = useCallback((catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  }, []);

  /* Auto-play */
  useEffect(() => {
    if (compact || isPaused || filteredServices.length <= visibleCount) {
      clearInterval(autoPlayRef.current);
      return;
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [compact, isPaused, maxIndex, filteredServices.length, visibleCount]);

  /* Navigation */
  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  /* Touch / Swipe */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) goNext();
      else goPrev();
    }
    touchDeltaX.current = 0;
  };

  /* Keyboard support for slider */
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext();
  };

  /* Track transform */
  const trackStyle = {
    transform: `translateX(-${clampedIndex * (100 / visibleCount)}%)`,
    transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  return (
    <section
      className="nearby-services"
      id="featured-services"
      aria-label="Featured Services"
      {...(!compact && { onMouseEnter: () => setIsPaused(true), onMouseLeave: () => setIsPaused(false) })}
    >
      {/* Section Header */}
      <div className="nearby-services__header">
        <div className="nearby-services__header-text">
          <h2 className="nearby-services__title">Featured Services</h2>
          <p className="nearby-services__subtitle">
            Find trusted professionals around your location.
          </p>
        </div>
        <Link to="/services" className="nearby-services__view-all">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      {/* Search Bar — only in full mode */}
      {!compact && (
        <>
          <div className="nearby-services__search-wrap">
            <div className="nearby-services__search">
              <svg className="nearby-services__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="nearby-services__search-input"
                placeholder="Search services, providers, categories..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                aria-label="Search services"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="nearby-services__search-clear"
                  onClick={() => handleSearchChange("")}
                  aria-label="Clear search"
                >
                  \u2715
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="nearby-services__chips" role="tablist" aria-label="Service categories">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`nearby-services__chip ${activeCategory === cat.id ? "nearby-services__chip--active" : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Content */}
      {isLoading ? (
        compact ? (
          <div className="nearby-services__compact-grid">
            {Array.from({ length: 4 }).map((_, i) => (
              <ServiceSkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="nearby-services__slider">
            <div className="nearby-services__track">
              {Array.from({ length: visibleCount }).map((_, i) => (
                <div
                  key={i}
                  className="nearby-services__slide"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <ServiceSkeletonCard />
                </div>
              ))}
            </div>
          </div>
        )
      ) : filteredServices.length === 0 ? (
        <EmptyState />
      ) : compact ? (
        /* Compact grid for homepage */
        <div className="nearby-services__compact-grid">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      ) : (
        <>
          {/* Slider */}
          <div
            className="nearby-services__slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Services carousel"
          >
            <div className="nearby-services__track" ref={trackRef} style={trackStyle}>
              {filteredServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="nearby-services__slide"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <ServiceCard service={service} index={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredServices.length > visibleCount && (
            <>
              <button
                type="button"
                className="nearby-services__nav nearby-services__nav--prev"
                onClick={goPrev}
                aria-label="Previous services"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="nearby-services__nav nearby-services__nav--next"
                onClick={goNext}
                aria-label="Next services"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {filteredServices.length > visibleCount && (
            <div className="nearby-services__dots" role="tablist">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`nearby-services__dot ${i === clampedIndex ? "nearby-services__dot--active" : ""}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default NearbyServices;
