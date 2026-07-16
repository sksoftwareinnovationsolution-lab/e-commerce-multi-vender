import "../shop/Banner.css";

const features = [
  { icon: "✓", label: "100% Original" },
  { icon: "🔒", label: "Secure Payments" },
  { icon: "↩", label: "Easy Returns" },
  { icon: "🚚", label: "Fast Delivery" },
];

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__gradient">
          <div className="banner__content">
            <h2 className="banner__title">
              Mega Sale — Up to <span className="banner__highlight">70% Off</span>
            </h2>
            <p className="banner__subtitle">
              Shop the best deals across electronics, fashion, home &amp; more
            </p>
          </div>
        </div>

        <div className="banner__features">
          {features.map((feature) => (
            <div key={feature.label} className="banner__feature">
              <span className="banner__feature-icon">{feature.icon}</span>
              <span className="banner__feature-label">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;
