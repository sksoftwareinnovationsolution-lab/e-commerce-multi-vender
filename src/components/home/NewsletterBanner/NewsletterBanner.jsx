  import { Mail } from "lucide-react";

  function NewsletterBanner() {
    return (
      <section className="w-full">
        <div className="px-4">
          <div className="rounded-2xl py-3 pl-8 pr-6 shadow-lg md:pl-10 md:pr-8 md:py-3" style={{ backgroundImage: "linear-gradient(90deg, #3B2BD6 0%, #6B21F3 20%, #9D1DFF 40%, #D61BE7 55%, #FF4F8A 75%, #FF8A1F 100%)" }}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <div className="pl-2 md:pl-4 flex items-center gap-4 md:flex-1">
                <Mail className="h-[7.5rem] w-[5.5rem] text-white shrink-0 md:h-20 md:w-14" />
                <div className="md:whitespace-nowrap">
                  <h2 className="text-base font-bold text-white md:text-xl">
                    Stay Updated with Omnivixo  
                  </h2>
                  <p className="mt-0.5 text-xs text-white/70">
                    Subscribe to get the latest deals, offers and updates.
                  </p>
                </div>
              </div>
              <div className="ml-2 mr-4 flex w-full max-w-[450px] flex-col gap-3 md:ml-2 md:mr-5 md:flex-row md:items-center md:justify-end md:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-11 min-w-0 w-full rounded-lg bg-white px-5 text-sm text-gray-900 placeholder:text-gray-400 outline-none shadow-sm md:w-auto md:flex-1"
                />

                <button
                  className="flex h-10 w-full items-center justify-center rounded-lg bg-[#3F46F5] px-5 text-sm font-medium text-white transition hover:bg-[#3640E8] md:ml-4 md:h-11 md:min-w-[135px] md:w-auto"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default NewsletterBanner;
