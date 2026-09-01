import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import ForgotPasswordForm from "./ForgotPasswordForm";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="fp-page">
      <nav className="fp-navbar">
        <Link to="/account/login">
          <img src={logo} alt="Omnivixo" className="fp-navbar-logo" />
        </Link>
        <Link to="/account/login" className="fp-back-link">Back to Login</Link>
      </nav>

      <main className="fp-main">
        <ForgotPasswordForm />
      </main>

      <footer className="fp-footer">
        &copy; {new Date().getFullYear()} Omnivixo. All rights reserved.
      </footer>
    </div>
  );
}

export default ForgotPassword;
