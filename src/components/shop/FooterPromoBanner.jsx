  import { Link } from "react-router-dom";
  import giftImage from "../../assets/images/footer/footer-gift-banner.png";
  import discountImage from "../../assets/images/footer/Discount-50.png";

  function FooterPromoBanner() {
    return (
      <section
        aria-label="Festive deals and offers"
        className="relative isolate mt-10 flex w-full items-center justify-between gap-[clamp(1.25rem,3vw,3rem)] rounded-[18px] px-[clamp(1.25rem,2.4vw,2rem)] py-[clamp(0.6rem,1.1vw,1rem)] bg-[linear-gradient(115deg,#1e3a8a_0%,#2563eb_16%,#4f46e5_34%,#7c3aed_52%,#a855f7_68%,#ec4899_84%,#f97316_100%)] shadow-[0_18px_45px_-14px_rgba(30,27,75,0.45)] [[data-theme='dark']_&]:shadow-[0_22px_55px_-16px_rgba(0,0,0,0.6)] max-[991px]:gap-5 max-[991px]:px-[clamp(1rem,2vw,1.5rem)] max-[991px]:py-[clamp(0.55rem,1.2vw,0.9rem)] max-[767px]:flex-col max-[767px]:items-stretch max-[767px]:gap-[1.1rem] max-[767px]:rounded-[16px] max-[767px]:p-[0.9rem] max-[767px]:text-left"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
          <div className="pointer-events-none absolute -top-[140px] -left-[100px] h-[300px] w-[300px] rounded-full bg-blue-400/50 opacity-45 blur-[70px]" />
          <div className="pointer-events-none absolute -top-[190px] right-[10%] h-[340px] w-[340px] rounded-full bg-fuchsia-400/40 opacity-45 blur-[70px]" />
          <div className="pointer-events-none absolute -bottom-[150px] -right-[70px] h-[280px] w-[280px] rounded-full bg-orange-400/45 opacity-45 blur-[70px]" />
        </div>

        <div className="relative z-10 flex min-w-0 flex-[1_1_auto] flex-col items-start justify-center">
          <h2 className="m-0 text-[clamp(1.4rem,2.3vw,1.95rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white text-shadow-[0_4px_20px_rgba(15,10,50,0.45)]">
            Big Deals, Bigger Savings!
          </h2>
          <p className="mt-[0.6rem] text-[clamp(0.9rem,1.3vw,1.05rem)] font-medium leading-[1.55] text-white/90">
            Grab the best offers and discounts on top products.
          </p>
          <Link
            to="/shop"
            className="group mt-[1.15rem] inline-flex items-center gap-[0.55rem] rounded-full bg-white px-6 py-[0.7rem] text-[0.92rem] font-bold text-indigo-950 no-underline shadow-[0_10px_26px_-8px_rgba(15,10,50,0.4)] transition-[transform,box-shadow] duration-[250ms] ease-[ease] hover:translate-y-[-2px] hover:scale-[1.03] hover:shadow-[0_16px_36px_-10px_rgba(15,10,50,0.55)] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[3px]"
          >
            <span>View All Deals</span>
            <span aria-hidden="true" className="text-[1.1rem] leading-none transition-transform duration-[250ms] ease-[ease] group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="relative z-10 flex flex-[0_1_auto] items-center gap-7 max-[991px]:gap-6 max-[767px]:justify-center max-[767px]:gap-[22px]">
          <div className="relative h-[190px] w-[260px] flex items-center justify-center overflow-visible min-[768px]:max-[991px]:mt-[clamp(0.55rem,1.2vw,0.9rem)] min-[768px]:max-[991px]:-mb-[clamp(0.55rem,1.2vw,0.9rem)] min-[992px]:mt-[clamp(0.6rem,1.1vw,1rem)] min-[992px]:-mb-[clamp(0.6rem,1.1vw,1rem)] max-[767px]:scale-[1.5]">
            <img
              className="absolute bottom-0 left-0 h-[220px] w-auto object-contain drop-shadow-[0_22px_34px_rgba(15,10,50,0.5)] -translate-x-6 min-[768px]:-translate-x-[136px] min-[768px]:max-[991px]:w-[335px] min-[992px]:w-[350px]"
               src={giftImage}
              alt="Festive gift with surprise offers"
            />
          </div>

          <div className="flex grow-0 shrink-0 items-center justify-center origin-center scale-[2.6]">
            <img
              className="block h-auto w-[clamp(78px,9vw,108px)] drop-shadow-[0_12px_22px_rgba(15,10,50,0.4)] max-[991px]:w-[clamp(100px,11vw,140px)] max-[767px]:w-[88px] -translate-x-6"
              src={discountImage}
              alt="Flat 50% discount"
            />
          </div>
        </div>
      </section>
    );
  }

  export default FooterPromoBanner;
