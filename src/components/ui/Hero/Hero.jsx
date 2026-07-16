import "../Hero.css";

function Hero() {
  const categories = [
    { label: "Electronics", icon: "🖥️" },
    { label: "Fashion", icon: "👕" },
    { label: "Groceries", icon: "🛒" },
    { label: "Home", icon: "🏠" },
    { label: "Beauty", icon: "💄" },
    { label: "Repair", icon: "🔧" },
    { label: "Education", icon: "📚" },
    { label: "Travel", icon: "✈️" },
  ];

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Content: Left Text + Right Placeholder */}
        <div className="hero__content">
          {/* Left Column */}
          <div className="hero__left">
            <span className="hero__badge">Multi-Vendor Marketplace</span>

            <h1 className="hero__title">
              Discover <span className="hero__title-accent">Premium</span>{" "}
              Products & Services
            </h1>

            <p className="hero__description">
              Connect with trusted sellers and service providers in your area.
              Shop with confidence, compare prices, and enjoy secure
              transactions all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="hero__ctas">
              <button
                className="hero__cta hero__cta--primary"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Explore Products
              </button>

              <button
                className="hero__cta hero__cta--secondary"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Explore Services
              </button>

              <button
                className="hero__cta hero__cta--outline"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Become a Seller
              </button>
            </div>

            {/* Stats */}
            <div className="hero__stats">
              <span className="hero__stat">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                50K+ Products
              </span>

              <span className="hero__stat">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                5K+ Providers
              </span>

              <span className="hero__stat">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Secure Payments
              </span>

              <span className="hero__stat">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Fast Delivery
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero__right">
            <div className="hero__image-wrapper">
              <div className="hero__image-placeholder">
                <h3>Hero Banner</h3>
                <p>Banner image will be added later</p>
              </div>

              <div className="hero__cards">
                <div className="hero__card hero__card--top-right">
                  <svg
                    className="hero__card-icon hero__card-icon--green"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  50K+ Products
                </div>

                <div className="hero__card hero__card--bottom-left">
                  <svg
                    className="hero__card-icon hero__card-icon--blue"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  5K+ Service Providers
                </div>

                <div className="hero__card hero__card--top-left">
                  <svg
                    className="hero__card-icon hero__card-icon--purple"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Secure Payments
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="hero__search-section">
          <div className="hero__search-container">
            <div className="hero__search-bar">
              <input
                type="text"
                className="hero__search-input"
                placeholder="Search products, services, or stores..."
                aria-label="Search marketplace"
              />

              <button
                className="hero__search-button"
                type="button"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>
            </div>

            {/* Categories */}
            <div className="hero__categories">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  className="hero__category"
                  type="button"
                >
                  <span
                    className="hero__category-icon"
                    role="img"
                    aria-hidden="true"
                  >
                    {cat.icon}
                  </span>

                  <span className="hero__category-label">
                    {cat.label}
                  </span>
                </button>
              ))}

              <button
                className="hero__view-all"
                type="button"
              >
                <span
                  className="hero__view-all-icon"
                  aria-hidden="true"
                >
                  +
                </span>

                <span className="hero__view-all-label">
                  View All
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;