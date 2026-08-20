import { Link } from "react-router-dom";
import { Award, ChevronRight } from "lucide-react";

import samsungLogo from "../../assets/images/deals/samsung-deals.png";
import boatLogo from "../../assets/images/deals/boat-deals.png";
import pumaLogo from "../../assets/images/deals/puma-deals.png";
import miLogo from "../../assets/images/deals/mi-deals.png";
import sonyLogo from "../../assets/images/deals/sony-deals.png";
import hpLogo from "../../assets/images/deals/hp-deals.png";
import philipsLogo from "../../assets/images/deals/philips-deals.png";
import realmeLogo from "../../assets/images/deals/realme-deals.png";

const TOP_BRANDS = [
  { id: 1, name: "Samsung", logo: samsungLogo },
  { id: 2, name: "boAt", logo: boatLogo },
  { id: 3, name: "Puma", logo: pumaLogo },
  { id: 4, name: "Mi", logo: miLogo },
  { id: 5, name: "Sony", logo: sonyLogo },
  { id: 6, name: "HP", logo: hpLogo },
  { id: 7, name: "Philips", logo: philipsLogo },
  { id: 8, name: "realme", logo: realmeLogo },
];

function TopBrandsOnDeal() {
  return (
    <section className="mt-10 mb-10" aria-label="Top Brands On Deal">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-md">
            <Award className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Top Brands On Deal
            </h2>
            <p className="text-[0.8rem] text-gray-500">
              Great deals on top brands
            </p>
          </div>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-1 text-[0.9rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
        >
          View All Brands
          <ChevronRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </Link>
      </div>

      {/* Brands Row */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="flex overflow-x-auto scrollbar-hide">
          {TOP_BRANDS.map((brand, index) => (
            <BrandItem
              key={brand.id}
              brand={brand}
              isLast={index === TOP_BRANDS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandItem({ brand, isLast }) {
  return (
    <div
      className={`group flex min-w-[140px] flex-1 cursor-pointer items-center justify-center px-6 py-6 transition-all duration-250 hover:bg-gray-50 ${
        !isLast ? "border-r border-gray-100" : ""
      }`}
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="h-12 w-full max-w-[120px] object-contain transition-all duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

export default TopBrandsOnDeal;
