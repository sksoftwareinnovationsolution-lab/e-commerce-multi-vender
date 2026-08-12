import {
  ShieldCheck,
  Wallet,
  CalendarCheck,
  Clock3,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    title: "Verified & Trusted",
    description: "All professionals are background verified",
    icon: ShieldCheck,
    iconBg: "bg-sky-100 text-sky-600",
  },
  {
    title: "Upfront Pricing",
    description: "Transparent pricing with no hidden charges",
    icon: Wallet,
    iconBg: "bg-purple-100 text-purple-600",
  },
  {
    title: "Easy Booking",
    description: "Book in just a few clicks in 60 seconds",
    icon: CalendarCheck,
    iconBg: "bg-rose-100 text-rose-500",
  },
  {
    title: "On-time Service",
    description: "We value your time and always on time",
    icon: Clock3,
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Satisfaction Guarantee",
    description: "Not happy? We will make it right",
    icon: HeartHandshake,
    iconBg: "bg-emerald-100 text-emerald-600",
  },
];

function WhyChooseServices() {
  return (
    <section className="mb-8" aria-label="Why Choose Omnivixo Services?">
      {/* Section Title */}
      <h2 className="text-center text-2xl font-extrabold text-[#0B1535] sm:text-3xl">
        Why Choose Omnivixo Services?
      </h2>

      {/* Feature Cards */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex h-full items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Icon */}
            <span
              className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full ${feature.iconBg}`}
            >
              <feature.icon className="h-[28px] w-[28px]" aria-hidden="true" />
            </span>

            {/* Text */}
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-snug text-[#0B1535]">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs leading-snug text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseServices;
