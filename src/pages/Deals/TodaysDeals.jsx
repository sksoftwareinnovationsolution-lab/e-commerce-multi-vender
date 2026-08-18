import { Link } from "react-router-dom";
import { ChevronRight, Flame } from "lucide-react";

import electronicsDeals from "../../assets/images/deals/electronics-deals.png";
import fashionDeals from "../../assets/images/deals/fashion-deals.png";
import homeKitchenDeals from "../../assets/images/deals/home-kitchen-deals.png";
import beautyDeals from "../../assets/images/deals/beauty-deals.png";

const DEALS_CATEGORIES = [
  {
    id: "electronics",
    category: "ELECTRONICS",
    offer: "Up to 70% Off",
    subtext: "On Top Brands",
    bg: "bg-[#F3F0FF]",
    borderColor: "border-[#ddd6fe]",
    hoverBg: "hover:bg-[#EDE9FE]",
    categoryColor: "text-[#6d28d9]",
    offerColor: "text-[#5b21b6]",
    subtextColor: "text-[#6b7280]",
    btnBorder: "border-[#7c3aed]",
    btnText: "text-[#7c3aed]",
    btnHoverBg: "hover:bg-[#7c3aed]",
    btnHoverText: "hover:text-white",
    image: electronicsDeals,
    alt: "Electronics deals — headphones, laptop, and camera",
  },
  {
    id: "fashion",
    category: "FASHION",
    offer: "Up to 60% Off",
    subtext: "On Latest Styles",
    bg: "bg-[#FFF0F3]",
    borderColor: "border-[#fecdd3]",
    hoverBg: "hover:bg-[#FFE4EC]",
    categoryColor: "text-[#db2777]",
    offerColor: "text-[#be185d]",
    subtextColor: "text-[#6b7280]",
    btnBorder: "border-[#ec4899]",
    btnText: "text-[#ec4899]",
    btnHoverBg: "hover:bg-[#ec4899]",
    btnHoverText: "hover:text-white",
    image: fashionDeals,
    alt: "Fashion deals — coral shirt and handbag",
  },
  {
    id: "home-kitchen",
    category: "HOME & KITCHEN",
    offer: "Up to 50% Off",
    subtext: "Make Home Better",
    bg: "bg-[#EFF6FF]",
    borderColor: "border-[#bfdbfe]",
    hoverBg: "hover:bg-[#DBEAFE]",
    categoryColor: "text-[#2563eb]",
    offerColor: "text-[#1d4ed8]",
    subtextColor: "text-[#6b7280]",
    btnBorder: "border-[#3b82f6]",
    btnText: "text-[#3b82f6]",
    btnHoverBg: "hover:bg-[#3b82f6]",
    btnHoverText: "hover:text-white",
    image: homeKitchenDeals,
    alt: "Home and kitchen deals — sofa and plant",
  },
  {
    id: "beauty",
    category: "BEAUTY",
    offer: "Up to 40% Off",
    subtext: "Glow Every Day",
    bg: "bg-[#FFF5F5]",
    borderColor: "border-[#fecdd3]",
    hoverBg: "hover:bg-[#FFE8E8]",
    categoryColor: "text-[#e11d48]",
    offerColor: "text-[#be123c]",
    subtextColor: "text-[#6b7280]",
    btnBorder: "border-[#f43f5e]",
    btnText: "text-[#f43f5e]",
    btnHoverBg: "hover:bg-[#f43f5e]",
    btnHoverText: "hover:text-white",
    image: beautyDeals,
    alt: "Beauty deals — cosmetics and skincare products",
  },
];

function TodaysDeals() {
  return (
    <section className="mb-10 mt-8" aria-label="Today's Deals">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-md">
            <Flame className="h-5 w-5 text-white" strokeWidth={2.5} fill="white" />
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Today's Deals
            </h2>
            <p className="text-[0.8rem] text-gray-500">
              New deals every day
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

      {/* Deal Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DEALS_CATEGORIES.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
}

function DealCard({ deal }) {
  return (
    <div
      className={`group flex flex-row items-center overflow-hidden rounded-2xl border ${deal.borderColor} shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] ${deal.bg}`}
    >
      {/* Left — Text Content */}
      <div className="flex flex-1 flex-col justify-center px-5 py-6">
        {/* Category */}
        <span
          className={`text-[0.7rem] font-semibold uppercase tracking-wider ${deal.categoryColor}`}
        >
          {deal.category}
        </span>

        {/* Offer */}
        <h3
          className={`mt-2 text-[1.35rem] font-bold leading-tight ${deal.offerColor}`}
        >
          {deal.offer}
        </h3>

        {/* Subtext */}
        <p className={`mt-1 text-[0.8rem] ${deal.subtextColor}`}>
          {deal.subtext}
        </p>

        {/* Shop Now Button */}
        <Link
          to="/shop"
          className={`mt-4 inline-flex w-fit items-center rounded-lg border-2 ${deal.btnBorder} ${deal.btnText} bg-white px-5 py-2 text-[0.8rem] font-semibold transition-all duration-200 ${deal.btnHoverBg} ${deal.btnHoverText}`}
        >
          Shop Now
        </Link>
      </div>

      {/* Right — Product Image */}
      <div className="flex flex-shrink-0 items-center justify-center pr-5 pl-2">
        <img
          src={deal.image}
          alt={deal.alt}
          className="h-[170px] w-[170px] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default TodaysDeals;
