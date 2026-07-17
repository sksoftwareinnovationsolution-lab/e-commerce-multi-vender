import { Link } from "react-router-dom";
import "../NearbyShops/ShopCard.css";

function ShopCard({ shop }) {
  const {
    id,
    name,
    category,
    rating,
    totalReviews,
    location,
    distance,
    totalProducts,
    deliveryTime,
    isOpen,
    isVerified,
    coverImage,
    logoImage,
  } = shop;

  const renderStars = (ratingValue) => {
    const full = Math.floor(ratingValue);
    const half = ratingValue % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return (
      <>
        {"★".repeat(full)}
        {half && "½"}
        {"☆".repeat(empty)}
      </>
    );
  };

  return (
    <article className="shop-card" tabIndex={0} role="link" aria-label={`Visit ${name}`}>
      <Link to={`/shop/${id}`} className="shop-card__link">
        {/* Cover Image */}
        <div className="shop-card__cover">
          <div className="shop-card__cover-img">
            {coverImage ? (
              <img src={coverImage} alt={`${name} cover`} />
            ) : (
              <span className="shop-card__cover-placeholder">Cover Photo</span>
            )}
          </div>

          {/* Status Badge */}
          <span className={`shop-card__status ${isOpen ? "shop-card__status--open" : "shop-card__status--closed"}`}>
            {isOpen ? "Open" : "Closed"}
          </span>

          {/* Logo */}
          <div className="shop-card__logo-wrap">
            <div className="shop-card__logo">
              {logoImage ? (
                <img src={logoImage} alt={`${name} logo`} />
              ) : (
                <span className="shop-card__logo-placeholder">{name.charAt(0)}</span>
              )}
            </div>
            {isVerified && (
              <span className="shop-card__verified" title="Verified Shop">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2l2.09 1.57a2 2 0 001.16.36L18 4l.63 2.59a2 2 0 00.81 1.05L22 9l-1.57 1.83a2 2 0 00-.36 1.16L21 14l-2.09 1.57a2 2 0 00-.81 1.05L18 19l-2.59.63a2 2 0 00-1.05.81L13 22l-1.83-1.57a2 2 0 00-1.16-.36L9 20l-.63-2.59a2 2 0 00-.81-1.05L6 16l1.57-1.83a2 2 0 00.36-1.16L6 10l2.09-1.57a2 2 0 00.81-1.05L9 6l1.83 1.57a2 2 0 001.16.36L14 8" stroke="currentColor" strokeWidth="0" fill="none" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="shop-card__body">
          <div className="shop-card__header-row">
            <h3 className="shop-card__name">{name}</h3>
          </div>

          <span className="shop-card__category">{category}</span>

          <div className="shop-card__rating">
            <span className="shop-card__stars">{renderStars(rating)}</span>
            <span className="shop-card__rating-value">{rating.toFixed(1)}</span>
            <span className="shop-card__review-count">({totalReviews.toLocaleString()} reviews)</span>
          </div>

          <div className="shop-card__meta">
            <div className="shop-card__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{location}</span>
            </div>
            <div className="shop-card__meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{distance}</span>
            </div>
          </div>

          <div className="shop-card__stats">
            <div className="shop-card__stat">
              <span className="shop-card__stat-value">{totalProducts}</span>
              <span className="shop-card__stat-label">Products</span>
            </div>
            <div className="shop-card__stat-divider" />
            <div className="shop-card__stat">
              <span className="shop-card__stat-value">{deliveryTime}</span>
              <span className="shop-card__stat-label">Delivery</span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="shop-card__actions">
          <span className="shop-card__btn shop-card__btn--visit">Visit Store</span>
          <span className="shop-card__btn shop-card__btn--products">View Products</span>
        </div>
      </Link>
    </article>
  );
}

export default ShopCard;
