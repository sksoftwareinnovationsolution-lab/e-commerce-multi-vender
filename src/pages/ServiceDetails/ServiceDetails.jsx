import { useParams, Link } from "react-router-dom";
import { getServiceById, getSimilarServices } from "../../data/services";
import "./ServiceDetails.css";

const DAYS_ORDER = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function ServiceDetails() {
  const { id } = useParams();
  const service = getServiceById(id);

  if (!service) {
    return (
      <div className="container">
        <div className="svc-detail-empty">
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist or has been removed.</p>
          <Link to="/" className="svc-detail-empty__btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  const similar = getSimilarServices(service.id, service.categoryTag, 4);

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

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();

  return (
    <div className="container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">Home</Link>
          </li>
          <li className="breadcrumb__separator">/</li>
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">Services</Link>
          </li>
          <li className="breadcrumb__separator">/</li>
          <li className="breadcrumb__item breadcrumb__item--active" aria-current="page">
            {service.name}
          </li>
        </ol>
      </nav>

      <div className="svc-detail">
        {/* Hero Banner */}
        <div className="svc-detail__hero">
          <div className="svc-detail__hero-img">
            {service.bannerImage ? (
              <img src={service.bannerImage} alt={service.name} />
            ) : (
              <div className="svc-detail__hero-placeholder">
                <span className="svc-detail__hero-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                  </svg>
                </span>
                <span>{service.category}</span>
              </div>
            )}
          </div>
        </div>

        {/* Provider Info + Service Info Layout */}
        <div className="svc-detail__layout">
          {/* Left: Main Content */}
          <div className="svc-detail__main">
            {/* Service Header */}
            <div className="svc-detail__header">
              <div className="svc-detail__provider-row">
                <div className="svc-detail__provider-logo">
                  <span>{service.providerInitials}</span>
                  {service.isVerified && (
                    <span className="svc-detail__verified-badge" title="Verified Provider">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="svc-detail__provider-info">
                  <h1 className="svc-detail__name">{service.name}</h1>
                  <p className="svc-detail__provider-name">{service.providerName}</p>
                </div>
              </div>
              <div className="svc-detail__rating-row">
                <span className="svc-detail__stars">{renderStars(service.rating)}</span>
                <span className="svc-detail__rating-value">{service.rating.toFixed(1)}</span>
                <span className="svc-detail__review-count">({service.totalReviews} reviews)</span>
                <span className="svc-detail__category-badge">{service.category}</span>
              </div>
            </div>

            {/* About */}
            <div className="svc-detail__section">
              <h2 className="svc-detail__section-title">About This Service</h2>
              <p className="svc-detail__description">{service.description}</p>
            </div>

            {/* Features */}
            <div className="svc-detail__section">
              <h2 className="svc-detail__section-title">What&apos;s Included</h2>
              <ul className="svc-detail__features">
                {service.features.map((feat, i) => (
                  <li key={i} className="svc-detail__feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours */}
            <div className="svc-detail__section">
              <h2 className="svc-detail__section-title">Working Hours</h2>
              <div className="svc-detail__hours">
                {DAYS_ORDER.map((day) => (
                  <div
                    key={day}
                    className={`svc-detail__hour-row ${day === today ? "svc-detail__hour-row--today" : ""}`}
                  >
                    <span className="svc-detail__day">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                    <span className={`svc-detail__time ${service.workingHours[day] === "Closed" ? "svc-detail__time--closed" : ""}`}>
                      {service.workingHours[day]}
                    </span>
                    {day === today && <span className="svc-detail__today-badge">Today</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="svc-detail__section">
              <h2 className="svc-detail__section-title">Customer Reviews</h2>
              <div className="svc-detail__reviews">
                {service.reviews.map((review) => (
                  <div key={review.id} className="svc-detail__review">
                    <div className="svc-detail__review-header">
                      <div className="svc-detail__review-avatar">{review.userName.charAt(0)}</div>
                      <div className="svc-detail__review-meta">
                        <span className="svc-detail__review-name">{review.userName}</span>
                        <span className="svc-detail__review-date">{review.date}</span>
                      </div>
                      <span className="svc-detail__review-stars">{renderStars(review.rating)}</span>
                    </div>
                    <p className="svc-detail__review-text">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <aside className="svc-detail__sidebar">
            {/* Pricing Card */}
            <div className="svc-detail__pricing-card">
              <div className="svc-detail__price-label">Starting From</div>
              <div className="svc-detail__price">\u20B9{service.startingPrice}</div>
              <div className="svc-detail__price-meta">
                <div className="svc-detail__price-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Est. {service.estimatedDuration}</span>
                </div>
                <div className="svc-detail__price-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{service.distance} away</span>
                </div>
                {service.isAvailableToday && (
                  <div className="svc-detail__price-meta-item svc-detail__price-meta-item--available">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Available Today</span>
                  </div>
                )}
              </div>
              <button type="button" className="svc-detail__book-btn">
                Book Service
              </button>
              <p className="svc-detail__price-note">You won&apos;t be charged yet</p>
            </div>

            {/* Similar Services */}
            {similar.length > 0 && (
              <div className="svc-detail__similar">
                <h3 className="svc-detail__similar-title">Similar Services</h3>
                {similar.map((s) => (
                  <Link key={s.id} to={`/service/${s.id}`} className="svc-detail__similar-card">
                    <div className="svc-detail__similar-logo">{s.providerInitials}</div>
                    <div className="svc-detail__similar-info">
                      <span className="svc-detail__similar-name">{s.name}</span>
                      <span className="svc-detail__similar-rating">
                        {"\u2605"} {s.rating.toFixed(1)} ({s.totalReviews})
                      </span>
                      <span className="svc-detail__similar-price">From \u20B9{s.startingPrice}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
