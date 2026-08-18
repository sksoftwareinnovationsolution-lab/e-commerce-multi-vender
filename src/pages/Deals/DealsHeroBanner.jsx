import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  RotateCcw,
  Flame,
  Shield,
} from "lucide-react";
import bigSaleImg from "../../assets/images/deals/big-sale.png";

const DEAL_END_DATE = new Date();
DEAL_END_DATE.setDate(DEAL_END_DATE.getDate() + 2);
DEAL_END_DATE.setHours(23, 59, 59, 999);

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const next = calcTimeLeft(targetDate);
      setTimeLeft(next);
      if (
        next.days === 0 &&
        next.hours === 0 &&
        next.minutes === 0 &&
        next.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function calcTimeLeft(target) {
  const now = new Date().getTime();
  const end = new Date(target).getTime();
  const diff = Math.max(0, end - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const confettiPieces = [
  { top: "8%", left: "30%", size: 6, color: "#facc15", rotate: 35 },
  { top: "15%", left: "42%", size: 5, color: "#f97316", rotate: -20 },
  { top: "5%", left: "50%", size: 7, color: "#ec4899", rotate: 55 },
  { top: "20%", left: "38%", size: 4, color: "#a78bfa", rotate: -45 },
  { top: "10%", left: "55%", size: 5, color: "#34d399", rotate: 30 },
  { top: "25%", left: "45%", size: 6, color: "#fbbf24", rotate: -60 },
  { top: "12%", left: "35%", size: 4, color: "#f472b6", rotate: 15 },
  { top: "18%", left: "52%", size: 5, color: "#fb923c", rotate: -10 },
  { top: "7%", left: "48%", size: 6, color: "#c084fc", rotate: 40 },
  { top: "22%", left: "33%", size: 4, color: "#38bdf8", rotate: -35 },
  { top: "30%", left: "40%", size: 5, color: "#facc15", rotate: 50 },
  { top: "14%", left: "58%", size: 4, color: "#fb7185", rotate: -25 },
];

function DealsHeroBanner() {
  const { days, hours, minutes, seconds } = useCountdown(DEAL_END_DATE);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative mx-auto mt-2 max-w-[1600px] overflow-hidden rounded-[1.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:rounded-[1.5rem]">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(100deg, #4c1d95 0%, #7c3aed 18%, #a855f7 32%, #d946ef 50%, #ec4899 66%, #f97316 85%, #fb923c 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-5 py-6 md:px-8 md:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-10 lg:py-7 xl:px-14">

        {/* LEFT — Text Content */}
        <div className="flex max-w-[420px] flex-col items-center gap-3 text-center lg:items-start lg:text-left xl:max-w-[480px]">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-white backdrop-blur-sm sm:text-[0.75rem]">
            Limited Time Offer
          </span>

          {/* Heading */}
          <h1 className="text-[2.25rem] leading-[1.1] font-extrabold tracking-tight text-white md:text-[2.75rem] lg:text-[3rem] xl:text-[3.5rem]">
            MEGA DEALS
          </h1>

          {/* Sub heading */}
          <h2 className="leading-[1.15] font-extrabold tracking-tight">
            <span className="text-[1.75rem] text-white md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]">UP TO </span>
            <span className="text-[2.25rem] text-yellow-300 md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">80% OFF</span>
          </h2>

          <p className="text-[0.9rem] leading-relaxed text-white/85 md:text-[0.95rem]">
            Big Savings on Top Products &amp; Services
          </p>

          <p className="text-[0.85rem] font-medium text-white/70 md:text-[0.9rem]">
            Shop more, Save more!
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="mt-1 inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-white px-7 py-3 text-[0.875rem] font-semibold text-[#7c3aed] shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] sm:px-8 sm:py-3.5 sm:text-[0.9rem]"
          >
            Shop All Deals
          </Link>
        </div>

        {/* CENTER — Big Sale Image + Confetti */}
        <div className="pointer-events-none relative flex flex-shrink-0 items-center justify-center lg:flex-1">
          {/* Confetti Pieces */}
          <div className="absolute inset-0 overflow-hidden">
            {confettiPieces.map((c, i) => (
              <span
                key={i}
                className="absolute block"
                style={{
                  top: c.top,
                  left: c.left,
                  width: c.size,
                  height: c.size,
                  backgroundColor: c.color,
                  transform: `rotate(${c.rotate}deg)`,
                  borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "2px" : "1px",
                  opacity: 0.75,
                }}
              />
            ))}
          </div>

          {/* Image */}
          <img
            src={bigSaleImg}
            alt="Big Sale — Mega Deals"
            className="pointer-events-auto relative z-10 h-auto w-[280px] object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)] sm:w-[340px] md:w-[400px] lg:w-[440px] xl:w-[500px]"
            loading="eager"
          />
        </div>

        {/* RIGHT — Countdown + Features */}
        <div className="flex flex-col items-center gap-5 lg:items-center xl:min-w-[340px]">
          {/* Ribbon Label */}
          <div className="relative inline-flex items-center">
            <span
              className="relative z-10 inline-flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-2 text-[0.75rem] font-bold uppercase tracking-[1px] text-white shadow-[0_2px_10px_rgba(249,115,22,0.35)] sm:text-[0.8rem] md:text-[0.85rem]"
            >
              ⚡ Offer Ends In
            </span>
          </div>

          {/* Countdown Boxes */}
          <div className="flex gap-2.5 sm:gap-3">
            {[
              { val: pad(days), label: "DAYS" },
              { val: pad(hours), label: "HRS" },
              { val: pad(minutes), label: "MINS" },
              { val: pad(seconds), label: "SECS" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-xl bg-white px-3 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.1)] sm:rounded-2xl sm:px-4 sm:py-4"
              >
                <span className="text-[1.5rem] leading-none font-extrabold tracking-tight text-[#1e1b4b] sm:text-[1.85rem] md:text-[2rem] lg:text-[1.75rem] xl:text-[2rem]">
                  {item.val}
                </span>
                <span className="mt-1 text-[0.55rem] font-bold uppercase tracking-[1px] text-[#9333ea] sm:text-[0.6rem] md:text-[0.65rem]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Feature Items */}
          <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 sm:gap-x-4 lg:gap-x-5">
            {[
              {
                icon: ShieldCheck,
                title: "100% Genuine",
                sub: "Products",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                sub: "7 Days Return",
              },
              {
                icon: Flame,
                title: "Best Prices",
                sub: "Guaranteed",
              },
              {
                icon: Shield,
                title: "Secure",
                sub: "Payments",
              },
            ].map((feat) => (
              <div key={feat.title} className="flex flex-col items-center text-center">
                <feat.icon className="mb-1 h-5 w-5 text-white/80 sm:h-6 sm:w-6" strokeWidth={2.2} />
                <span className="text-[0.65rem] font-semibold text-white sm:text-[0.7rem]">
                  {feat.title}
                </span>
                <span className="text-[0.55rem] text-white/65 sm:text-[0.6rem]">
                  {feat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealsHeroBanner;
