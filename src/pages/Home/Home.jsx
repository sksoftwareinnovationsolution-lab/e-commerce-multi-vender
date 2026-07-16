import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/shop/Banner";
import CategoryStrip from "../../components/shop/CategoryStrip";
import Sidebar from "../../components/shop/Sidebar";
import ProductGrid from "../../components/shop/ProductGrid";
import Pagination from "../../components/shop/Pagination";
import "../../pages/Home/Home.css";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container">
      {/* Breadcrumb */}
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

      {/* Promotional Banner */}
      <Banner />

      {/* Horizontal Category Menu */}
      <CategoryStrip />

      {/* Main Shop Layout */}
      <div className="shop-layout">
        {/* Desktop Sidebar */}
        <div className="shop-layout__sidebar">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Drawer */}
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

        {/* Right Content */}
        <div className="shop-layout__content">
          <ProductGrid onOpenSidebar={() => setSidebarOpen(true)} />
          <Pagination />
        </div>
      </div>

      {/* Bottom Promotional Banner */}
      <div className="promo-banner">
        <div className="promo-banner__placeholder">
          Promotional Banner
        </div>
      </div>
    </div>
  );
}

export default Home;
