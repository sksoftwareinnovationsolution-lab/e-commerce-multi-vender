import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ShopCard from "../../components/home/NearbyShops/ShopCard";
import { DUMMY_SHOPS, filterShops } from "../../data/shops";
import "../Home/Home.css";
import "../Products/Products.css";

function FeaturedShops() {
  const featured = DUMMY_SHOPS.filter((s) => s.isVerified).slice(0, 4);

  return (
    <section className="top-providers" aria-label="Featured Shops">
      <div className="top-providers__header">
        <div className="top-providers__header-text">
          <h2 className="top-providers__title">Featured Shops</h2>
          <p className="top-providers__subtitle">
            Trusted stores with the best ratings.
          </p>
        </div>
      </div>

      <div className="shops-listing__grid">
        {featured.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </section>
  );
}

function Shops() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredShops = useMemo(
    () => filterShops(DUMMY_SHOPS, searchQuery),
    [searchQuery]
  );

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
            Shops
          </li>
        </ol>
      </nav>

      {/* Shops Banner */}
      <div className="shops-banner">
        <h1 className="shops-banner__title">Explore Trusted Shops</h1>
        <p className="shops-banner__subtitle">
          Discover {DUMMY_SHOPS.length} verified stores near your location.
        </p>
      </div>

      {/* Search Bar */}
      <div className="services-listing__search-wrap">
        <div className="services-listing__search">
          <svg className="services-listing__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="services-listing__search-input"
            placeholder="Search shops by name, category, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search shops"
          />
          {searchQuery && (
            <button
              type="button"
              className="services-listing__search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div className="services-listing__toolbar">
        <span className="services-listing__showing">
          Showing {filteredShops.length} of {DUMMY_SHOPS.length} shops
        </span>
      </div>

      {/* Shops Grid */}
      {filteredShops.length === 0 ? (
        <div className="nearby-empty">
          <div className="nearby-empty__icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="nearby-empty__title">No shops found</h3>
          <p className="nearby-empty__desc">
            No shops match your search. Try adjusting your search terms.
          </p>
        </div>
      ) : (
        <div className="shops-listing__grid">
          {filteredShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      )}

      <FeaturedShops />

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

export default Shops;
