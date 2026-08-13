import { CalendarCheck, MapPin, BadgePercent } from "lucide-react";
import appScreen from "../../assets/images/app/service-app-mobile.png";
import appScreen1 from "../../assets/images/app/service-app-download.png";

const features = [
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    subtitle: "Easy Payments",
  },
  {
    icon: MapPin,
    title: "Real-time",
    subtitle: "Tracking",
  },
  {
    icon: BadgePercent,
    title: "Exclusive",
    subtitle: "Offers",
  },
];

function AppBanner() {
  return (
    <section className="mb-8" aria-label="Get the Omnivixo App">
      <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(100deg,#0b1535_0%,#2c1b6f_28%,#7c3aed_52%,#c026d3_70%,#fb7185_87%,#ffa268_100%)] px-5 py-8 shadow-xl shadow-indigo-950/25 sm:px-8 md:h-[240px] md:py-0 lg:h-[260px] lg:px-10">
        {/* Decorative glows (clipped inside the rounded banner) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-white/5" />
        </div>

        <div className="relative grid h-full grid-cols-1 items-center gap-8 md:grid-cols-[1.6fr_1.9fr_1.9fr] md:gap-4 lg:gap-5">
          {/* Mobile image 1 — left */}
          <div className="order-1 flex items-end justify-center md:order-none md:self-end">
            <img
              src={appScreen}
              alt="Omnivixo app home screen"
              loading="lazy"
              className="h-auto max-h-[230px] w-auto max-w-full object-contain drop-shadow-2xl md:max-h-[250px] lg:max-h-[285px]"
            />
          </div>

          {/* Heading + features */}
          <div className="order-2 text-center md:order-none md:text-left">
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[26px] lg:text-4xl">
              Get the Omnivixo App
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/80 md:mx-0 md:text-sm lg:text-base">
              Book services on the go, track in real-time and manage all your
              bookings easily.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:justify-start lg:mt-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-2.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 backdrop-blur-sm">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight text-white">
                      {feature.title}
                    </p>
                    <p className="text-xs leading-tight text-white/70">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Combined QR + Google Play + App Store image — right */}
          <div className="order-3 flex items-center justify-center md:order-none">
            <img
              src={appScreen1}
              alt="Download the Omnivixo App on Google Play and App Store"
              loading="lazy"
              className="h-auto max-h-[220px] w-auto max-w-full object-contain drop-shadow-xl md:max-h-[196px] lg:max-h-[216px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppBanner;
