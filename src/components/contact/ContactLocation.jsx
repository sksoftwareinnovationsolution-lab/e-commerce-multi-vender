import { MapPin, Navigation } from "lucide-react";
import StaticNoidaMap from "./StaticNoidaMap";

const companyLines = [
  "123, Business Park, Sector 62,",
  "Noida, Uttar Pradesh - 201301, India",
];

function LocationMarker() {
  return (
    <svg width="34" height="48" viewBox="0 0 36 50" aria-hidden="true">
      <ellipse cx="18" cy="45.5" rx="7.5" ry="2.8" fill="rgba(0,0,0,0.22)" />
      <path
        d="M18 45 C 18 45 5 28.5 5 17 A 13 13 0 1 1 31 17 C 31 28.5 18 45 18 45 Z"
        fill="#ea4335"
        stroke="#c5221f"
        strokeWidth="1"
      />
      <circle cx="18" cy="17" r="5.2" fill="#ffffff" />
    </svg>
  );
}

function ContactLocation() {
  return (
    <section
      aria-label="Our office location and map"
      className="mt-6 w-full overflow-hidden rounded-[1.5rem] border border-indigo-100/70 bg-white shadow-[0_10px_30px_-18px_rgba(79,70,229,0.25)] lg:mt-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* ===== LEFT — Location Information ===== */}
        <div className="w-full shrink-0 border-b border-gray-100 p-6 min-[480px]:px-7 sm:p-8 lg:w-[30%] lg:border-b-0 lg:border-r xl:w-[28%] xl:p-9">
          <div>
            <h2 className="text-[1.35rem] leading-snug font-extrabold tracking-tight text-[#1e2a52] sm:text-[1.55rem]">
              Our Location
            </h2>
            <span className="mt-2 block h-1 w-12 rounded-full bg-purple-600" />
          </div>

          <p className="mt-4 text-[0.88rem] leading-relaxed text-gray-500">
            Visit our office or find us on the map.
          </p>

          <div className="mt-6 flex items-start gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-purple-200 bg-purple-50 text-purple-600">
              <MapPin size={20} strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
              <h3 className="text-[0.98rem] font-bold text-[#1e2a52]">
                Omnivixo Pvt. Ltd.
              </h3>
              <address className="mt-1 not-italic">
                {companyLines.map((line) => (
                  <span
                    key={line}
                    className="block text-[0.82rem] leading-relaxed text-gray-500"
                  >
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>

          <button
            type="button"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-purple-600 bg-white px-6 py-2.5 text-[0.85rem] font-semibold text-purple-600 transition-colors hover:bg-purple-50"
          >
            Get Directions
            <Navigation size={16} strokeWidth={2} />
          </button>
        </div>

        {/* ===== RIGHT — Map ===== */}
        <div className="relative min-w-0 flex-1 overflow-hidden h-64 sm:h-80 lg:h-auto">
          <StaticNoidaMap />

          {/* Google-style attribution */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-10 flex items-end justify-between w-full px-2 pb-1.5">
            <span className="rounded bg-white/85 px-1.5 py-0.5 text-[11px] font-semibold tracking-tight text-gray-500 shadow-sm">
              Google
            </span>
            <span className="rounded bg-white/75 px-1.5 py-0.5 text-[9.5px] text-gray-500">
              Map data ©2026 · Terms of Use
            </span>
          </div>

          {/* Red pin marker at Sector 62 / Noida Electronic City */}
          <div className="absolute top-[56%] left-[55%] z-0 -translate-x-1/2 -translate-y-full drop-shadow-md">
            <LocationMarker />
          </div>

          {/* Location info popup */}
          <div className="absolute top-1/2 left-1/2 z-20 w-[calc(100%-2.5rem)] max-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-gray-100 bg-white p-4 shadow-[0_12px_32px_-12px_rgba(30,42,82,0.35)] sm:left-6 sm:top-6 sm:translate-x-0 sm:translate-y-0 sm:max-w-[280px]">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-500">
                <MapPin size={18} strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <h4 className="text-[0.88rem] font-bold text-[#1e2a52]">
                  Omnivixo Pvt. Ltd.
                </h4>
                <address className="mt-0.5 not-italic">
                  {companyLines.map((line) => (
                    <span
                      key={line}
                      className="block text-[0.75rem] leading-relaxed text-gray-500"
                    >
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactLocation;
