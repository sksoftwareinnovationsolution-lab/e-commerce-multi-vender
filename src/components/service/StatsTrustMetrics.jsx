import { BadgeCheck, Users, LayoutGrid, Star } from "lucide-react";

const stats = [
  {
    icon: BadgeCheck,
    value: "5,000+",
    label: "Verified Experts",
  },
  {
    icon: Users,
    value: "100K+",
    label: "Happy Customers",
  },
  {
    icon: LayoutGrid,
    value: "50+",
    label: "Service Categories",
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Average Rating",
  },
];

const separatorClasses = [
  "",
  "max-md:border-l md:border-l",
  "max-md:border-t md:border-l",
  "max-md:border-t max-md:border-l md:border-l",
];

const separatorColor = "border-white/10";

function StatsTrustMetrics() {
  return (
    <section className="mb-8" aria-label="Omnivixo Trust Metrics">
      <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0B1535] to-[#0B123F] px-4 py-6 shadow-xl shadow-indigo-950/30 sm:px-6 md:px-8 lg:rounded-[24px]">
        {/* Subtle decorative glows for depth */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/[0.03]" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-indigo-500/[0.06]" />
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center justify-center gap-3 px-2 py-3 sm:gap-4 sm:px-3 md:px-4 lg:gap-5 ${
                separatorClasses[index]
              } ${separatorColor}`}
            >
              {/* Icon */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 sm:h-12 sm:w-12">
                <stat.icon
                  className="h-5 w-5 text-white sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </span>

              {/* Number + Label */}
              <div className="min-w-0">
                <p className="text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 truncate text-[11px] leading-tight text-white/70 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsTrustMetrics;
