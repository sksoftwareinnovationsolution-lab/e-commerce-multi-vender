import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/home/NearbyServices/ServiceCard";
import { DUMMY_SERVICES, SERVICE_CATEGORIES, filterServices } from "../../data/services";
import "../Home/Home.css";
import "../Products/Products.css";

function TopProfessionals() {
  const topProviders = DUMMY_SERVICES.filter((s) => s.rating >= 4.6)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  const renderStars = (val) => {
    const full = Math.floor(val);
    const half = val % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return (
      <>
        {"★".repeat(full)}
        {half ? "½" : ""}
        {"☆".repeat(empty)}
      </>
    );
  };

  return (
    <section className="top-providers" aria-label="Top Professionals">
      <div className="top-providers__header">
        <div className="top-providers__header-text">
          <h2 className="top-providers__title">Top Professionals</h2>
          <p className="top-providers__subtitle">
            Highly rated experts in your area.
          </p>
        </div>
      </div>

      <div className="top-providers__grid">
        {topProviders.map((provider) => (
          <Link
            key={provider.id}
            to={`/service/${provider.id}`}
            className="top-providers__card"
          >
            <div className="top-providers__card-avatar">
              <span className="top-providers__card-initials">{provider.providerInitials}</span>
              {provider.isVerified && (
                <span className="top-providers__card-verified" title="Verified">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </div>
            <div className="top-providers__card-info">
              <h3 className="top-providers__card-name">{provider.providerName}</h3>
              <span className="top-providers__card-category">{provider.category}</span>
              <div className="top-providers__card-rating">
                <span className="top-providers__card-stars">{renderStars(provider.rating)}</span>
                <span className="top-providers__card-value">{provider.rating.toFixed(1)}</span>
                <span className="top-providers__card-reviews">({provider.totalReviews})</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = useMemo(
    () => filterServices(DUMMY_SERVICES, searchQuery, activeCategory),
    [searchQuery, activeCategory]
  );

  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">
              Home
            </Link>
          </li>
          <li className="breadcrumb__separator">/</li>
          <li className="breadcrumb__item breadcrumb__item--active" aria-current="page">
            Services
          </li>
        </ol>
      </nav>

      {/* Services Banner */}
      <div className="services-banner">
        <h1 className="services-banner__title">Find Trusted Services</h1>
        <p className="services-banner__subtitle">
          Connect with verified professionals for all your home and personal needs.
        </p>
      </div>

      {/* Search Bar */}
      <div className="services-listing__search-wrap">
        <div className="services-listing__search">
          <svg className="services-listing__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="services-listing__search-input"
            placeholder="Search services, providers, categories..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            aria-label="Search services"
          />
          {searchQuery && (
            <button
              type="button"
              className="services-listing__search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="services-listing__chips" role="tablist" aria-label="Service categories">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`services-listing__chip ${activeCategory === cat.id ? "services-listing__chip--active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="services-listing__toolbar">
        <span className="services-listing__showing">
          Showing {filteredServices.length} of {DUMMY_SERVICES.length} services
        </span>
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div className="svc-empty">
          <div className="svc-empty__icon">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <h3 className="svc-empty__title">No services available</h3>
          <p className="svc-empty__desc">
            No services match your criteria. Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="services-listing__grid">
          {filteredServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      )}

      <TopProfessionals />

      <div className="view-less">
        <Link to="/" className="view-less__link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Services;
