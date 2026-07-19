import { Link } from "react-router-dom";
import "../Hero.css";

function Hero() {

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Content: Left Text + Right Placeholder */}
        <div className="hero__content">
          {/* Left Column */}
          <div className="hero__left">
            <span className="hero__badge">Multi-Vendor Marketplace</span>

            <h1 className="hero__title">
              Everything You Need,<br />
              <span className="hero__title-accent">One Platform</span>
            </h1>

            <p className="hero__description">
              Shop products, book services, hire professionals,
              and grow your business from one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="hero__ctas">
              <Link
                to="/shop"
                className="hero__cta hero__cta--primary"
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
              </Link>

              <Link
                to="/services"
                className="hero__cta hero__cta--secondary"
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
              </Link>

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

          </div>

          {/* Right Column */}
          <div className="hero__right">
            <img
              src="/images/hero-banner.png"
              alt="Multi-Vendor Marketplace — Products, Service Providers, Secure Payments, Fast Delivery"
              className="hero__image"
              loading="eager"
            />
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;