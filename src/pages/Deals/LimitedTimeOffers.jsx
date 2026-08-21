import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import clockImage from "../../assets/images/deals/clock-deals.png";
import headphoneImage from "../../assets/images/deals/headphone-deals.png";
import smartwatchImage from "../../assets/images/deals/smartwatch-deals.png";
import hpLaptopImage from "../../assets/images/deals/HP-deals (3).png";
import perfumeImage from "../../assets/images/deals/prfume-deals.png";

const LIMITED_TIME_PRODUCTS = [
  {
    id: 1,
    image: headphoneImage,
    alt: "Wireless over-ear headphones on limited time deal",
    discount: "-50%",
    countdownSeconds: 10136,
  },
  {
    id: 2,
    image: smartwatchImage,
    alt: "Smart watch with fitness tracker on limited time deal",
    discount: "-40%",
    countdownSeconds: 10136,
  },
  {
    id: 3,
    image: hpLaptopImage,
    alt: "HP laptop on limited time deal",
    discount: "-40%",
    countdownSeconds: 10136,
  },
  {
    id: 4,
    image: perfumeImage,
    alt: "Luxury perfume bottle on limited time deal",
    discount: "-50%",
    countdownSeconds: 10136,
  },
];

function useCountdown(initialSeconds) {
  const [remaining, setRemaining] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining((prev) => (prev <= 1 ? initialSeconds : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [initialSeconds]);

  const pad = (value) => String(value).padStart(2, "0");

  return {
    hours: pad(Math.floor(remaining / 3600)),
    minutes: pad(Math.floor((remaining % 3600) / 60)),
    seconds: pad(remaining % 60),
  };
}

function CountdownTimer({ initialSeconds }) {
  const { hours, minutes, seconds } = useCountdown(initialSeconds);

  return (
    <div
      className="mt-auto flex items-center justify-center gap-1.5 pt-2 text-[0.95rem] font-extrabold tracking-wide text-[#111827] tabular-nums sm:text-base"
      role="timer"
      aria-label={`Deal ends in ${hours} hours ${minutes} minutes ${seconds} seconds`}
    >
      <span>{hours}</span>
      <span className="text-gray-400">:</span>
      <span>{minutes}</span>
      <span className="text-gray-400">:</span>
      <span>{seconds}</span>
    </div>
  );
}

function LimitedTimeProductCard({ product }) {
  return (
    <article className="group relative flex h-full min-w-0 flex-col rounded-xl border border-gray-100 bg-white p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)] sm:p-3">
      <span className="absolute left-2 top-2 z-10 inline-flex items-center rounded-md bg-red-500 px-2 py-0.5 text-[0.68rem] font-bold leading-tight text-white shadow-sm sm:text-[0.72rem]">
        {product.discount}
      </span>

      <div className="flex flex-1 items-center justify-center px-1 pb-1 pt-4">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-[96px] w-full object-contain transition-transform duration-300 group-hover:scale-105 md:h-[104px] lg:h-[92px] xl:h-[116px]"
        />
      </div>

      <CountdownTimer initialSeconds={product.countdownSeconds} />
    </article>
  );
}

function LimitedTimeOffers() {
  return (
    <section className="mb-10 mt-8" aria-label="Limited Time Offers">
      <div className="relative isolate overflow-hidden rounded-[20px] bg-[linear-gradient(100deg,#6d28d9_0%,#7c3aed_16%,#a855f7_36%,#d946ef_56%,#ec4899_74%,#fb7185_87%,#fb923c_100%)] shadow-[0_20px_50px_-15px_rgba(109,40,217,0.5)] [[data-theme='dark']_&]:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.65)]">
        {/* Decorative glow accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
        >
          <div className="pointer-events-none absolute -top-[130px] left-[8%] h-[280px] w-[280px] rounded-full bg-fuchsia-300/30 opacity-50 blur-[70px]" />
          <div className="pointer-events-none absolute -bottom-[150px] right-[4%] h-[300px] w-[300px] rounded-full bg-orange-400/40 opacity-50 blur-[70px]" />
        </div>

        <div className="flex flex-col items-stretch gap-5 p-5 md:flex-row md:items-center md:gap-6 md:p-6 lg:gap-8">
          {/* Left promotional content */}
          <div className="flex flex-col items-center gap-4 text-center md:w-[38%] md:min-w-[300px] md:flex-row md:gap-5 md:text-left lg:w-[37%] lg:gap-6 xl:w-[36%]">
            <img
              src={clockImage}
              alt="Alarm clock symbolizing deals ending soon"
              loading="lazy"
              className="h-24 w-auto shrink-0 object-contain drop-shadow-[0_14px_26px_rgba(30,10,60,0.45)] md:ml-3 md:h-28 lg:h-32 xl:h-36"
            />

            <div className="flex min-w-0 flex-col items-center md:items-start">
              <h2 className="m-0 text-[clamp(1.35rem,2.2vw,1.9rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white drop-shadow-[0_3px_14px_rgba(30,10,60,0.35)]">
                Limited Time Offers
              </h2>
              <p className="mt-1.5 text-[clamp(0.85rem,1.2vw,1rem)] font-medium leading-snug text-white/90">
                Hurry up! Deals ends soon
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-white px-6 py-2.5 text-[0.88rem] font-bold text-[#7c3aed] no-underline shadow-[0_10px_24px_-8px_rgba(30,10,60,0.5)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Product deal cards */}
          <div className="grid min-w-0 flex-1 grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-3.5">
            {LIMITED_TIME_PRODUCTS.map((product) => (
              <LimitedTimeProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LimitedTimeOffers;
