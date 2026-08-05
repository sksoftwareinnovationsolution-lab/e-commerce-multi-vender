import { Link } from "react-router-dom";
import CategoryStrip from "../../shop/CategoryStrip";

function Hero() {

  return (
    <section className="bg-[linear-gradient(135deg,#eff6ff_0%,#f9fafb_50%,#fefce8_100%)] [transition:background_0.3s_ease] dark:bg-[linear-gradient(135deg,#0f1729_0%,#1a1a2e_50%,#16213e_100%)]">
      <div className="mx-auto flex max-w-[none] flex-col gap-6 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:gap-8 xl:px-8 xl:py-4">
        {/* Content: Left Text + Right Placeholder */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-5 lg:mt-10 lg:gap-6">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#2563eb,#7c3aed)] px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.5px] text-white lg:px-5 lg:py-2 lg:text-[0.8rem]">
              Multi-Vendor Marketplace
            </span>

            <h1 className="text-[2rem] leading-[1.15] font-extrabold tracking-[-0.025em] text-gray-900 dark:text-gray-100 md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem]">
              Everything You Need,<br />
              <span
                className="bg-[linear-gradient(135deg,#7c3aed,#ec4899)] bg-clip-text text-transparent dark:bg-[linear-gradient(135deg,#a78bfa,#f472b6)]"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                One Platform
              </span>
            </h1>

            <p className="max-w-[540px] text-[0.95rem] leading-[1.7] text-gray-500 dark:text-gray-400 md:text-[1rem] xl:text-[1.1rem] xl:leading-[1.8]">
              Shop products, book services, hire professionals,
              and grow your business from one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[0.625rem] px-6 py-3 text-[0.875rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 md:px-7 md:py-3.5 md:text-[0.9rem] xl:px-8 xl:py-4 xl:text-[0.95rem] bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Explore Products
              </Link>

              <Link
                to="/services"
                className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[0.625rem] px-6 py-3 text-[0.875rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 md:px-7 md:py-3.5 md:text-[0.9rem] xl:px-8 xl:py-4 xl:text-[0.95rem] border-[1.5px] border-solid border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-px dark:border-[#2d2d44] dark:bg-[#1a1a2e] dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-[#16213e]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Explore Services
              </Link>

              <button
                className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[0.625rem] px-6 py-3 text-[0.875rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 md:px-7 md:py-3.5 md:text-[0.9rem] xl:px-8 xl:py-4 xl:text-[0.95rem] border-[1.5px] border-solid border-blue-600 bg-transparent text-blue-600 hover:bg-[rgba(37,99,235,0.08)] hover:-translate-y-px dark:border-blue-400 dark:text-blue-400 dark:hover:bg-[rgba(96,165,250,0.12)]"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Become a Seller
              </button>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-1 items-center justify-center">
            <img
              src="/images/hero-banner.png"
              alt="Multi-Vendor Marketplace — Products, Service Providers, Secure Payments, Fast Delivery"
              className="h-auto w-full max-w-full rounded-2xl object-contain xl:max-w-[600px]"
              loading="eager"
            />
          </div>
        </div>

        {/* Search + Category Navigation */}
        <div className="flex flex-col gap-1">
          <div className="mt-0">
            <div className="flex justify-center gap-3">
              <div className="flex w-full max-w-[80%] items-center overflow-hidden rounded-xl border-[1.5px] border-solid border-gray-200 bg-white [transition:border-color_0.25s_ease,box-shadow_0.25s_ease,transform_0.2s_ease] hover:border-gray-300 focus-within:border-blue-600 focus-within:shadow-[0_0_0_3px_rgba(37,99,235,0.12)] focus-within:transform-none md:max-w-[75%] lg:max-w-[65%] dark:border-[#2d2d44] dark:bg-[#1a1a2e] dark:hover:border-gray-700 dark:focus-within:border-blue-400 dark:focus-within:shadow-[0_0_0_3px_rgba(96,165,250,0.18)]">
                <input
                  type="text"
                  className="min-w-0 flex-1 border-none bg-transparent px-4 py-3.5 text-[0.9rem] text-gray-900 outline-none [transition:color_0.2s_ease] placeholder:text-gray-400 dark:text-gray-200"
                  placeholder="Search products, services, or stores..."
                  aria-label="Search marketplace"
                />

                <button
                  className="inline-flex cursor-pointer items-center justify-center gap-2 border-none bg-blue-600 px-6 py-3.5 text-[0.875rem] font-semibold text-white [transition:background_0.25s_ease,transform_0.15s_ease] hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:-outline-offset-2"
                  type="button"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
          <CategoryStrip />
        </div>
      </div>
    </section>
  );
}

export default Hero;
