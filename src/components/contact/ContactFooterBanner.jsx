import { useState } from "react";

import googlePlaystore from "../../assets/images/deals/google-playstore.png";
import appStore from "../../assets/images/deals/app-store.png";
import qrContact from "../../assets/images/contact/QR-contact.png";
import phonesDeals from "../../assets/images/deals/phones-deals.png";

function ContactFooterBanner() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <section aria-label="Newsletter and Omnivixo app" className="mt-6 lg:mt-8">
      <div className="grid grid-cols-1 overflow-hidden rounded-[1.5rem] border border-indigo-100/70 shadow-[0_10px_30px_-18px_rgba(79,70,229,0.25)] lg:grid-cols-2">
        {/* LEFT — Newsletter */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#e11d48] px-5 py-6 sm:px-7 sm:py-7">
          <h2 className="text-lg font-bold leading-tight text-white sm:text-xl">
            Stay Updated with Omnivixo
          </h2>
          <p className="mt-1.5 text-sm leading-snug text-white/85">
            Subscribe to our newsletter for latest updates, exclusive offers
            and more.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-4 flex w-full max-w-md flex-col gap-2 min-[480px]:flex-row"
          >
            <label htmlFor="contact-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="contact-newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              className="h-11 w-full min-w-0 flex-1 rounded-lg bg-white px-3.5 text-sm text-gray-700 shadow-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-white/60"
            />
            <button
              type="submit"
              className="h-11 w-full shrink-0 rounded-lg bg-gradient-to-r from-[#6d28d9] to-[#3b82f6] px-5 text-sm font-semibold text-white shadow-sm transition-opacity duration-200 hover:opacity-90 min-[480px]:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* RIGHT — Omnivixo App */}
        <div className="relative bg-[#fbfaff] px-5 py-6 sm:px-7 sm:py-7 lg:border-l lg:border-indigo-100/70">
          <div className="relative z-10 flex min-w-0 flex-col items-start gap-y-5 min-[480px]:gap-y-6 sm:flex-row sm:items-center sm:gap-x-4 lg:gap-x-5">
            {/* Heading, description and store badges */}
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold leading-tight text-[#1e2a52] sm:text-xl">
                Download the Omnivixo App
              </h2>
              <p className="mt-1.5 text-sm leading-snug text-gray-500">
                Shop, book services and track orders on the go!
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
                <a href="#" aria-label="Get Omnivixo on Google Play">
                  <img
                    src={googlePlaystore}
                    alt="Get it on Google Play"
                    loading="lazy"
                    className="h-11 w-auto object-contain sm:h-12"
                  />
                </a>
                <a href="#" aria-label="Download Omnivixo on the App Store">
                  <img
                    src={appStore}
                    alt="Download on the App Store"
                    loading="lazy"
                    className="h-11 w-auto object-contain sm:h-12"
                  />
                </a>
              </div>
            </div>

            {/* QR code — after App Store badge, before phones */}
            <img
              src={qrContact}
              alt="QR code to download the Omnivixo app"
              loading="lazy"
              className="h-[68px] w-[68px] shrink-0 self-start rounded-md object-contain sm:h-[84px] sm:w-[84px] sm:self-auto lg:h-[94px] lg:w-[94px]"
            />

            {/* Phones — far right */}
            <img
              src={phonesDeals}
              alt="Omnivixo app on mobile phones"
              loading="lazy"
              className="pointer-events-none w-[55%] max-w-[250px] select-none object-contain sm:w-[30%] sm:max-w-[230px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFooterBanner;
