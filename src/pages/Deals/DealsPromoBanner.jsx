import { useState } from "react";
import { Mail, Smartphone } from "lucide-react";

import googlePlaystore from "../../assets/images/deals/google-playstore.png";
import appStore from "../../assets/images/deals/app-store.png";
import phonesDeals from "../../assets/images/deals/phones-deals.png";

function DealsPromoBanner() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <section className="mb-10" aria-label="Omnivixo offers and app">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-1">
        {/* LEFT — Subscribe to Newsletter */}
        <div className="group flex flex-col rounded-2xl bg-gradient-to-br from-[#8b7cf6] via-[#7761ee] to-[#6150e6] px-4 py-3.5 shadow-[0_10px_30px_rgba(109,74,255,0.25)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(109,74,255,0.35)] sm:px-5 sm:py-4">
          <div className="ml-12 mt-3 flex items-start gap-8">
            <Mail
              className="mt-1.5 ml-8 h-9 w-9 shrink-0 text-white sm:h-10 sm:w-10"
              strokeWidth={1.8}
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
             <h2 className="text-lg font-bold leading-tight text-white sm:text-xl">
                Subscribe to Newsletter
              </h2>
              <p className="mt-1.5 text-sm leading-snug text-white/85">
                Get the latest deals, offers and updates
              </p>

              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex w-full max-w-md flex-col gap-2 min-[480px]:flex-row min-[480px]:gap-1"
              >
                <label htmlFor="deals-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="deals-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="h-11 w-full min-w-0 flex-1 rounded-md bg-white px-3.5 text-sm text-gray-700 shadow-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-white/60 min-[480px]:rounded-r-none"
                />
                <button
                  type="submit"
                  className="h-11 w-full shrink-0 rounded-md bg-[#6d28d9] px-5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#5b21b6] min-[480px]:w-auto min-[480px]:rounded-l-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT — Omnivixo App */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#37177c] via-[#451a99] to-[#5b21b6] shadow-[0_10px_30px_rgba(76,29,149,0.35)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(76,29,149,0.45)] lg:h-[160px]">
          <div className="relative z-10 flex h-full max-w-full flex-col justify-center p-4 pr-[36%] sm:p-5 sm:pr-[42%]">
            <div className="ml-12 flex items-start gap-6">
              <Smartphone
                className="mt-0.5 h-9 w-9 shrink-0 text-white sm:h-10 sm:w-10"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <h2 className="text-xl font-bold leading-tight text-white sm:text-[22px]">
                  Omnivixo App
                </h2>
                <p className="mt-1 text-sm leading-snug text-white/85">
                  Shop, track orders and get exclusive app offers
                </p>
              </div>
            </div>

            <div className=" ml-25 mt-3 flex items-center gap-2.5 sm:gap-3">
              <a href="#" aria-label="Get Omnivixo on Google Play">
                <img
                  src={googlePlaystore}
                  alt="Get it on Google Play"
                  loading="lazy"
                  className="h-13 w-auto object-contain drop-shadow-md transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-13"
                />
              </a>
              <a href="#" aria-label="Download Omnivixo on the App Store">
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  loading="lazy"
                  className="h-13 w-auto object-contain drop-shadow-md transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-13"
                />
              </a>
            </div>
          </div>

          <img
            src={phonesDeals}
            alt="Omnivixo app on mobile phones"
            loading="lazy"
            className="pointer-events-none absolute -bottom-4 -right-2 z-0 w-[35%] select-none object-contain sm:-bottom-6 sm:-right-3 sm:w-[34%] sm:translate-x-[-40px]"
          />
        </div>
      </div>
    </section>
  );
}

export default DealsPromoBanner;
