import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Star, Heart, ChevronRight } from "lucide-react";

import noiseBudsVs103 from "../../assets/images/products/noise-buds-vs103.png";
import boatWaveCall2 from "../../assets/images/products/boat-wave-call-2.png";
import lg43Inch4kTv from "../../assets/images/products/lg-43-inch-4k-tv.png";
import pumaRunningShoes from "../../assets/images/products/puma-running-shoes.png";
import miPowerBank from "../../assets/images/products/mi-power-bank-20000mah.png";

const FLASH_DEALS_PRODUCTS = [
  {
    id: 1,
    image: noiseBudsVs103,
    title: "Noise Buds VS103",
    description: "Wireless Earbuds",
    rating: 4.4,
    reviewCount: "1.2K",
    price: "₹1,099",
    originalPrice: "₹2,999",
    discount: "60%",
    countdownSeconds: 9936,
  },
  {
    id: 2,
    image: boatWaveCall2,
    title: "boAt Wave Call 2",
    description: "Smart Watch",
    rating: 4.3,
    reviewCount: "2.1K",
    price: "₹1,599",
    originalPrice: "₹3,999",
    discount: "50%",
    countdownSeconds: 9893,
  },
  {
    id: 3,
    image: lg43Inch4kTv,
    title: "LG 43 inch 4K TV",
    description: "Ultra HD Smart TV",
    rating: 4.4,
    reviewCount: "2.5K",
    price: "₹28,999",
    originalPrice: "₹31,999",
    discount: "10%",
    countdownSeconds: 10114,
  },
  {
    id: 4,
    image: pumaRunningShoes,
    title: "Puma Men's Shoes",
    description: "Running Shoes",
    rating: 4.5,
    reviewCount: "1.2K",
    price: "₹1,799",
    originalPrice: "₹2,399",
    discount: "25%",
    countdownSeconds: 9994,
  },
  {
    id: 5,
    image: miPowerBank,
    title: "Mi Power Bank 20000mAh",
    description: "18W Fast Charging",
    rating: 4.5,
    reviewCount: "2.9K",
    price: "₹1,799",
    originalPrice: "₹3,999",
    discount: "55%",
    countdownSeconds: 9934,
  },
];

function useFlashCountdown(initialSeconds) {
  const [remaining, setRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function FlashDeals() {
  return (
    <section className="mb-10 mt-8" aria-label="Flash Deals">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 shadow-md">
            <Zap className="h-5 w-5 text-white" strokeWidth={2.5} fill="white" />
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Flash Deals
            </h2>
            <p className="text-[0.8rem] text-gray-500">
              Limited time offers on top products
            </p>
          </div>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-1 text-[0.9rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
        >
          View All Deals
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
        </Link>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {FLASH_DEALS_PRODUCTS.map((product) => (
          <FlashDealCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function FlashDealCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const countdown = useFlashCountdown(product.countdownSeconds);

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {/* Top Badges */}
      <div className="flex items-center justify-between px-3.5 pt-3.5 pb-1">
        <span className="inline-flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 px-2.5 py-1 text-[0.65rem] font-bold text-white shadow-sm">
          Ends in {countdown}
        </span>
        <span className="inline-flex items-center rounded-md border border-pink-300 bg-pink-50 px-2 py-0.5 text-[0.65rem] font-bold text-red-600">
          -{product.discount}
        </span>
      </div>

      {/* Product Image */}
      <div className="flex items-center justify-center px-4 py-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-[140px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-1.5 px-4 pb-2">
        {/* Title */}
        <h3 className="text-[0.875rem] font-semibold leading-snug text-[#111827]">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-[0.75rem] text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-0.5 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" strokeWidth={0} />
          <span className="text-[0.75rem] font-semibold text-[#111827]">
            {product.rating}
          </span>
          <span className="text-[0.7rem] text-gray-400">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-[1rem] font-bold text-[#111827]">
            {product.price}
          </span>
          <span className="text-[0.75rem] text-gray-400 line-through">
            {product.originalPrice}
          </span>
        </div>
      </div>

      {/* Add to Cart + Wishlist */}
      <div className="flex items-center gap-2.5 px-4 pb-4 pt-2">
        <button
          type="button"
          className="flex-1 cursor-pointer rounded-lg border-2 border-[#7c3aed] bg-white px-3 py-2 text-[0.8rem] font-semibold text-[#7c3aed] transition-all duration-200 hover:bg-[#7c3aed] hover:text-white"
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

export default FlashDeals;
