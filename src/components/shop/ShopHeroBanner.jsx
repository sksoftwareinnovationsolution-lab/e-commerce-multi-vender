    import { ShieldCheck, CreditCard, RotateCcw, Truck } from "lucide-react";
    import FeatureCard from "./FeatureCard";
    import shoppingIllustration from "../../assets/images/shop/shopping-hero-illustration.png";

    const features = [
      {
        icon: ShieldCheck,
        title: "100% Original",
        description: "Genuine Products",
      },
      {
        icon: CreditCard,
        title: "Secure Payments",
        description: "Multiple Payment Options",
      },
      {
        icon: RotateCcw,
        title: "Easy Returns",
        description: "7 Days Return Policy",
      },
      {
        icon: Truck,
        title: "Fast Delivery",
        description: "On Time Delivery",
      },
    ];

    function ShopHeroBanner() {
      return (
        <section className="mb-8">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#F8F5FF] via-[#FFF8FD] to-[#FFF7F2]">

                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-start px-8 lg:px-10 pt-8">

              {/* Left */}
            <div className="relative z-20 -ml-3 lg:-ml-10 mt-16">

                <h1 className="text-[42px] leading-tight font-bold text-[#111827]">
                  Shop Everything You Need
                </h1>

                <p className="mt-2 text-[18px] text-gray-600">
                  Discover millions of quality products at best prices
                </p>

              </div>

              {/* Right Image */}
             <div className="relative flex justify-end items-start">

                <img
                  src={shoppingIllustration}
                  alt="Shopping"
                  className="
                    w-full
                    max-w-[650px]
                    object-contain
                    translate-x-[52px] xl:translate-x-[58px]
                    -translate-y-6
                  "
                />

              </div>

            </div>

            {/* Cards */}
          <div className="relative z-30 px-6 lg:px-8 pb-7 -mt-45 lg:-ml-8">

              <div className="flex flex-wrap lg:flex-nowrap gap-4">

                {features.map((item) => (
                  <div
                    key={item.title}
                    className="flex-1 min-w-[210px] max-w-[205px]"
                  >
                    <FeatureCard {...item} />
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>
      );
    }

    export default ShopHeroBanner;