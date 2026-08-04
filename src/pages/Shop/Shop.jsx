  import { useState } from "react";
  import { Link } from "react-router-dom";
  import ShopHeroBanner from "../../components/shop/ShopHeroBanner";
  import ShopCategories from "../../components/shop/ShopCategories";
  import Sidebar from "../../components/shop/Sidebar";
  import ProductGrid from "../../components/shop/ProductGrid";
  import Pagination from "../../components/shop/Pagination";
  import FooterPromoBanner from "../../components/shop/FooterPromoBanner";
  import { ALL_PRODUCTS } from "../../data/products";
  import "../Home/Home.css";
  import "./Shop.css";

  function Shop() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(16);

    const totalPages = Math.max(1, Math.ceil(ALL_PRODUCTS.length / perPage));

    const handlePerPageChange = (value) => {
      setPerPage(value);
      setCurrentPage(1);
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
            <li className="breadcrumb__item breadcrumb__item--active" aria-current="page">
              Shop
            </li>
          </ol>
        </nav>

        <ShopHeroBanner />

        <ShopCategories />

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
            <ProductGrid
              onOpenSidebar={() => setSidebarOpen(true)}
              total={ALL_PRODUCTS.length}
              currentPage={currentPage}
              perPage={perPage}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              perPage={perPage}
              onPageChange={setCurrentPage}
              onPerPageChange={handlePerPageChange}
            />
          </div>

          <div className="shop-layout__banner">
            <FooterPromoBanner />
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
