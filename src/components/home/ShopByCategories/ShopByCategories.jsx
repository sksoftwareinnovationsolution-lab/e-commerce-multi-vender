import { Link } from "react-router-dom";

const SHOP_CATEGORIES = [
  { id: 1, label: "Electronics", icon: "🖥️", count: "2,400+" },
  { id: 2, label: "Fashion", icon: "👕", count: "1,800+" },
  { id: 3, label: "Home & Living", icon: "🏠", count: "1,200+" },
  { id: 4, label: "Beauty", icon: "💄", count: "950+" },
  { id: 5, label: "Grocery", icon: "🛒", count: "3,100+" },
  { id: 6, label: "Sports", icon: "⚽", count: "680+" },
  { id: 7, label: "Books", icon: "📚", count: "2,200+" },
  { id: 8, label: "Automobile", icon: "🚗", count: "540+" },
];

function ShopByCategories() {
  return (
    <section className="shop-by-cats" aria-label="Shop By Category">
      <div className="shop-by-cats__header">
        <div className="shop-by-cats__header-text">
          <h2 className="shop-by-cats__title">Shop By Category</h2>
          <p className="shop-by-cats__subtitle">
            Explore thousands of products across top categories.
          </p>
        </div>
        <Link to="/shop" className="shop-by-cats__view-all">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      <div className="shop-by-cats__row">
        {SHOP_CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to="/shop"
            className="shop-by-cats__tile"
          >
            <span className="shop-by-cats__tile-icon" role="img" aria-hidden="true">
              {cat.icon}
            </span>
            <span className="shop-by-cats__tile-label">{cat.label}</span>
          </Link>
        ))}
        <Link to="/shop" className="shop-by-cats__tile shop-by-cats__tile--view-all">
          <span className="shop-by-cats__tile-label">View All</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default ShopByCategories;
