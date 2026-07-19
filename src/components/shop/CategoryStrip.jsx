import { Link } from "react-router-dom";
import "../shop/CategoryStrip.css";

const CATEGORIES = [
  { id: "electronics", label: "Electronics", icon: "🖥️" },
  { id: "fashion", label: "Fashion", icon: "👕" },
  { id: "home", label: "Home & Living", icon: "🏠" },
  { id: "beauty", label: "Beauty", icon: "💄" },
  { id: "grocery", label: "Grocery", icon: "🛒" },
  { id: "sports", label: "Sports", icon: "⚽" },
  { id: "books", label: "Books", icon: "📚" },
  { id: "automobile", label: "Automobile", icon: "🚗" },
];

function CategoryStrip() {
  return (
    <section className="categories" aria-label="Categories">
      <div className="categories__inner">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to="/shop"
            className="categories__item"
          >
            <span className="categories__icon" role="img" aria-hidden="true">
              {cat.icon}
            </span>
            <span className="categories__label">{cat.label}</span>
          </Link>
        ))}
        <Link to="/shop" className="categories__item categories__item--view-all">
          <span className="categories__label">View All</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default CategoryStrip;
