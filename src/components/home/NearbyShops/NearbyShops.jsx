import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopCard from "./ShopCard";
import { DUMMY_SHOPS } from "../../../data/shops";
import "../NearbyShops/NearbyShops.css";

function SkeletonCard() {
  return (
    <div className="shop-skeleton">
      <div className="shop-skeleton__cover">
        <div className="shop-skeleton__shimmer" />
      </div>
      <div className="shop-skeleton__body">
        <div className="shop-skeleton__logo" />
        <div className="shop-skeleton__line shop-skeleton__line--title" />
        <div className="shop-skeleton__line shop-skeleton__line--category" />
        <div className="shop-skeleton__line shop-skeleton__line--rating" />
        <div className="shop-skeleton__line shop-skeleton__line--meta" />
        <div className="shop-skeleton__line shop-skeleton__line--meta shop-skeleton__line--short" />
        <div className="shop-skeleton__stats">
          <div className="shop-skeleton__stat" />
          <div className="shop-skeleton__stat" />
        </div>
      </div>
      <div className="shop-skeleton__actions">
        <div className="shop-skeleton__btn" />
        <div className="shop-skeleton__btn shop-skeleton__btn--filled" />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="nearby-empty">
      <div className="nearby-empty__icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
      <h3 className="nearby-empty__title">No nearby shops found</h3>
      <p className="nearby-empty__desc">
        We couldn&apos;t find any shops in your area. Try adjusting your location or check back later.
      </p>
    </div>
  );
}

function NearbyShops({ shops = DUMMY_SHOPS, isLoading = false, showEmpty = false }) {
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDataReady(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const loading = isLoading || !dataReady;
  const displayShops = showEmpty ? [] : dataReady ? shops.slice(0, 4) : [];

  return (
    <section className="nearby-shops" id="featured-shops" aria-label="Featured Shops">
      {/* Section Header */}
      <div className="nearby-shops__header">
        <div className="nearby-shops__header-text">
          <h2 className="nearby-shops__title">Featured Shops</h2>
          <p className="nearby-shops__subtitle">
            Explore trusted stores near your selected location.
          </p>
        </div>
        <Link to="/shops" className="nearby-shops__view-all">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      {/* Content */}
      {loading ? (
        <div className="nearby-shops__grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : displayShops.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="nearby-shops__grid">
          {displayShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      )}
    </section>
  );
}

export default NearbyShops;
