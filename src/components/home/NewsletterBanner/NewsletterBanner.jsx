import { Mail } from "lucide-react";

function NewsletterBanner() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl py-4 pl-8 pr-6 shadow-lg md:pl-10 md:pr-8 md:py-5" style={{ backgroundImage: "linear-gradient(90deg, #3B2BD6 0%, #6B21F3 20%, #9D1DFF 40%, #D61BE7 55%, #FF4F8A 75%, #FF8A1F 100%)" }}>
          <div className="flex flex-col gap-90 md:flex-row md:items-center">
            <div className="pl-2 md:pl-4 flex items-center gap-8">
              <div className="flex h-22 w-20 shrink-0 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/20">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div> 
                <h2 className="text-lg font-bold text-white md:text-xl">
                  Stay Updated with Omnivixo
                </h2>
                <p className="mt-0.5 text-xs text-white/70">
                  Subscribe to get the latest deals, offers and updates.
                </p>
              </div>
            </div>
            <div className="ml-2 mr-3 md:mr-5 flex w-full max-w-[450px] items-center justify-end">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-11 flex-1 rounded-lg bg-white px-5 text-sm text-gray-900 placeholder:text-gray-400 outline-none shadow-sm"
              />

              <button
                className="ml-4 flex h-11 min-w-[135px] items-center justify-center rounded-lg bg-[#3F46F5] px-5 text-sm font-medium text-white transition hover:bg-[#3640E8]"
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
