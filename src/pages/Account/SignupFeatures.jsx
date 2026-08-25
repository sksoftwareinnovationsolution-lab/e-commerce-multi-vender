import statsIcon1 from "../../assets/images/signup/signup-5.png";
import statsIcon2 from "../../assets/images/signup/signup-6.png";
import statsIcon3 from "../../assets/images/signup/signup-7.png";
import statsIcon4 from "../../assets/images/signup/signup-8.png";

function SignupFeatures() {
  return (
    <div className="signup-stats-section">
      <div className="signup-stats-card">
        <div className="signup-stat-item">
          <div className="signup-stat-icon-bg signup-stat-purple">
            <img src={statsIcon1} alt="Products" />
          </div>
          <div className="signup-stat-text">
            <div className="signup-stat-number signup-stat-color-purple">50K+</div>
            <div className="signup-stat-title">Products</div>
            <div className="signup-stat-desc">Wide range of quality products from trusted sellers.</div>
          </div>
        </div>

        <div className="signup-stat-divider" />

        <div className="signup-stat-item">
          <div className="signup-stat-icon-bg signup-stat-green">
            <img src={statsIcon2} alt="Service Providers" />
          </div>
          <div className="signup-stat-text">
            <div className="signup-stat-number signup-stat-color-green">5K+</div>
            <div className="signup-stat-title">Service Providers</div>
            <div className="signup-stat-desc">Verified professionals ready to serve you.</div>
          </div>
        </div>

        <div className="signup-stat-divider" />

        <div className="signup-stat-item">
          <div className="signup-stat-icon-bg signup-stat-orange">
            <img src={statsIcon3} alt="Happy Customers" />
          </div>
          <div className="signup-stat-text">
            <div className="signup-stat-number signup-stat-color-orange">100K+</div>
            <div className="signup-stat-title">Happy Customers</div>
            <div className="signup-stat-desc">Join our growing community of satisfied customers.</div>
          </div>
        </div>

        <div className="signup-stat-divider" />

        <div className="signup-stat-item">
          <div className="signup-stat-icon-bg signup-stat-blue">
            <img src={statsIcon4} alt="Customer Support" />
          </div>
          <div className="signup-stat-text">
            <div className="signup-stat-number signup-stat-color-blue">24/7</div>
            <div className="signup-stat-title">Customer Support</div>
            <div className="signup-stat-desc">We're here to help you anytime, anywhere.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupFeatures;
