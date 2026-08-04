import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

import allBag from "../../assets/images/categories/all-bag.png";
import electronics from "../../assets/images/categories/electronics (2).png";
import fashion from "../../assets/images/categories/fashion (2).png";
import home from "../../assets/images/categories/home.png";
import beauty from "../../assets/images/categories/beauty (2).png";
import grocery from "../../assets/images/categories/grocery (2).png";
import automobile from "../../assets/images/categories/automobile.png";
import sports from "../../assets/images/categories/sports.png";
import books from "../../assets/images/categories/books.png";

const CATEGORIES = [
  { id: "all", label: "All", image: allBag },
  { id: "electronics", label: "Electronics", image: electronics },
  { id: "fashion", label: "Fashion", image: fashion },
  { id: "home", label: "Home", image: home },
  { id: "beauty", label: "Beauty", image: beauty },
  { id: "grocery", label: "Grocery", image: grocery },
  { id: "automobile", label: "Automobile", image: automobile },
  { id: "sports", label: "Sports", image: sports },
  { id: "books", label: "Books", image: books },
  { id: "more", label: "More", image: null },
];

function ShopCategories() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="mt-10 mb-8" aria-label="Browse Categories">
      <div className="w-full">
        <div className="flex items-stretch gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] 
        [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth lg:grid lg:grid-cols-10 lg:gap-12 2xl:gap-14 lg:overflow-visible lg:snap-none">
        {CATEGORIES.map(({ id, label, image }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveCategory(id)}
            className={`
              flex flex-col items-center justify-center gap-1.5
              w-[136px] h-[120px] rounded-2xl border
              transition-all duration-300 ease-out cursor-pointer
              shrink-0 snap-start select-none
              lg:w-auto lg:min-w-0
              bg-white border-gray-200 text-gray-500 shadow-sm
              hover:-translate-y-0.5
              hover:border-purple-500 hover:shadow-md
              ${
                activeCategory === id
                  ? "bg-[#F4EEFF] border-[#7c3aed] text-[#6D28D9] shadow-lg"
                  : ""
              }
            `}
            aria-pressed={activeCategory === id}
            aria-label={label === "All" ? "Show all categories" : `Browse ${label} category`}
          >
            {image ? (
              <img src={image} alt={label} className="w-16 h-16 object-contain" />
            ) : (
              <MoreHorizontal className="h-16 w-16" strokeWidth={1.5} />
            )}
            <span
              className={`
                text-[#111827] font-semibold leading-tight
                ${activeCategory === id ? "text-[#6D28D9]" : ""}
              `}
            >
              {label}
            </span>
          </button>
        ))}
        </div>
      </div>
    </section>
  );
}

export default ShopCategories;
