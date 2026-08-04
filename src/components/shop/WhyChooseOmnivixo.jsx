  import securePaymentsIcon from "../../assets/images/why-choose/secure-payments.png";
  import fastDeliveryIcon from "../../assets/images/why-choose/fast-delivery.png";
  import easyReturnIcon from "../../assets/images/why-choose/easy-return.png";
  import support24x7Icon from "../../assets/images/why-choose/support-24x7.png";

  const FEATURES = [
    {
      icon: securePaymentsIcon,
      title: "Secure Payments",
      description: "100% secure payment methods & buyer protection",
    },
    {
      icon: fastDeliveryIcon,
      title: "Fast Delivery",
      description: "Quick delivery at your doorstep",
    },
    {
      icon: easyReturnIcon,
      title: "Easy Returns",
      description: "7 days easy return policy",
    },
    {
      icon: support24x7Icon,
      title: "24/7 Support",
      description: "Round-the-clock customer support",
    },
  ];

  function WhyChooseOmnivixo() {
    return (
      <section aria-label="Why Choose Omnivixo" className="w-full py-10 sm:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex w-full items-center gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_12px_35px_-18px_rgba(17,24,39,0.18)] sm:w-[calc(50%-0.75rem)] lg:w-auto lg:flex-1"
            >
              <div className="flex h-[62px] w-[52px] shrink-0 items-center justify-center rounded-full bg-gray-50">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-[110px] w-[110px] object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-semibold leading-snug text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[13px] leading-snug text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default WhyChooseOmnivixo;
