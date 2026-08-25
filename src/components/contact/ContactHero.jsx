import { Link } from "react-router-dom";
import { ChevronRight, Clock, Headset, Heart } from "lucide-react";
import contactHeroImg from "../../assets/images/contact/herobanner-contact.png";

const features = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We reply within 24 hours",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description: "Get help from our team",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction matters",
  },
];

function ContactHero() {
  return (
    <section
      aria-label="Contact us"
      className="w-full overflow-hidden rounded-[1.5rem] border border-indigo-100/70 bg-gradient-to-b from-white via-[#f8f7ff] to-[#f3f1fd] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
    >
      {/* ===== Top-left Breadcrumb ===== */}
      <nav aria-label="Breadcrumb" className="mb-6 lg:mb-8">
        <ol className="flex items-center gap-1.5 text-[0.78rem] font-medium sm:text-[0.85rem]">
          <li>
            <Link
              to="/"
              className="text-gray-500 transition-colors hover:text-purple-600"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={14} className="text-gray-400" />
          </li>
          <li aria-current="page" className="font-semibold text-gray-800">
            Contact Us
          </li>
        </ol>
      </nav>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        {/* ===== LEFT — Text + Feature Cards ===== */}
        <div className="flex w-full min-w-0 flex-col items-start lg:w-[48%] xl:w-[46%]">
          {/* Heading */}
          <h1 className="text-[2rem] leading-[1.15] font-extrabold tracking-tight text-gray-900 sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.1rem]">
            <span className="block text-[#1e2a52]">We&apos;d Love to</span>
            <span
              className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Hear From You!
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[520px] text-[0.92rem] leading-relaxed text-gray-500 sm:text-[0.98rem]">
            Have a question, suggestion, or need help? Our team is here for
            you. Get in touch with us and we will respond as soon as possible.
          </p>

          {/* Feature Cards */}
          <div className="mt-7 grid w-full grid-cols-1 gap-3 min-[480px]:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-row items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-[0_4px_14px_-6px_rgba(79,70,229,0.12)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                  <Icon size={17} strokeWidth={1.9} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.82rem] font-semibold text-gray-900">
                    {title}
                  </span>
                  <span className="block text-[0.72rem] leading-snug text-gray-500">
                    {description}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT — Hero Image ===== */}
        <div className="flex w-full min-w-0 flex-1 items-center justify-center lg:justify-end">
          <img
            src={contactHeroImg}
            alt="Customer support team ready to help you"
            className="h-auto w-full max-w-[380px] object-contain sm:max-w-[460px] lg:max-w-[540px]"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
