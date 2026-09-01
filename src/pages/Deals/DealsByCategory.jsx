import { Link } from "react-router-dom";
import {
  Smartphone,
  Shirt,
  CookingPot,
  Sparkles,
  ShoppingBasket,
  Shield,
  Car,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const CATEGORIES = [
  {
    id: 1,
    name: "Electronics",
    discount: "Up to 70% Off",
    icon: Smartphone,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    name: "Fashion",
    discount: "Up to 60% Off",
    icon: Shirt,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    discount: "Up to 50% Off",
    icon: CookingPot,
    iconColor: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    id: 4,
    name: "Beauty",
    discount: "Up to 40% Off",
    icon: Sparkles,
    iconColor: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    id: 5,
    name: "Grocery",
    discount: "Up to 40% Off",
    icon: ShoppingBasket,
    iconColor: "text-orange-600",
    bgColor: "bg-yellow-100",
  },
  {
    id: 6,
    name: "Sports",
    discount: "Up to 50% Off",
    icon: Shield,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 7,
    name: "Automobile",
    discount: "Up to 45% Off",
    icon: Car,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 8,
    name: "Books",
    discount: "Up to 60% Off",
    icon: BookOpen,
    iconColor: "text-blue-700",
    bgColor: "bg-blue-50",
  },
];

function DealsByCategory() {
  return (
    <section className="mt-10 mb-10" aria-label="Deals by Category">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
            </svg>
          </span>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              Deals by Category
            </h2>
            <p className="text-[0.8rem] text-gray-500">
              Browse deals across your favourite categories
            </p>
          </div>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-1 text-[0.9rem] font-semibold text-[#7c3aed] transition-colors hover:text-[#6d28d9]"
        >
          View All Categories
          <ChevronRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {CATEGORIES.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

function CategoryItem({ category }) {
  const IconComponent = category.icon;

  return (
    <Link
      to="/shop"
      className="group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
    >
      {/* Icon Circle */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full ${category.bgColor} transition-transform duration-250 group-hover:scale-110`}
      >
        <IconComponent
          className={`h-7 w-7 ${category.iconColor}`}
          strokeWidth={1.8}
        />
      </div>

      {/* Category Name */}
      <span className="text-center text-[0.82rem] font-semibold leading-snug text-[#111827]">
        {category.name}
      </span>

      {/* Discount */}
      <span className="text-[0.72rem] text-gray-500">
        {category.discount}
      </span>
    </Link>
  );
}

export default DealsByCategory;
