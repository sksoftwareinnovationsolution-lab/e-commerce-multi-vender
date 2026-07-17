import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon, FiShoppingCart } from "react-icons/fi";
import { useTheme } from "../../../context/useTheme";
import { useCart } from "../../../context/useCart";
import logo from "../../../assets/images/logo.jpeg";
import "../Header.css";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { totalItems } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <Link to="/" className="header__logo">
            <img
              src={logo}
              alt="Company Logo"
              className="header__logo-img"
            />
          </Link>

          <button
            className="header__hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
          </button>
        </div>

        <div className="header__center">
          <button className="header__location" type="button">
            <svg
              className="header__location-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="header__location-text">Select Location</span>
          </button>

          <div className="header__search">
            <svg
              className="header__search-icon"
              xmlns="http://www.w3.org/2000/svg"
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
            <input
              className="header__search-input"
              type="search"
              placeholder="Search stores or products..."
              aria-label="Search stores or products"
            />
          </div>
        </div>

        <div className="header__right">
          <button
            className="header__theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <FiSun className="header__theme-icon" />
            ) : (
              <FiMoon className="header__theme-icon" />
            )}
          </button>

          <Link to="/cart" className="header__cart-link" aria-label="Shopping cart">
            <div className="header__cart-wrapper">
              <FiShoppingCart className="header__cart-icon" />
              <span className="header__cart-badge">{totalItems}</span>
            </div>
          </Link>

          <button className="header__login-btn" type="button">
            Login
          </button>
        </div>

        <div
          className={`header__mobile-menu ${
            isMobileMenuOpen ? "header__mobile-menu--open" : ""
          }`}
        >
          <nav className="header__mobile-nav">
            <div className="header__mobile-top-bar">
              <button
                className="header__theme-toggle"
                type="button"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <FiSun className="header__theme-icon" />
                ) : (
                  <FiMoon className="header__theme-icon" />
                )}
              </button>

              <Link to="/cart" className="header__cart-link" aria-label="Shopping cart">
                <div className="header__cart-wrapper">
                  <FiShoppingCart className="header__cart-icon" />
                  <span className="header__cart-badge">{totalItems}</span>
                </div>
              </Link>
            </div>

            <button className="header__mobile-location" type="button">
              <svg
                className="header__location-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Select Location</span>
            </button>
            <button className="header__mobile-login-btn" type="button">
              Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
