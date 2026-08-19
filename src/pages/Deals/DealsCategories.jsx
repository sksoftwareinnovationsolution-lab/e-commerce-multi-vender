import { useState } from "react";
import {
  Trophy,
  Zap,
  CalendarDays,
  Award,
  MonitorSmartphone,
  Shirt,
  Home,
  Sparkles,
  ShoppingBag,
  MoreHorizontal,
} from "lucide-react";

const CATEGORIES = [
  { id: "all-deals", label: "All Deals", Icon: Trophy, iconColor: "text-[#7c3aed]", bg: "bg-[#F0E6FF]" },
  { id: "flash-deals", label: "Flash Deals", Icon: Zap, iconColor: "text-[#ea580c]", bg: "bg-[#FFF0E0]" },
  { id: "todays-deals", label: "Today's Deals", Icon: CalendarDays, iconColor: "text-[#7c3aed]", bg: "bg-[#EDE9FE]" },
  { id: "top-brands", label: "Top Brands", Icon: Award, iconColor: "text-[#ea580c]", bg: "bg-[#FFE8D6]" },
  { id: "electronics", label: "Electronics", Icon: MonitorSmartphone, iconColor: "text-[#4361ee]", bg: "bg-[#E0EBFF]" },
  { id: "fashion", label: "Fashion", Icon: Shirt, iconColor: "text-[#7c3aed]", bg: "bg-[#EDE9FE]" },
  { id: "home", label: "Home", Icon: Home, iconColor: "text-[#4361ee]", bg: "bg-[#E0EBFF]" },
  { id: "beauty", label: "Beauty", Icon: Sparkles, iconColor: "text-[#e11d48]", bg: "bg-[#FFE4EC]" },
  { id: "grocery", label: "Grocery", Icon: ShoppingBag, iconColor: "text-[#ea580c]", bg: "bg-[#FFF0E0]" },
  { id: "more", label: "More", Icon: MoreHorizontal, iconColor: "text-[#7c3aed]", bg: "bg-[#F0E6FF]" },
];

function DealsCategories() {
  const [activeCategory, setActiveCategory] = useState("all-deals");

  return (
    <section className="mt-10 mb-8" aria-label="Browse Categories">
      <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] px-4 py-4 lg:px-6 lg:py-5">
        <div
          className="flex items-center gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] \
          [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth \
          lg:grid lg:grid-cols-10 lg:gap-0 lg:overflow-visible lg:snap-none"
        >
          {CATEGORIES.map(({ id, label, Icon, iconColor, bg }) => {
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveCategory(id)}
                className={`
                  group flex flex-col items-center justify-center gap-2
                  min-w-[90px] w-[90px] py-3 rounded-xl
                  transition-all duration-200 ease-out cursor-pointer
                  shrink-0 snap-start select-none
                  lg:w-auto lg:min-w-0 lg:flex-1 lg:py-2
                  hover:bg-gray-50
                  ${isActive ? "bg-[#F5F0FF] shadow-sm" : "bg-transparent"}
                `}
                aria-pressed={isActive}
                aria-label={`Browse ${label}`}
              >
                <div
                  className={`
                    flex items-center justify-center rounded-full
                    w-11 h-11
                    transition-all duration-200
                    ${isActive ? `${bg} shadow-sm` : `${bg}`}
                    group-hover:scale-105
                  `}
                >
                  <Icon
                    className={`w-[22px] h-[22px] transition-colors duration-200 ${
                      isActive ? iconColor : iconColor
                    }`}
                    strokeWidth={1.8}
                  />
                </div>
                <span
                  className={`
                    text-[13px] leading-tight text-center whitespace-nowrap
                    transition-colors duration-200
                    ${isActive ? "font-semibold text-[#111827]" : "font-medium text-gray-500"}
                  `}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DealsCategories;
