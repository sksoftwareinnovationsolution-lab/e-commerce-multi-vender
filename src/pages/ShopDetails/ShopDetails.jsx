import { useParams, Link } from "react-router-dom";
import "./ShopDetails.css";

const DUMMY_SHOPS = {
  "shop-001": {
    name: "TechGadget Hub",
    category: "Electronics & Gadgets",
    location: "Koramangala, Bangalore",
    rating: 4.8,
    totalReviews: 1243,
    totalProducts: 186,
    deliveryTime: "2-4 hrs",
    isOpen: true,
    isVerified: true,
    description:
      "Your one-stop destination for the latest electronics and gadgets. We offer genuine products with manufacturer warranty and fast delivery.",
  },
};

function ShopDetails() {
  const { id } = useParams();
  const shop = DUMMY_SHOPS[id] || {
    name: "Shop",
    category: "General",
    location: "Location",
    rating: 0,
    totalReviews: 0,
    totalProducts: 0,
    deliveryTime: "N/A",
    isOpen: false,
    isVerified: false,
    description: "Shop details coming soon.",
  };

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
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">
              Shops
            </Link>
          </li>
          <li className="breadcrumb__separator">/</li>
          <li className="breadcrumb__item breadcrumb__item--active" aria-current="page">
            {shop.name}
          </li>
        </ol>
      </nav>

      <div className="shop-details">
        <div className="shop-details__cover">
          <div className="shop-details__cover-placeholder">Cover Photo</div>
        </div>

        <div className="shop-details__info">
          <div className="shop-details__logo">
            <span className="shop-details__logo-letter">{shop.name.charAt(0)}</span>
            {shop.isVerified && (
              <span className="shop-details__verified-badge">Verified</span>
            )}
          </div>

          <div className="shop-details__content">
            <h1 className="shop-details__name">{shop.name}</h1>
            <span className="shop-details__category">{shop.category}</span>
            <span className="shop-details__location">{shop.location}</span>

            <div className="shop-details__rating">
              <span className="shop-details__stars">★★★★★</span>
              <span>{shop.rating > 0 ? shop.rating.toFixed(1) : "N/A"}</span>
              <span className="shop-details__reviews">
                ({shop.totalReviews.toLocaleString()} reviews)
              </span>
            </div>

            <p className="shop-details__description">{shop.description}</p>

            <div className="shop-details__meta">
              <div className="shop-details__meta-item">
                <strong>{shop.totalProducts}</strong>
                <span>Products</span>
              </div>
              <div className="shop-details__meta-item">
                <strong>{shop.deliveryTime}</strong>
                <span>Delivery</span>
              </div>
              <div className="shop-details__meta-item">
                <strong className={shop.isOpen ? "shop-details__open" : "shop-details__closed"}>
                  {shop.isOpen ? "Open Now" : "Closed"}
                </strong>
                <span>Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetails;
