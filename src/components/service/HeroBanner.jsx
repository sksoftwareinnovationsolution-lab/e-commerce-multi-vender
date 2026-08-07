import {
  Search,
  BadgeCheck,
  Star,
  Zap,
  Users,
  ShieldCheck,
  Wallet,
  Clock,
} from "lucide-react";
import serviceHeroBanner from "../../assets/images/service/service-herobanner.png";

const features = [
  { icon: BadgeCheck, title: "Verified Professionals", color: "bg-emerald-100 text-emerald-600" },
  { icon: Wallet, title: "Transparent Pricing", color: "bg-blue-100 text-blue-600" },
  { icon: ShieldCheck, title: "Secure Payments", color: "bg-purple-100 text-purple-600" },
  { icon: Clock, title: "On-time Service", color: "bg-amber-100 text-amber-600" },
];

const statCards = [
  {
    icon: BadgeCheck,
    value: "5000+",
    label: "Verified Experts",
    iconColor: "bg-emerald-100 text-emerald-600",
    position: "left-14 top-8 sm:left-12 lg:left-6 lg:top-12",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
    iconColor: "bg-amber-100 text-amber-500",
    position: "right-14 top-8 sm:right-12 lg:right-6 lg:top-12",
  },
  {
    icon: Zap,
    value: "Fast",
    label: "Support",
    iconColor: "bg-indigo-100 text-indigo-600",
    position: "bottom-8 left-14 sm:left-12 lg:left-4 lg:bottom-12",
  },
  {
    icon: Users,
    value: "100K+",
    label: "Happy Customers",
    iconColor: "bg-rose-100 text-rose-500",
    position: "bottom-8 right-14 sm:right-12 lg:right-4 lg:bottom-12",
  },
];

function HeroBanner() {
  return (
    <section className="mb-8">
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#F6F3FF] via-[#FDF2FF] to-[#FFF5F1]">
        <div className="grid items-center gap-12 px-6 py-10 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-14">
          {/* Left Content */}
          <div className="order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7C3AED] sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" aria-hidden="true" />
              All Services You Need
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] text-[#0B1535] sm:text-5xl xl:text-6xl">
              Professional Services,{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#F97316] bg-clip-text text-transparent">
                Just a Click Away
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-500 sm:text-lg lg:mx-0">
              Book trusted professionals for your home, business and personal
              needs. Fast, reliable &amp; secure.
            </p>

            {/* Search Bar */}
            <form
              className="mt-6 flex w-full items-center gap-2 rounded-2xl bg-white p-2 shadow-xl shadow-purple-200/50 sm:mt-8"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-1 items-center pl-2 sm:pl-3">
                <Search className="h-5 w-5 shrink-0 text-gray-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search for services (e.g. AC Repair, Plumber...)"
                  className="w-full border-0 bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:py-3"
                  aria-label="Search for services"
                />
              </div>
              <button
                type="submit"
                className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#EC4899] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-400/40 transition hover:opacity-90 sm:px-6 sm:py-3"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </button>
            </form>

            {/* Feature Row */}
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-10 sm:gap-x-6 lg:flex lg:flex-nowrap lg:justify-between">
              {features.map((item) => (
                <div key={item.title} className="flex items-center gap-2.5">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <item.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="order-2 relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Soft purple blob */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,#E6DCFF_0%,#F2EAFF_45%,rgba(242,234,255,0)_72%)] blur-2xl"
              aria-hidden="true"
            />

            {/* Technician image */}
            <div className="relative z-[1]">
              <img
                src={serviceHeroBanner}
                alt="Service technician"
                className="mx-auto w-full max-w-[420px] object-contain lg:max-w-[520px]"
              />
            </div>

            {/* Floating cards */}
            {statCards.map((card) => (
              <div
                key={card.label}
                className={`absolute z-10 flex items-center gap-2.5 rounded-2xl bg-white/95 p-3 shadow-xl shadow-purple-200/60 backdrop-blur sm:gap-3 sm:p-3.5 ${card.position}`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${card.iconColor}`}
                >
                  <card.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-[#0B1535] sm:text-base">
                    {card.value}
                    {card.value === "4.8" && (
                      <span className="ml-1 text-amber-500" aria-hidden="true">
                        ★
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] font-medium text-gray-500 sm:text-xs">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
