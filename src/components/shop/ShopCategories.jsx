import { useState } from "react";
import {
  Grid3X3, Monitor, Shirt, Home, Sparkles,
  ShoppingBag, Car, Trophy, BookOpen, MoreHorizontal,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All", icon: Grid3X3, image: null },
  { id: "electronics", label: "Electronics", icon: Monitor, image: null },
  { id: "fashion", label: "Fashion", icon: Shirt, image: null },
  { id: "home", label: "Home", icon: Home, image: null },
  { id: "beauty", label: "Beauty", icon: Sparkles, image: null },
  { id: "grocery", label: "Grocery", icon: ShoppingBag, image: null },
  { id: "automobile", label: "Automobile", icon: Car, image: null },
  { id: "sports", label: "Sports", icon: Trophy, image: null },
  { id: "books", label: "Books", icon: BookOpen, image: null },
  { id: "more", label: "More", icon: MoreHorizontal, image: null },
];

function ShopCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="mt-10 mb-8" aria-label="Browse Categories">
      <div className="flex items-stretch gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth">
        {CATEGORIES.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveCategory(id)}
            className={`
              flex flex-col items-center justify-center gap-[10px]
              w-[126px] h-[148px] rounded-2xl border
              transition-all duration-300 ease-out cursor-pointer
              shrink-0 snap-start select-none
              ${
                activeCategory === id
                  ? "bg-[#F4EEFF] border-[#7c3aed] text-[#6D28D9] shadow-md"
                  : "bg-white border-gray-200 text-gray-500 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg"
              }
              hover:-translate-y-[3px]
            `}
            aria-pressed={activeCategory === id}
            aria-label={label === "All" ? "Show all categories" : `Browse ${label} category`}
          >
            <Icon className="h-8 w-8" strokeWidth={1.5} />
            <span className="text-sm font-medium leading-tight">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ShopCategories;
