import { Link } from "react-router-dom";
import { Star, BadgeCheck, ArrowRight } from "lucide-react";
import cleanProServices from "../../assets/images/service/top-rated-cleanpro-services.png";
import coolAirSolutions from "../../assets/images/service/top-rated-coolair-solutions.png";
import quickFixPlumbers from "../../assets/images/service/top-rated-quickfix-plumbers.png";
import powerTechElectricians from "../../assets/images/service/top-rated-powertech-electricians.png";
import perfectPainters from "../../assets/images/service/top-rated-perfect-painters.png";
import safeGuardPestControl from "../../assets/images/service/top-rated-safeguard-pest-control.png";

const providers = [
  {
    name: "CleanPro Services",
    category: "Home Cleaning",
    rating: 4.9,
    reviews: 210,
    experience: "5+ Years Exp.",
    image: cleanProServices,
  },
  {
    name: "CoolAir Solutions",
    category: "AC Repair",
    rating: 4.8,
    reviews: 629,
    experience: "5+ Years Exp.",
    image: coolAirSolutions,
  },
  {
    name: "QuickFix Plumbers",
    category: "Plumbing",
    rating: 4.9,
    reviews: 310,
    experience: "5+ Years Exp.",
    image: quickFixPlumbers,
  },
  {
    name: "PowerTech Electricians",
    category: "Electrical",
    rating: 4.8,
    reviews: 486,
    experience: "5+ Years Exp.",
    image: powerTechElectricians,
  },
  {
    name: "Perfect Painters",
    category: "Painting",
    rating: 4.7,
    reviews: 642,
    experience: "5+ Years Exp.",
    image: perfectPainters,
  },
  {
    name: "SafeGuard Pest Control",
    category: "Pest Control",
    rating: 4.8,
    reviews: 712,
    experience: "5+ Years Exp.",
    image: safeGuardPestControl,
  },
];

function ProviderCard({ provider }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-100 hover:shadow-md hover:shadow-purple-200/40">
      {/* Image */}
      <div className="h-36 w-full shrink-0 overflow-hidden bg-gray-100 sm:h-32 xl:h-[140px]">
        <img
          src={provider.image}
          alt={provider.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-bold leading-snug text-[#0B1535]">
          {provider.name}
        </h3>

        {/* Category */}
        <p className="mt-1 text-xs font-medium text-gray-400">
          {provider.category}
        </p>

        {/* Rating & reviews */}
        <div className="mt-1.5 flex items-center gap-1">
          <Star
            className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400"
            aria-hidden="true"
          />
          <span className="text-sm font-bold text-[#0B1535]">
            {provider.rating.toFixed(1)}
          </span>
          <span className="min-w-0 truncate text-xs font-medium text-gray-400">
            ({provider.reviews})
          </span>
        </div>

        {/* Experience & Verified */}
        <div className="mt-2 mb-3 flex items-center justify-between gap-2">
          <p className="text-[11px] font-medium text-gray-400">
            {provider.experience}
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1">
            <BadgeCheck
              className="h-4 w-4 shrink-0 text-emerald-600"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-emerald-700">
              Verified
            </span>
          </span>
        </div>

        {/* Book Now button */}
        <button
          type="button"
          className="mt-auto w-full rounded-lg bg-[#6C47FF] py-2 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#5C39EF] active:translate-y-px"
        >
          Book Now
        </button>
      </div>
    </article>
  );
}

function TopRatedServiceProviders() {
  return (
    <section className="mb-8" aria-label="Top Rated Service Providers">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-[#0B1535] sm:text-3xl">
            Top Rated Service Providers
          </h2>
        </div>
        <Link
          to="/services"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] transition hover:text-[#EC4899]"
        >
          View All Providers
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Providers Grid */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {providers.map((provider) => (
          <ProviderCard key={provider.name} provider={provider} />
        ))}
      </div>
    </section>
  );
}

export default TopRatedServiceProviders;
