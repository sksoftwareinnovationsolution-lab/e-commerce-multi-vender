import { useState } from "react";
import { FiEye, FiEyeOff, FiCheck } from "react-icons/fi";
import { UserPlus } from "lucide-react";

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.998 23.998 0 0 0 0 24c0 3.77.9 7.35 2.56 10.51l7.97-5.92z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.92C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [joinAs, setJoinAs] = useState("customer");
  const [agreed, setAgreed] = useState(false);

  return (
    <div style={{ flex: "1 1 0%", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", minWidth: 0 }}>
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
              <GoogleIcon /> Google
            </button>
            <button type="button" className="signup-social-btn">
              <FacebookIcon /> Facebook
            </button>
          </div>

          <p className="signup-bottom-text">
            By creating an account, you agree to our Terms &amp; Conditions and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
