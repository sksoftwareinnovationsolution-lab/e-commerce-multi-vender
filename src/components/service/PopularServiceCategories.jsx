import { Link } from "react-router-dom";
import {
  Sparkles,
  Snowflake,
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Bug,
  Refrigerator,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Home Cleaning",
    experts: "920+ Experts",
    icon: Sparkles,
    iconColor: "bg-sky-100 text-sky-600",
  },
  {
    title: "AC Repair",
    experts: "950+ Experts",
    icon: Snowflake,
    iconColor: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Plumber",
    experts: "1100+ Experts",
    icon: Wrench,
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "Electrician",
    experts: "1150+ Experts",
    icon: Zap,
    iconColor: "bg-amber-100 text-amber-600",
  },
  {
    title: "Home Painting",
    experts: "800+ Experts",
    icon: Paintbrush,
    iconColor: "bg-rose-100 text-rose-500",
  },
  {
    title: "Carpentry",
    experts: "750+ Experts",
    icon: Hammer,
    iconColor: "bg-orange-100 text-orange-600",
  },
  {
    title: "Pest Control",
    experts: "620+ Experts",
    icon: Bug,
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Appliance Repair",
    experts: "980+ Experts",
    icon: Refrigerator,
    iconColor: "bg-purple-100 text-purple-600",
  },
];

function PopularServiceCategories() {
  return (
    <section className="mb-8" aria-label="Popular Service Categories">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-extrabold text-[#0B1535] sm:text-3xl">
          Popular Service Categories
        </h2>
        <Link
          to="/services"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] transition hover:text-[#EC4899]"
        >
          View All Categories
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Category Cards */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8 lg:gap-3">
        {categories.map((category) => (
          <Link
            key={category.title}
            to="/services"
            className="group flex flex-col items-center gap-2.5 rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-purple-100 hover:shadow-md"
          >
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${category.iconColor}`}
            >
              <category.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold leading-tight text-[#0B1535]">
              {category.title}
            </span>
            <span className="text-xs font-medium text-gray-400">
              {category.experts}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularServiceCategories;
