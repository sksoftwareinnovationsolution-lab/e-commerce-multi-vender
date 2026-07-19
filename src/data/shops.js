/* ========================================
   shops.js — Dummy Shop Data
   Structured for easy backend API integration.
   Replace DUMMY_SHOPS with API call later.
   ======================================== */

export const DUMMY_SHOPS = [
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

/**
 * Helper to get shop by ID.
 * Later this can be replaced with an API call.
 */
export function getShopById(id) {
  return DUMMY_SHOPS.find((s) => s.id === id) || null;
}

/**
 * Helper to filter shops by search query.
 * Later this can be replaced with an API call.
 */
export function filterShops(shops, query) {
  if (!query || !query.trim()) return shops;
  const q = query.toLowerCase().trim();
  return shops.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.location.toLowerCase().includes(q)
  );
}
