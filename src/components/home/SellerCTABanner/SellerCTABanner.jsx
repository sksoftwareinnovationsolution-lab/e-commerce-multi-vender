import sellerIllustration from "../../../assets/images/banner/seller-illustration.png";

function SellerCTABanner() {
  return (
    <section className="w-full overflow-hidden rounded-2xl shadow-sm">
      <div className="grid h-[110px] grid-cols-[auto_1fr_auto] items-center gap-6 bg-[linear-gradient(90deg,#5B34F5,#C13FA4,#FF8A1F)] px-6">

        {/* Image */}
        <div className="flex w-[240px] justify-end">
          <img
            src={sellerIllustration}
            alt="Seller Illustration"
            className="h-[105px] w-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex w-[440px] justify-end">
  <div className="max-w-[420px]">
    <h2 className="text-[22px] font-bold leading-tight text-white">
      Grow Your Business with Omnivixo
    </h2>

    <p className="mt-1 text-[13px] leading-5 text-white/90">
      Reach thousands of customers and boost your sales by becoming a seller on our platform.
    </p>
  </div>
</div>

        {/* Button */}
   <div className="flex w-[260px] justify-start">
  <div className="rounded-2xl bg-white px-1 py-8 shadow-sm">
    <button className="flex h-10 items-center gap-2 rounded-lg bg-transparent px-5 text-[15px] font-semibold text-gray-900 transition-all duration-300">
      Start Selling Now

      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</div>

      </div>
    </section>
  );
}

export default SellerCTABanner;