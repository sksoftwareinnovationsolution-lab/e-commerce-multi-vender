import { useState } from "react";
import ProductCard from "./ProductCard";
import { ALL_PRODUCTS } from "../../data/products";
import "../shop/ProductGrid.css";

function ProductGrid({ onOpenSidebar, limit, total, hideToolbar }) {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("relevance");

  const displayProducts = limit ? ALL_PRODUCTS.slice(0, limit) : ALL_PRODUCTS;
  const totalCount = total || ALL_PRODUCTS.length;

  return (
    <section className="pgrid">
      {!hideToolbar && (
        <div className="pgrid__toolbar">
          <div className="pgrid__toolbar-left">
            <button
              className="pgrid__filter-toggle"
              type="button"
              onClick={onOpenSidebar}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="14" y2="12" />
                <line x1="4" y1="18" x2="8" y2="18" />
              </svg>
              Filters
            </button>
            <span className="pgrid__showing">Showing 1–{displayProducts.length} of {totalCount} products</span>
          </div>
          <div className="pgrid__toolbar-right">
            <select
              className="pgrid__sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">Sort By: Relevance</option>
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
            <div className="pgrid__view-btns">
              <button
                className={`pgrid__view-btn ${
                  viewMode === "grid" ? "pgrid__view-btn--active" : ""
                }`}
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                className={`pgrid__view-btn ${
                  viewMode === "list" ? "pgrid__view-btn--active" : ""
                }`}
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`pgrid__items pgrid__items--${viewMode}`}>
        {displayProducts.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
