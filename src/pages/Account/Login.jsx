import { Link } from "react-router-dom";

import signupImage from "../../assets/images/signup/signup-image.png";
import feature1 from "../../assets/images/signup/signup-1.png";
import feature2 from "../../assets/images/signup/signup-2.png";
import feature3 from "../../assets/images/signup/signup-3.png";
import feature4 from "../../assets/images/signup/signup-4.png";

import LoginForm from "./LoginForm";
import SignupFeatures from "./SignupFeatures";

import "./SignUp.css";

const features = [
  { icon: feature1, title: "Secure & Safe", desc: "Your data is protected with advanced security." },
  { icon: feature2, title: "Easy Shopping", desc: "Find products and services with ease." },
  { icon: feature3, title: "Best Deals", desc: "Get exclusive offers and discounts." },
  { icon: feature4, title: "24/7 Support", desc: "We're here to help you anytime." },
];

function Login() {
  return (
    <div className="signup-page">
      <div className="signup-layout">
        {/* LEFT — Promotional Section */}
        <div className="signup-left" style={{ flex: "0 0 36%" }}>
          <span className="signup-badge">Join Omnivixo</span>

          <h1 className="signup-heading">
            <span className="signup-heading-dark">Welcome Back to</span>
            <span className="signup-heading-purple">Omnivixo!</span>
          </h1>

          <p className="signup-description">
            Login to access your account and continue shopping for products and services.
          </p>

          <img src={signupImage} alt="Omnivixo Login" className="signup-promo-image" />

          <div className="signup-features">
            {features.map((f) => (
              <div key={f.title} className="signup-feature-item">
                <div className="signup-feature-icon">
                  <img src={f.icon} alt={f.title} />
                </div>
                <div>
                  <div className="signup-feature-title">{f.title}</div>
                  <div className="signup-feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="signup-login-link">
            Don't have an account? <Link to="/account">Sign Up</Link>
          </p>
        </div>

        {/* RIGHT — Login Form */}
        <LoginForm />
      </div>

      {/* Signup Stats / Features Section */}
      <SignupFeatures />
    </div>
  );
}

export default Login;
