import { useState, useEffect } from "react";
import ShopCard from "./ShopCard";
import "../NearbyShops/NearbyShops.css";

const DUMMY_SHOPS = [
  {
    id: "shop-001",
    name: "TechGadget Hub",
    category: "Electronics & Gadgets",
    rating: 4.8,
    totalReviews: 1243,
    location: "Koramangala, Bangalore",
    distance: "1.2 km away",
    totalProducts: 186,
    deliveryTime: "2-4 hrs",
    isOpen: true,
    isVerified: true,
    coverImage: null,
    logoImage: null,
  },
  {
    id: "shop-002",
    name: "StyleBazaar Fashion",
    category: "Fashion & Apparel",
    rating: 4.5,
    totalReviews: 876,
    location: "Indiranagar, Bangalore",
    distance: "2.8 km away",
    totalProducts: 342,
    deliveryTime: "3-5 hrs",
    isOpen: true,
    isVerified: true,
    coverImage: null,
    logoImage: null,
  },
  {
    id: "shop-003",
    name: "FreshMart Organics",
    category: "Grocery & Organic",
    rating: 4.6,
    totalReviews: 534,
    location: "HSR Layout, Bangalore",
    distance: "0.8 km away",
    totalProducts: 97,
    deliveryTime: "1-2 hrs",
    isOpen: false,
    isVerified: false,
    coverImage: null,
    logoImage: null,
  },
  {
    id: "shop-004",
    name: "HomeDecor Studio",
    category: "Home & Living",
    rating: 4.3,
    totalReviews: 321,
    location: "Whitefield, Bangalore",
    distance: "5.4 km away",
    totalProducts: 214,
    deliveryTime: "4-6 hrs",
    isOpen: true,
    isVerified: true,
    coverImage: null,
    logoImage: null,
  },
  {
    id: "shop-005",
    name: "Gourmet Kitchen",
    category: "Food & Beverages",
    rating: 4.7,
    totalReviews: 698,
    location: "JP Nagar, Bangalore",
    distance: "3.1 km away",
    totalProducts: 153,
    deliveryTime: "2-3 hrs",
    isOpen: true,
    isVerified: false,
    coverImage: null,
    logoImage: null,
  },
  {
    id: "shop-006",
    name: "FitnessFuel Sports",
    category: "Sports & Fitness",
    rating: 4.4,
    totalReviews: 412,
    location: "Marathahalli, Bangalore",
    distance: "4.7 km away",
    totalProducts: 128,
    deliveryTime: "3-5 hrs",
    isOpen: true,
    isVerified: true,
    coverImage: null,
    logoImage: null,
  },
  {
    id: "shop-007",
    name: "PetPals Paradise",
    category: "Pets & Animals",
    rating: 4.9,
    totalReviews: 267,
    location: "Electronic City, Bangalore",
    distance: "7.2 km away",
    totalProducts: 89,
    deliveryTime: "5-7 hrs",
    isOpen: false,
    isVerified: true,
    coverImage: null,
    logoImage: null,
  },
  {
    id: "shop-008",
    name: "BookNook Library",
    category: "Books & Stationery",
    rating: 4.6,
    totalReviews: 543,
    location: "MG Road, Bangalore",
    distance: "2.3 km away",
    totalProducts: 276,
    deliveryTime: "3-4 hrs",
    isOpen: true,
    isVerified: false,
    coverImage: null,
    logoImage: null,
  },
];

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
  const displayShops = showEmpty ? [] : dataReady ? shops : [];

  return (
    <section className="nearby-shops" aria-label="Nearby Shops">
      {/* Section Header */}
      <div className="nearby-shops__header">
        <div className="nearby-shops__header-text">
          <h2 className="nearby-shops__title">Nearby Shops</h2>
          <p className="nearby-shops__subtitle">
            Explore trusted stores near your selected location.
          </p>
        </div>
        <a href="/shops" className="nearby-shops__view-all">
          View All Shops
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
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
