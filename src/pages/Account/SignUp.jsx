import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { UserPlus } from "lucide-react";

import signupImage from "../../assets/images/signup/signup-image.png";
import feature1 from "../../assets/images/signup/signup-1.png";
import feature2 from "../../assets/images/signup/signup-2.png";
import feature3 from "../../assets/images/signup/signup-3.png";
import feature4 from "../../assets/images/signup/signup-4.png";

import "./SignUp.css";

const features = [
  { icon: feature1, title: "Secure & Safe", desc: "Your data is protected with advanced security." },
  { icon: feature2, title: "Easy Shopping", desc: "Find products and services with ease." },
  { icon: feature3, title: "Best Deals", desc: "Get exclusive offers and discounts." },
  { icon: feature4, title: "24/7 Support", desc: "We're here to help you anytime." },
];

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [joinAs, setJoinAs] = useState("customer");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="signup-page">
      <div className="signup-layout" style={{ display: "flex", maxWidth: 1280, margin: "0 auto", minHeight: "calc(100vh - 76px)" }}>
        {/* LEFT — Promotional Section */}
        <div className="signup-left" style={{ flex: "0 0 40%" }}>
          <span className="signup-badge">Join Omnivixo</span>

          <h1 className="signup-heading">
            <span className="signup-heading-dark">Create Your Account</span>
            <span className="signup-heading-purple">and Get Started!</span>
          </h1>

          <p className="signup-description">
            Join thousands of customers and service providers who trust Omnivixo for their shopping and service needs.
          </p>

          <img src={signupImage} alt="Omnivixo Signup" className="signup-promo-image" />

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
            Already have an account? <Link to="/account">Login</Link>
          </p>
        </div>

        {/* RIGHT — Sign Up Form */}
        <div style={{ flex: "0 0 60%", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div className="signup-form-card">
            <div className="signup-form-header">
              <div className="signup-form-icon">
                <UserPlus className="w-6 h-6" color="white" />
              </div>
              <h2 className="signup-form-title">Sign Up</h2>
              <p className="signup-form-subtitle">Create your account to continue</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              {/* First Name / Last Name */}
              <div className="signup-form-row">
                <div className="signup-field">
                  <label>First Name <span>*</span></label>
                  <div className="signup-input-wrapper">
                    <input type="text" placeholder="Enter your first name" />
                  </div>
                </div>
                <div className="signup-field">
                  <label>Last Name <span>*</span></label>
                  <div className="signup-input-wrapper">
                    <input type="text" placeholder="Enter your last name" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="signup-field">
                <label>Email Address <span>*</span></label>
                <div className="signup-input-wrapper">
                  <input type="email" placeholder="Enter your email address" />
                </div>
              </div>

              {/* Phone */}
              <div className="signup-field">
                <label>Phone Number <span>*</span></label>
                <div className="signup-phone-group">
                  <div className="signup-input-wrapper signup-country-code">
                    <input type="text" value="+91" readOnly />
                  </div>
                  <div className="signup-input-wrapper signup-phone-input">
                    <input type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="signup-field">
                <label>Password <span>*</span></label>
                <div className="signup-input-wrapper">
                  <input type={showPassword ? "text" : "password"} placeholder="Create a strong password" />
                  <button type="button" className="signup-eye-btn" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="signup-field">
                <label>Confirm Password <span>*</span></label>
                <div className="signup-input-wrapper">
                  <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" />
                  <button type="button" className="signup-eye-btn" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Join As */}
              <div className="signup-join-label">I want to join as <span>*</span></div>
              <div className="signup-join-cards">
                <div
                  className={`signup-join-card ${joinAs === "customer" ? "active" : ""}`}
                  onClick={() => setJoinAs("customer")}
                >
                  <div className="signup-join-card-radio">
                    <div className="signup-radio-dot">
                      {joinAs === "customer" && <div className="signup-radio-dot-inner" />}
                    </div>
                    <span className="signup-join-card-title">Customer</span>
                  </div>
                  <div className="signup-join-card-desc">Shop for products and book services</div>
                </div>
                <div
                  className={`signup-join-card ${joinAs === "provider" ? "active" : ""}`}
                  onClick={() => setJoinAs("provider")}
                >
                  <div className="signup-join-card-radio">
                    <div className="signup-radio-dot">
                      {joinAs === "provider" && <div className="signup-radio-dot-inner" />}
                    </div>
                    <span className="signup-join-card-title">Service Provider</span>
                  </div>
                  <div className="signup-join-card-desc">Offer services and grow your business</div>
                </div>
              </div>

              {/* Terms */}
              <div className="signup-terms">
                <div className={`signup-checkbox ${agreed ? "checked" : ""}`} onClick={() => setAgreed(!agreed)}>
                  {agreed && <FiCheck />}
                </div>
                <div className="signup-terms-text">
                  I agree to the{" "}
                  <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="signup-submit-btn">Create Account</button>

              {/* Divider */}
              <div className="signup-divider">
                <div className="signup-divider-line" />
                <span className="signup-divider-text">or sign up with</span>
                <div className="signup-divider-line" />
              </div>

              {/* Social */}
              <div className="signup-social-buttons">
                <button type="button" className="signup-social-btn">
                  <FaGoogle /> Google
                </button>
                <button type="button" className="signup-social-btn">
                  <FaFacebookF /> Facebook
                </button>
              </div>

              <p className="signup-bottom-text">
                By creating an account, you agree to our Terms &amp; Conditions and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
