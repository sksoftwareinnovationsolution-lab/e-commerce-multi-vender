import { Link } from "react-router-dom";
import "../shop/CategoryStrip.css";

const CATEGORIES = [
  { id: "electronics", label: "Electronics", color: "#3b82f6" },
  { id: "fashion", label: "Fashion", color: "#ec4899" },
  { id: "grocery", label: "Grocery", color: "#22c55e" },
  { id: "home-services", label: "Home Services", color: "#f97316" },
  { id: "beauty", label: "Beauty", color: "#a855f7" },
  { id: "repair", label: "Repair", color: "#eab308" },
  { id: "education", label: "Education", color: "#6366f1" },
  { id: "travel", label: "Travel", color: "#14b8a6" },
];

const iconStroke = {
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const CATEGORY_ICONS = {
  electronics: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  fashion: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <path d="M20.38 3.46 16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23Z" />
    </svg>
  ),
  grocery: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  "home-services": (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  beauty: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <rect x="9" y="1" width="6" height="4" rx="1" />
      <rect x="8" y="5" width="8" height="16" rx="2" />
      <line x1="10" y1="10" x2="14" y2="10" />
    </svg>
  ),
  repair: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  education: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  travel: (color) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} {...iconStroke}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
    </svg>
  ),
};

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
            <span className="categories__icon" aria-hidden="true">
              {CATEGORY_ICONS[cat.id]?.(cat.color)}
            </span>
            <span className="categories__label">{cat.label}</span>
          </Link>
        ))}
        <Link
          to="/categories"
          className="categories__item categories__item--view-all"
        >
          <span className="categories__icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="categories__label">View All</span>
        </Link>
      </div>
    </section>
  );
}

export default CategoryStrip;
