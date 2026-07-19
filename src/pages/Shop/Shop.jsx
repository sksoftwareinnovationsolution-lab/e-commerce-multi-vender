import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/shop/Sidebar";
import ProductGrid from "../../components/shop/ProductGrid";
import Pagination from "../../components/shop/Pagination";
import { ALL_PRODUCTS } from "../../data/products";
import "../Home/Home.css";
import "./Shop.css";

function Shop() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <li className="breadcrumb__item breadcrumb__item--active" aria-current="page">
            Shop
          </li>
        </ol>
      </nav>

      <div className="listing-page__header">
        <div className="listing-page__header-text">
          <h1 className="listing-page__title">All Products</h1>
          <p className="listing-page__subtitle">
            Browse our complete collection of {ALL_PRODUCTS.length} products.
          </p>
        </div>
      </div>

      <div className="shop-layout">
        <div className="shop-layout__sidebar">
          <Sidebar />
        </div>

        {sidebarOpen && (
          <div className="shop-layout__overlay" onClick={() => setSidebarOpen(false)} />
        )}
        <div className={`shop-layout__drawer ${sidebarOpen ? "shop-layout__drawer--open" : ""}`}>
          <div className="shop-layout__drawer-header">
            <span className="shop-layout__drawer-title">Filters</span>
            <button
              className="shop-layout__drawer-close"
              type="button"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close filters"
            >
              ✕
            </button>
          </div>
          <Sidebar />
        </div>

        <div className="shop-layout__content">
          <ProductGrid onOpenSidebar={() => setSidebarOpen(true)} total={ALL_PRODUCTS.length} />
          <Pagination />
        </div>
      </div>

      <div className="view-less">
        <Link to="/" className="view-less__link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Shop;
