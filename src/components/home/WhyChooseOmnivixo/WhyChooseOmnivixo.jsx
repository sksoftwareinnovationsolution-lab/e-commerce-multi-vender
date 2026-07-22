import securePaymentsIcon from "../../../assets/images/why-choose/secure-payments-icon.png";
import fastDeliveryIcon from "../../../assets/images/why-choose/fast-delivery-icon.png";
import verifiedSellersIcon from "../../../assets/images/why-choose/verified-sellers-icon.png";
import support24x7Icon from "../../../assets/images/why-choose/support-24x7-icon.png";

const FEATURES = [
  {
    icon: securePaymentsIcon,
    iconBg: "bg-purple-500",
    title: "Secure Payments",
    description: "100% secure payment methods & buyer protection",
  },
  {
    icon: fastDeliveryIcon,
    iconBg: "bg-orange-500",
    title: "Fast Delivery",
    description: "Quick delivery at your doorstep",
  },
  {
    icon: verifiedSellersIcon,
    iconBg: "bg-blue-500",
    title: "Verified Sellers",
    description: "All sellers & professionals are verified",
  },
  {
    icon: support24x7Icon,
    iconBg: "bg-green-500",
    title: "24×7 Support",
    description: "Round-the-clock customer support",
  },
];

function WhyChooseOmnivixo() {
  return (
    <section className="why-choose" aria-label="Why Choose Omnivixo">
      <div className="why-choose__header">
        <h2 className="why-choose__title">Why Choose Omnivixo?</h2>
      </div>

      <div className="why-choose__grid">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="why-choose__card">
            <div className={`why-choose__card-icon ${feature.iconBg}`}>
              <img src={feature.icon} alt={feature.title} className="why-choose__card-img" />
            </div>
            <div className="why-choose__card-content">
              <h3 className="why-choose__card-title">{feature.title}</h3>
              <p className="why-choose__card-desc">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseOmnivixo;
