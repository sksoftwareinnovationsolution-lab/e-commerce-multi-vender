import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  /* Staggered fade-up animation on scroll */
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${index * 0.08}s`;
          el.classList.add("service-card--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const {
    id,
    name,
    providerName,
    providerInitials,
    category,
    rating,
    totalReviews,
    startingPrice,
    estimatedDuration,
    distance,
    isAvailableToday,
    isVerified,
    bannerImage,
  } = service;

  const renderStars = (val) => {
    const full = Math.floor(val);
    const half = val % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return (
      <>
        {"\u2605".repeat(full)}
        {half ? "\u00BD" : ""}
        {"\u2606".repeat(empty)}
      </>
    );
  };

  return (
    <article
      ref={cardRef}
      className="service-card"
      tabIndex={0}
      role="link"
      aria-label={`${name} by ${providerName}`}
    >
      <Link to={`/service/${id}`} className="service-card__link">
        {/* Banner Image */}
        <div className="service-card__banner">
          <div className="service-card__banner-img">
            {bannerImage ? (
              <img src={bannerImage} alt={`${name} banner`} />
            ) : (
              <span className="service-card__banner-placeholder">{category}</span>
            )}
          </div>

          {/* Available Today Badge */}
          {isAvailableToday && (
            <span className="service-card__available">
              <span className="service-card__available-dot" />
              Available Today
            </span>
          )}

          {/* Provider Logo */}
          <div className="service-card__provider-logo">
            <span className="service-card__provider-initials">{providerInitials}</span>
            {isVerified && (
              <span className="service-card__verified" title="Verified Provider">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="service-card__body">
          <h3 className="service-card__name">{name}</h3>
          <p className="service-card__provider">{providerName}</p>
          <span className="service-card__category">{category}</span>

          {/* Rating */}
          <div className="service-card__rating">
            <span className="service-card__stars">{renderStars(rating)}</span>
            <span className="service-card__rating-value">{rating.toFixed(1)}</span>
            <span className="service-card__review-count">({totalReviews})</span>
          </div>

          {/* Meta Info */}
          <div className="service-card__meta">
            <div className="service-card__meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
              <span>From \u20B9{startingPrice}</span>
            </div>
            <div className="service-card__meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{estimatedDuration}</span>
            </div>
            <div className="service-card__meta-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{distance}</span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="service-card__actions">
          <span className="service-card__btn service-card__btn--book">Book Service</span>
          <span className="service-card__btn service-card__btn--details">View Details</span>
        </div>
      </Link>
    </article>
  );
}

export default ServiceCard;
