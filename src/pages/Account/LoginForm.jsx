import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { User } from "lucide-react";

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

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div style={{ flex: "1 1 0%", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", minWidth: 0 }}>
      <div className="signup-form-card">
        <div className="signup-form-header">
          <div className="signup-form-icon">
            <User className="w-6 h-6" color="white" />
          </div>
          <h2 className="signup-form-title">Login</h2>
          <p className="signup-form-subtitle">Welcome back! Please login to continue</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email */}
          <div className="signup-field">
            <label>Email Address <span>*</span></label>
            <div className="signup-input-wrapper">
              <input type="email" placeholder="Enter your email address" />
            </div>
          </div>

          {/* Password */}
          <div className="signup-field">
            <label>Password <span>*</span></label>
            <div className="signup-input-wrapper">
              <input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
              <button type="button" className="signup-eye-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember me + Forgot Password */}
          <div className="login-options-row">
            <label className="login-remember">
              <div className={`signup-checkbox ${rememberMe ? "checked" : ""}`} onClick={() => setRememberMe(!rememberMe)}>
                {rememberMe && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <span>Remember me</span>
            </label>
            <Link to="/account/forgot-password" className="login-forgot-link">Forgot Password?</Link>
          </div>

          {/* Submit */}
          <button type="submit" className="signup-submit-btn">Login</button>

          {/* Divider */}
          <div className="signup-divider">
            <div className="signup-divider-line" />
            <span className="signup-divider-text">or login with</span>
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
            Don't have an account? <Link to="/account" className="login-signup-link">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
