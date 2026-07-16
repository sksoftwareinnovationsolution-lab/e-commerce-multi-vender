import { useState } from "react";
import "../shop/CategoryStrip.css";

const categories = [
  { id: "all", label: "All" },
  { id: "electronics", label: "Electronics" },
  { id: "fashion", label: "Fashion" },
  { id: "home", label: "Home" },
  { id: "beauty", label: "Beauty" },
  { id: "grocery", label: "Grocery" },
  { id: "automobile", label: "Automobile" },
  { id: "sports", label: "Sports" },
  { id: "books", label: "Books" },
  { id: "more", label: "More" },
];

function CategoryStrip() {
  const [activeId, setActiveId] = useState("all");

  return (
    <nav className="catstrip" aria-label="Product categories">
      <div className="catstrip__inner">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`catstrip__item ${
              activeId === cat.id ? "catstrip__item--active" : ""
            }`}
            type="button"
            onClick={() => setActiveId(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default CategoryStrip;
