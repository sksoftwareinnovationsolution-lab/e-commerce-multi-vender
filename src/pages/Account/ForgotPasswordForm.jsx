import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { FiMail } from "react-icons/fi";

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.998 23.998 0 0 0 0 24c0 3.77.9 7.35 2.56 10.51l7.97-5.92z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.92C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

function ForgotPasswordForm() {
  return (
    <div className="fp-card">
      <div className="fp-form-header">
        <div className="fp-icon-circle">
          <Lock size={28} />
        </div>
        <h2 className="fp-title">Forgot Password?</h2>
        <p className="fp-subtitle">
          Enter your registered email address and<br />
          we'll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="fp-field">
          <label>Email Address <span>*</span></label>
          <div className="fp-input-wrapper">
            <span className="fp-input-icon">
              <FiMail size={18} />
            </span>
            <input type="email" placeholder="Enter your email address" />
          </div>
        </div>

        <button type="submit" className="fp-submit-btn">Send Reset Link</button>

        <div className="fp-divider">
          <div className="fp-divider-line" />
          <span className="fp-divider-text">or</span>
          <div className="fp-divider-line" />
        </div>

        <button type="button" className="fp-google-btn">
          <GoogleIcon /> Continue with Google
        </button>

        <p className="fp-bottom-text">
          Remember your password? <Link to="/account/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
