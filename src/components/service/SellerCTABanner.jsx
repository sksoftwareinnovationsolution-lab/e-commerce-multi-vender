import serviceStorefront from "../../assets/images/service/footer-banner.png";

function SellerCTABanner() {
  return (
    <section className="mb-8" aria-label="Become a Seller">
      <div className="relative overflow-hidden rounded-[22px] bg-[linear-gradient(100deg,#4f46e5_0%,#7c3aed_35%,#c026d3_65%,#f43f5e_85%,#fb923c_100%)] shadow-lg shadow-indigo-950/15">
        <div className="relative grid grid-cols-1 items-center gap-5 px-5 py-8 sm:px-8 md:h-[190px] md:grid-cols-[auto_1fr_auto] md:gap-5 md:py-0 lg:h-[210px] lg:gap-8 lg:px-12">
          {/* Storefront illustration — left, sitting toward the bottom */}
          <div className="order-1 flex items-end justify-center md:order-none md:self-end">
            <img
              src={serviceStorefront}
              alt="Service professional"
              loading="lazy"
              className="h-auto w-[210px] max-w-full object-contain drop-shadow-xl sm:w-[240px] md:w-[250px] lg:w-[320px]"
            />
          </div>

          {/* Heading + description — center */}
          <div className="order-2 min-w-0 text-center md:order-none md:text-left">
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-[26px] md:text-2xl lg:text-[26px]">
              Are you a Service Professional?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/85 md:mx-0">
              Join Omnivixo and grow your business. Get more customers and
              increase your earnings.
            </p>
          </div>

          {/* Button — right, vertically centered */}
          <div className="order-3 flex justify-center md:order-none md:justify-end">
            <button
              type="button"
              className="flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#0B1535] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:h-11 sm:px-6"
            >
              Become a Seller
              <svg
                className="h-4 w-4 shrink-0 text-[#FF5A2E]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellerCTABanner;
