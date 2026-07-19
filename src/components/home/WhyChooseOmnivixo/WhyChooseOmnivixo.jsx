const FEATURES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "100% Secure Payments",
    description: "Every transaction is encrypted and protected with industry-standard security.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: "Verified Sellers & Providers",
    description: "All vendors are thoroughly vetted for quality and reliability.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Fast & Free Delivery",
    description: "Get your orders delivered quickly with free shipping on eligible items.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "Easy Returns & Refunds",
    description: "Hassle-free return policy with quick refunds on eligible products.",
  },
];

function WhyChooseOmnivixo() {
  return (
    <section className="why-choose" aria-label="Why Choose Omnivixo">
      <div className="why-choose__header">
        <h2 className="why-choose__title">Why Choose Omnivixo</h2>
        <p className="why-choose__subtitle">
          Your trusted multi-vendor marketplace with everything you need.
        </p>
      </div>

      <div className="why-choose__grid">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="why-choose__card">
            <div className="why-choose__card-icon">
              {feature.icon}
            </div>
            <h3 className="why-choose__card-title">{feature.title}</h3>
            <p className="why-choose__card-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseOmnivixo;
