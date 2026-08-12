import { Link } from "react-router-dom";
import { Star } from "lucide-react";

/* Compact marketplace-style card for the "All Services" listing grid.
   Kept separate from NearbyServices/ServiceCard so the homepage
   section and its slider remain unchanged. */

function ServiceListingCard({ service }) {
  const {
    id,
    name,
    category,
    rating,
    totalReviews,
    startingPrice,
    bannerImage,
  } = service;

  return (
    <article className="service-listing-card" tabIndex={0} role="link" aria-label={`${name} starting at ₹${startingPrice}`}>
      <Link to={`/service/${id}`} className="service-listing-card__link">
        {/* Image */}
        <div className="service-listing-card__image">
          {bannerImage ? (
            <img src={bannerImage} alt={`${name} service`} loading="lazy" />
          ) : (
            <span className="service-listing-card__image-placeholder">{category}</span>
          )}
        </div>

        {/* Content */}
        <div className="service-listing-card__body">
          <h3 className="service-listing-card__name">{name}</h3>

          <div className="service-listing-card__rating">
            <Star
              className="service-listing-card__rating-star"
              size={13}
              fill="currentColor"
              strokeWidth={0}
              aria-hidden="true"
            />
            <span className="service-listing-card__rating-value">{rating.toFixed(1)}</span>
            <span className="service-listing-card__review-count">({totalReviews})</span>
          </div>

          <div className="service-listing-card__price">
            <span className="service-listing-card__price-label">Starting at</span>
            <span className="service-listing-card__price-value">
              ₹{startingPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="service-listing-card__footer">
          <span className="service-listing-card__btn">Book Now</span>
        </div>
      </Link>
    </article>
  );
}

export default ServiceListingCard;
