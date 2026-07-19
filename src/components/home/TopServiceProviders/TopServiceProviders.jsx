import { Link } from "react-router-dom";
import { DUMMY_SERVICES } from "../../../data/services";

const PROVIDER_EXPERIENCE = {
  "svc-001": "10+ years",
  "svc-002": "8+ years",
  "svc-003": "12+ years",
  "svc-004": "6+ years",
  "svc-005": "9+ years",
  "svc-006": "7+ years",
  "svc-007": "11+ years",
  "svc-008": "5+ years",
  "svc-009": "8+ years",
  "svc-010": "7+ years",
  "svc-011": "6+ years",
  "svc-012": "9+ years",
};

const topProviders = DUMMY_SERVICES.filter((s) => s.rating >= 4.6)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 6);

function renderStars(val) {
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
}

function TopServiceProviders() {
  return (
    <section className="top-providers" aria-label="Top Service Providers">
      <div className="top-providers__header">
        <div className="top-providers__header-text">
          <h2 className="top-providers__title">Top Service Providers</h2>
          <p className="top-providers__subtitle">
            Highly rated professionals you can trust.
          </p>
        </div>
        <Link to="/services" className="top-providers__view-all">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      <div className="top-providers__row">
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
              <span className="top-providers__card-exp">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {PROVIDER_EXPERIENCE[provider.id] || "5+ years"}
              </span>
            </div>
            <span className="top-providers__card-book">Book Service</span>
          </Link>
        ))}
        <Link to="/services" className="top-providers__card top-providers__card--view-all">
          <span className="top-providers__card-label">View All</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default TopServiceProviders;
