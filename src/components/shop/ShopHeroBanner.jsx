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
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#F8F5FF] via-[#FFF8FD] to-[#FFF7F2]">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-start gap-8 px-6 pt-8 lg:px-10">

          {/* Text */}
          <div className="order-1 lg:order-1 lg:ml-8 lg:mt-6 xl:mt-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#111827]">
              Shop Everything You Need
            </h1>

            <p className="mt-3 text-base md:text-lg text-gray-600">
              Discover millions of quality products at best prices
            </p>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={shoppingIllustration}
              alt="Shopping"
              className="
                w-full
                max-w-[420px]
                md:max-w-[520px]
                lg:max-w-[650px]
                object-contain
                lg:-translate-x-[80px]
                lg:-translate-y-6
              "
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className="
            px-6
            pb-8
            mt-8
            lg:px-10
            lg:-mt-44
            lg:ml-10
            relative
            z-20
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap gap-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="
                  w-full
                  lg:flex-1
                  lg:min-w-[210px]
                  lg:max-w-[205px]
                "
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