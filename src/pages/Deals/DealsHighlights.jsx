import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Ticket,
  Gift,
  Landmark,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

import shoesBy1Get1 from "../../assets/images/deals/shoes-by1get1.png";
import tShirtBy1Get1 from "../../assets/images/deals/t-shirt-by1get1.png";
import bodyWashBy1Get1 from "../../assets/images/deals/body-wash-by1get1.png";

const COUPONS = [
  {
    id: 1,
    code: "OMNI20",
    offer: "Get 20% OFF",
    condition: "On orders above ₹999",
  },
  {
    id: 2,
    code: "OMNI30",
    offer: "Get 30% OFF",
    condition: "On orders above ₹1,999",
  },
  {
    id: 3,
    code: "OMNI50",
    offer: "Get 50% OFF",
    condition: "On orders above ₹4,999",
  },
];

const B1G1_PRODUCTS = [
  {
    id: 1,
    image: shoesBy1Get1,
    title: "Puma Sports Shoes",
    offer: "Buy 1 Get 1 Free",
    price: "₹2,999",
    originalPrice: "₹5,999",
  },
  {
    id: 2,
    image: tShirtBy1Get1,
    title: "Men's T-Shirts",
    offer: "Buy 1 Get 1 Free",
    price: "₹799",
    originalPrice: "₹1,599",
  },
  {
    id: 3,
    image: bodyWashBy1Get1,
    title: "Body Wash",
    offer: "Buy 1 Get 1 Free",
    price: "₹499",
    originalPrice: "₹999",
  },
];

const BANK_OFFERS = [
  {
    id: 1,
    bank: "HDFC Bank",
    discount: "10% Instant Discount",
    card: "on HDFC Bank Cards",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
    logoBg: "bg-[#004b8d]",
    logoText: "HDFC",
  },
  {
    id: 2,
    bank: "ICICI Bank",
    discount: "10% Instant Discount",
    card: "on ICICI Bank Cards",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
    logoBg: "bg-[#f37a20]",
    logoText: "ICICI",
  },
  {
    id: 3,
    bank: "SBI Card",
    discount: "5% Instant Discount",
    card: "on SBI Credit Cards",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    logoBg: "bg-[#1a3c8a]",
    logoText: "SBI",
  },
];

function CouponRow({ coupon }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 transition-all duration-250 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-[0_4px_16px_rgba(124,58,237,0.07)]">
      <div className="flex h-[48px] min-w-[80px] flex-shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-purple-300 bg-white px-3">
        <span className="text-[0.8rem] font-bold tracking-wide text-[#7c3aed]">
          {coupon.code}
        </span>
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-[0.85rem] font-bold text-[#111827]">
          {coupon.offer}
        </span>
        <span className="text-[0.72rem] text-gray-500">
          {coupon.condition}
        </span>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="flex flex-shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-purple-300 bg-white px-3.5 py-2 text-[0.75rem] font-semibold text-[#7c3aed] transition-all duration-200 hover:bg-[#7c3aed] hover:text-white"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" strokeWidth={2.5} />
            Copy
          </>
        )}
      </button>
    </div>
  );
}

function B1G1ProductCard({ product }) {
  return (
    <div className="group flex flex-1 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="relative flex items-center justify-center px-4 pt-5 pb-2">
        <span className="absolute left-2 top-2 z-10 inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-2.5 py-1 text-[0.6rem] font-bold leading-tight text-white shadow-sm">
          BUY 1
          <br />
          GET 1
        </span>
        <img
          src={product.image}
          alt={product.title}
          className="h-[130px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 px-3.5 pb-1.5">
        <h4 className="text-[0.82rem] font-semibold leading-snug text-[#111827]">
          {product.title}
        </h4>
        <span className="text-[0.7rem] font-medium text-emerald-600">
          {product.offer}
        </span>
        <div className="mt-0.5 flex items-baseline gap-2">
          <span className="text-[0.9rem] font-bold text-[#111827]">
            {product.price}
          </span>
          <span className="text-[0.7rem] text-gray-400 line-through">
            {product.originalPrice}
          </span>
        </div>
      </div>
      <div className="px-3.5 pb-3.5 pt-1">
        <Link
          to="/shop"
          className="flex w-full items-center justify-center rounded-lg border border-purple-300 bg-white py-2 text-[0.78rem] font-semibold text-[#7c3aed] transition-all duration-200 hover:bg-[#7c3aed] hover:text-white"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

function BankOfferRow({ offer }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3 transition-all duration-250 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-[0_4px_16px_rgba(124,58,237,0.07)]">
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${offer.color}`}
      >
        <Landmark
          className={`h-5 w-5 ${offer.iconColor}`}
          strokeWidth={2}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-[0.85rem] font-bold text-[#111827]">
          {offer.discount}
        </span>
        <span className="text-[0.72rem] text-gray-500">{offer.card}</span>
      </div>
      <div
        className={`flex h-10 w-16 flex-shrink-0 items-center justify-center rounded-lg ${offer.logoBg} text-[0.7rem] font-bold text-white`}
      >
        {offer.logoText}
      </div>
    </div>
  );
}

function DealsHighlights() {
  return (
    <section className="mb-10 mt-8" aria-label="Deals Highlights">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* ===== COUPONS & PROMO CODES ===== */}
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-md">
                <Ticket
                  className="h-5 w-5 text-white"
                  strokeWidth={2.5}
                />
              </span>
              <h3 className="text-[1.05rem] font-bold tracking-tight text-[#111827]">
                Coupons & Promo Codes
              </h3>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-1 text-[0.78rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
            >
              View All Coupons
              <ChevronRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {COUPONS.map((coupon) => (
              <CouponRow key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </div>

        {/* ===== BUY 1 GET 1 OFFERS ===== */}
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 shadow-md">
                <Gift
                  className="h-5 w-5 text-white"
                  strokeWidth={2.5}
                />
              </span>
              <h3 className="text-[1.05rem] font-bold tracking-tight text-[#111827]">
                Buy 1 Get 1 Offers
              </h3>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-1 text-[0.78rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
            >
              View All
              <ChevronRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:gap-3">
            {B1G1_PRODUCTS.map((product) => (
              <B1G1ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* ===== BANK OFFERS ===== */}
        <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                <Landmark
                  className="h-5 w-5 text-white"
                  strokeWidth={2.5}
                />
              </span>
              <h3 className="text-[1.05rem] font-bold tracking-tight text-[#111827]">
                Bank Offers
              </h3>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-1 text-[0.78rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
            >
              View All Offers
              <ChevronRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </Link>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {BANK_OFFERS.map((offer) => (
              <BankOfferRow key={offer.id} offer={offer} />
            ))}
          </div>
          <Link
            to="/shop"
            className="mt-4 flex flex-1 items-center justify-center rounded-lg border border-purple-200 bg-purple-50/60 py-2.5 text-[0.8rem] font-semibold text-[#7c3aed] transition-all duration-200 hover:bg-purple-100"
          >
            + 8 More Bank Offers
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DealsHighlights;
