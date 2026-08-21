import { Link } from "react-router-dom";
import { Eye, ChevronRight } from "lucide-react";

import smartwatchDeals from "../../assets/images/deals/smartwatch-deals.png";
import lg43Inch4kTv from "../../assets/images/products/lg-43-inch-4k-tv.png";
import noiseBudsVs103 from "../../assets/images/products/noise-buds-vs103.png";
import pumaRunningShoes from "../../assets/images/products/puma-running-shoes.png";

const RECENTLY_VIEWED_PRODUCTS = [
  {
    id: 1,
    image: smartwatchDeals,
    title: "boAt Wave Call 2",
    description: "Smart Watch",
    price: "₹1,599",
    originalPrice: "₹2,999",
    discount: "-47%",
  },
  {
    id: 2,
    image: lg43Inch4kTv,
    title: "LG 43 inch 4K TV",
    description: "Smart TV",
    price: "₹28,999",
    originalPrice: "₹56,999",
    discount: "-49%",
  },
  {
    id: 3,
    image: noiseBudsVs103,
    title: "Noise Buds VS103",
    description: "Wireless Earbuds",
    price: "₹1,099",
    originalPrice: "₹2,499",
    discount: "-40%",
  },
  {
    id: 4,
    image: pumaRunningShoes,
    title: "Puma Men's Shoes",
    description: "Running Shoes",
    price: "₹1,799",
    originalPrice: "₹3,599",
    discount: "-45%",
  },
];

function RecentlyViewed() {
  return (
    <section className="mb-10 mt-8" aria-label="Recently Viewed">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-md">
            <Eye className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
            Recently Viewed
          </h2>
        </div>
        <Link
          to="/shop"
          className="group inline-flex shrink-0 items-center gap-1 text-[0.9rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
        >
          View All
          <ChevronRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 md:grid-cols-4">
        {RECENTLY_VIEWED_PRODUCTS.map((product) => (
          <RecentlyViewedCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

const PRODUCT_IMAGE_SIZE_CLASSES = {
  1: "scale-110 sm:scale-110 md:scale-110",
  2: "scale-[1.44] sm:scale-[1.48] md:scale-[1.52]",
  3: "scale-[1.42] sm:scale-[1.45] md:scale-[1.48]",
  4: "scale-[1.47] sm:scale-[1.51] md:scale-[1.55]",
};

const PRODUCT_INFO_MARGIN_CLASSES = {
  2: "ml-2 sm:ml-3 md:ml-4",
  3: "ml-2 sm:ml-3 md:ml-4",
  4: "ml-2 sm:ml-3 md:ml-4",
};

function RecentlyViewedCard({ product }) {
  const imageSizeClass =
    PRODUCT_IMAGE_SIZE_CLASSES[product.id] ??
    "scale-110 sm:scale-110 md:scale-110";

  const infoMarginClass = PRODUCT_INFO_MARGIN_CLASSES[product.id] ?? "";

  return (
    <article className="group flex min-w-0 items-center gap-2.5 rounded-lg border border-gray-100 bg-white p-7 shadow-[0_1px_5px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-[0_8px_18px_rgba(0,0,0,0.1)]">
      <div className="flex h-[5rem] w-[4.75rem] shrink-0 items-center justify-center sm:h-[5.25rem] sm:w-[5rem] md:h-[5.5rem] md:w-[5.25rem]">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={`h-full w-full object-contain ${imageSizeClass}`}
        />
      </div>

      <div
        className={`flex min-w-0 flex-1 flex-col items-start justify-center gap-[3px] text-left ${infoMarginClass}`}
      >
        <h3 className="w-full truncate text-[0.9rem] font-semibold leading-tight text-[#111827]">
          {product.title}
        </h3>
        <p className="w-full truncate text-[0.75rem] leading-tight text-gray-500">
          {product.description}
        </p>

        <div className="mt-[3px] flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          <span className="text-[1rem] font-extrabold leading-none text-[#111827]">
            {product.price}
          </span>
          <span className="text-[0.7rem] leading-none text-gray-400 line-through">
            {product.originalPrice}
          </span>
          <span className="inline-flex shrink-0 items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 px-1.5 py-px text-[0.68rem] font-bold leading-tight text-white shadow-sm">
            {product.discount}
          </span>
        </div>
      </div>
    </article>
  );
}

export default RecentlyViewed;
