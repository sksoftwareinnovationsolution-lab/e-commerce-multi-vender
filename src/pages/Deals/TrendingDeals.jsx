import { useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Star, Heart, ChevronRight } from "lucide-react";

import sonyHeadphones from "../../assets/images/products/Sony.png";
import samsungMobile from "../../assets/images/products/Samsung-m14.png";
import hpLaptop from "../../assets/images/products/HP-15.png";
import bellaVitaPerfume from "../../assets/images/products/bella-vita.png";
import philipsMixer from "../../assets/images/products/Phillips-grinder.png";
import safariLuggage from "../../assets/images/products/safari-bag.png";

const TRENDING_PRODUCTS = [
  {
    id: 1,
    image: sonyHeadphones,
    title: "Sony WH-CH510",
    description: "Wireless Headphones",
    rating: 4.5,
    reviewCount: "760",
    price: "₹2,399",
    originalPrice: "₹6,499",
    discount: "63%",
  },
  {
    id: 2,
    image: samsungMobile,
    title: "Samsung Galaxy M14 5G",
    description: "4GB RAM, 128GB",
    rating: 4.4,
    reviewCount: "1,480",
    price: "₹12,499",
    originalPrice: "₹25,999",
    discount: "53%",
  },
  {
    id: 3,
    image: hpLaptop,
    title: "HP 15s Intel Core i5",
    description: "11th Gen Laptop",
    rating: 4.4,
    reviewCount: "980",
    price: "₹32,999",
    originalPrice: "₹54,999",
    discount: "40%",
  },
  {
    id: 4,
    image: bellaVitaPerfume,
    title: "Bella Vita Luxury",
    description: "Perfume for Men",
    rating: 4.5,
    reviewCount: "1,210",
    price: "₹849",
    originalPrice: "₹8,499",
    discount: "90%",
  },
  {
    id: 5,
    image: philipsMixer,
    title: "Philips Mixer Grinder",
    description: "750W, 3 Jars",
    rating: 4.5,
    reviewCount: "546",
    price: "₹2,699",
    originalPrice: "₹6,999",
    discount: "50%",
  },
  {
    id: 6,
    image: safariLuggage,
    title: "Safari Polypropylene",
    description: "55cm Cabin Luggage",
    rating: 4.4,
    reviewCount: "430",
    price: "₹2,199",
    originalPrice: "₹5,499",
    discount: "60%",
  },
];

function TrendingDeals() {
  return (
    <section className="mb-10 mt-8" aria-label="Trending Deals">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 shadow-md">
            <TrendingUp className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Trending Deals
            </h2>
            <p className="text-[0.8rem] text-gray-500">
              New deals every night now
            </p>
          </div>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-1 text-[0.9rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
        >
          View All
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
        </Link>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {TRENDING_PRODUCTS.map((product) => (
          <TrendingDealCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function TrendingDealCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* Discount Badge */}
      <div className="relative px-3.5 pt-3.5 pb-1">
        <span className="inline-flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 px-2.5 py-1 text-[0.65rem] font-bold text-white shadow-sm">
          -{product.discount}
        </span>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center px-3 py-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-[170px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-1.5 px-4 pb-2">
        <h3 className="text-[0.85rem] font-semibold leading-snug text-[#111827]">
          {product.title}
        </h3>
        <p className="text-[0.7rem] text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-0.5 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" strokeWidth={0} />
          <span className="text-[0.75rem] font-semibold text-[#111827]">
            {product.rating}
          </span>
          <span className="text-[0.65rem] text-gray-400">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-[0.95rem] font-bold text-[#111827]">
            {product.price}
          </span>
          <span className="text-[0.7rem] text-gray-400 line-through">
            {product.originalPrice}
          </span>
        </div>
      </div>

      {/* Add to Cart + Wishlist */}
      <div className="flex items-center gap-2.5 px-4 pb-4 pt-2">
        <button
          type="button"
          className="flex-1 cursor-pointer rounded-lg border-2 border-[#7c3aed] bg-white px-3 py-2 text-[0.75rem] font-semibold text-[#7c3aed] transition-all duration-200 hover:bg-[#7c3aed] hover:text-white"
        >
          Add to Cart
        </button>
        <button
          type="button"
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:border-red-300 hover:bg-red-50"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-[18px] w-[18px] transition-colors duration-200 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
            strokeWidth={2}
          />
        </button>
      </div>
    </div>
  );
}

export default TrendingDeals;
