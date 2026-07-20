import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { useCart } from "../../../context/useCart";
import logo from "../../../assets/images/Logo.png";
import "../Header.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/services", label: "Services" },
  { to: "/shops", label: "Sell on Omnivixo" },
  { to: "/deals", label: "Deals" },
  { to: "/contact", label: "Contact" },
];

const CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Beauty",
  "Automobile",
  "Gaming",
  "Grocery",
  "Pets",
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const categoriesRef = useRef(null);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    if (!categoriesOpen) return;
    const handleClickOutside = (e) => {
      if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [categoriesOpen]);

  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current === location.pathname) return;
    prevPathname.current = location.pathname;
    const raf = requestAnimationFrame(() => {
      setMobileMenuOpen(false);
      setCategoriesOpen(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full h-[72px] bg-white border-b border-gray-100 shadow-sm shadow-gray-100/50">
      <div className="flex items-center h-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== DESKTOP / TABLET ===== */}
        <div className="hidden md:flex items-center w-full gap-2 lg:gap-4">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Omnivixo"
              className="md:h-[44px] lg:h-[48px] w-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 lg:gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group relative px-2 lg:px-2.5 py-2 text-[14px] lg:text-[15px] font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-2 right-2 h-[2.5px] bg-purple-600 rounded-full transition-all duration-300 ease-out origin-center ${
                    isActive(link.to)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}

            {/* All Categories Dropdown */}
            <div className="relative ml-2 lg:ml-3" ref={categoriesRef}>
              <button
                type="button"
                onClick={() => setCategoriesOpen((prev) => !prev)}
                className="flex items-center gap-1.5 px-2 lg:px-2.5 py-2 text-[14px] lg:text-[15px] font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200 whitespace-nowrap cursor-pointer"
              >
                All Categories
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    categoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-2.5 w-56 bg-white border border-gray-100 rounded-xl shadow-xl shadow-gray-200/50 py-1.5 z-50">
                  <div className="px-4 py-2 border-b border-gray-50 mb-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Browse Categories
                    </span>
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat}
                      to={`/shop?category=${cat
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-")}`}
                      className="block px-4 py-2.5 text-[13.5px] font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150 mx-1.5 rounded-lg"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Flexible spacer */}
          <div className="flex-1" />

          {/* Search Bar */}
          <div className="hidden lg:flex w-[280px] flex-shrink-0">
            <div className="flex items-center w-full h-[42px] bg-gray-50 border border-gray-200 rounded-full overflow-hidden transition-all duration-200 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-50">
              <FiSearch className="flex-shrink-0 w-[18px] h-[18px] text-gray-400 ml-4" />
              <input
                className="flex-1 min-w-0 px-3 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none border-none"
                type="search"
                placeholder="Search products, services..."
                aria-label="Search products, services"
              />
              <button
                type="button"
                className="flex-shrink-0 h-full px-5 bg-purple-600 text-white text-[13.5px] font-semibold hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 lg:gap-4">
            <Link
              to="/account"
              className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200 hover:scale-105"
              aria-label="Account"
            >
              <FiUser className="w-5 h-5" />
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200 hover:scale-105"
              aria-label="Wishlist"
            >
              <FiHeart className="w-5 h-5" />
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-10 h-10 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200 hover:scale-105"
              aria-label="Shopping cart"
            >
              <FiShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-bold leading-none rounded-full shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="flex md:hidden items-center justify-between w-full">
          <button
            className="flex items-center justify-center w-10 h-10 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>

          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Omnivixo"
              className="h-[38px] w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-1">
            <Link
              to="/search"
              className="flex items-center justify-center w-10 h-10 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-10 h-10 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 flex items-center justify-center min-w-[16px] h-[16px] px-1 bg-red-500 text-white text-[10px] font-bold leading-none rounded-full shadow-sm">
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
            <div className="absolute top-0 left-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col animate-slide-in">
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 h-[68px] border-b border-gray-100 flex-shrink-0">
                <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src={logo}
                    alt="Omnivixo"
                    className="h-[38px] w-auto object-contain"
                  />
                </Link>
                <button
                  className="flex items-center justify-center w-9 h-9 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Drawer Search */}
              <div className="px-4 py-3.5 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center h-10 bg-gray-50 border border-gray-200 rounded-full overflow-hidden">
                  <FiSearch className="flex-shrink-0 w-[18px] h-[18px] text-gray-400 ml-3.5" />
                  <input
                    className="flex-1 min-w-0 px-2.5 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none border-none"
                    type="search"
                    placeholder="Search products, services..."
                    aria-label="Search products, services"
                  />
                  <button
                    type="button"
                    className="flex-shrink-0 h-full px-4 bg-purple-600 text-white text-sm font-semibold cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Drawer Nav */}
              <nav
                className="flex-1 overflow-y-auto py-2"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-5 py-3 text-[15px] font-medium transition-colors duration-150 ${
                      isActive(link.to)
                        ? "text-purple-600 bg-purple-50 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-purple-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mx-5 my-3 border-t border-gray-100" />

                <div className="px-5 py-2">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Categories
                  </span>
                </div>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    to={`/shop?category=${cat
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    className="block px-5 py-2.5 text-[14px] text-gray-500 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-150"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat}
                  </Link>
                ))}

                <div className="mx-5 my-3 border-t border-gray-100" />

                <Link
                  to="/account"
                  className="flex items-center gap-3 px-5 py-3 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiUser className="w-5 h-5" />
                  My Account
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 px-5 py-3 text-[15px] font-medium text-gray-600 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FiHeart className="w-5 h-5" />
                  Wishlist
                </Link>
              </nav>

              {/* Drawer Footer */}
              <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0">
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
