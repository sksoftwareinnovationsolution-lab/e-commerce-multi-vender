import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCart } from "../../../context/useCart";
import logo from "../../../assets/images/Logo.png";
import "../Header.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/services", label: "Services" },
  { to: "/deals", label: "Deals" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current === location.pathname) return;
    prevPathname.current = location.pathname;
    const raf = requestAnimationFrame(() => {
      setMobileMenuOpen(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full h-[76px] bg-white border-b border-gray-100">
      <div className="flex items-center h-full max-w-[1650px] mx-auto px-4 lg:px-6">

        {/* ===== DESKTOP / TABLET ===== */}
        <div className="hidden md:flex items-center w-full">

          {/* ---- LEFT: Logo ---- */}
          <div className="flex-shrink-0 mr-32">
            <Link to="/">
              <img
                src={logo}
                alt="Omnivixo"
                className="h-[85px] lg:h-[110px] w-auto object-contain"
              />
            </Link>
          </div>


          {/* ---- CENTER: Navigation ---- */}
          <nav className="flex items-center gap-11 lg:gap-11">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative py-3 text-[16px] font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-purple-600 rounded-full transition-transform duration-300 ease-out origin-left ${isActive(link.to)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* ---- RIGHT: Search + Icons ---- */}
          <div className="flex items-center gap-3 lg:gap-5 ml-auto">

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 min-w-[280px] max-w-[620px]">
              <div className="flex items-center w-full h-[42px] bg-gray-50 border border-gray-200 rounded-full overflow-hidden transition-all duration-200 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100">
                <FiSearch className="flex-shrink-0 w-[18px] h-[18px] text-gray-400 ml-4" />
                <input
                  className="flex-1 min-w-0 px-3 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none border-none"
                  type="search"
                  placeholder="Search products, services..."
                  aria-label="Search products, services"
                />
                <button
                  type="button"
                  className="flex-shrink-0 h-full px-5 bg-purple-600 text-white text-[13px] font-semibold hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200 cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-6 bg-gray-200" />

            {/* Icon Buttons */}
            <Link
              to="/account"
              className="flex items-center justify-center w-[42px] h-[42px] text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-200 hover:scale-105"
              aria-label="Account"
            >
              <FiUser className="w-6 h-6" />
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center justify-center w-[42px] h-[42px] text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-200 hover:scale-105"
              aria-label="Wishlist"
            >
              <FiHeart className="w-6 h-6" />
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-[42px] h-[42px] text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-200 hover:scale-105"
              aria-label="Shopping cart"
            >
              <FiShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-bold leading-none rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Hamburger */}
          <button
            className="flex items-center justify-center w-11 h-11 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Omnivixo"
              className="h-[42px] w-auto object-contain"
            />
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <Link
              to="/search"
              className="flex items-center justify-center w-11 h-11 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              aria-label="Search"
            >
              <FiSearch size={22} />
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-11 h-11 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <FiShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-1.5 right-1 flex items-center justify-center min-w-[16px] h-[16px] px-1 bg-red-500 text-white text-[10px] font-bold leading-none rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ===== MOBILE DRAWER ===== */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[200] md:hidden">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 animate-fade-in"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Panel */}
            <div className="absolute top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl flex flex-col animate-slide-in">
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100 flex-shrink-0">
                <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src={logo}
                    alt="Omnivixo"
                    className="h-[42px] w-auto object-contain"
                  />
                </Link>
                <button
                  className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Drawer Search */}
              <div className="px-5 py-4 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center h-11 bg-gray-50 border border-gray-200 rounded-full overflow-hidden">
                  <FiSearch className="flex-shrink-0 w-[18px] h-[18px] text-gray-400 ml-4" />
                  <input
                    className="flex-1 min-w-0 px-3 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none border-none"
                    type="search"
                    placeholder="Search products, services..."
                    aria-label="Search products, services"
                  />
                  <button
                    type="button"
                    className="flex-shrink-0 h-full px-5 bg-purple-600 text-white text-[13px] font-semibold cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Drawer Nav */}
              <nav
                className="flex-1 overflow-y-auto py-3"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-6 py-3 text-[16px] font-medium transition-colors duration-150 ${isActive(link.to)
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mx-6 my-3 border-t border-gray-100" />

                <Link
                  to="/account"
                  className="flex items-center gap-3 px-6 py-3 text-[16px] font-medium text-gray-600 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiUser className="w-5 h-5" />
                  My Account
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 px-6 py-3 text-[16px] font-medium text-gray-600 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiHeart className="w-5 h-5" />
                  Wishlist
                </Link>
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-4 border-t border-gray-100 flex-shrink-0">
                <p className="text-[12px] text-gray-400 text-center">
                  &copy; 2026 Omnivixo. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
