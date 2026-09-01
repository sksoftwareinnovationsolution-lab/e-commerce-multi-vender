import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiChevronDown,
  FiCheckCircle,
  FiShoppingCart,
} from "react-icons/fi";
import "./VendorDashboardNavbar.css";

function VendorDashboardNavbar({ onMenuToggle }) {
  return (
    <header className="vd-navbar">
      {/* LEFT: Hamburger + Search */}
      <div className="vd-navbar__left">
        {/* Hamburger */}
        <button
          onClick={onMenuToggle}
          className="vd-navbar__icon-btn"
          aria-label="Toggle sidebar"
        >
          <FiMenu size={22} />
        </button>

        {/* Search bar */}
        <div className="vd-navbar__search">
          <FiSearch className="vd-navbar__search-icon" />
          <input
            className="vd-navbar__search-input"
            type="search"
            placeholder="Search anything..."
            aria-label="Search"
          />
        </div>
      </div>

      {/* RIGHT: Notifications + Profile */}
      <div className="vd-navbar__right">
        {/* Notification bell */}
        <button
          className="vd-navbar__icon-btn vd-navbar__icon-btn--relative"
          aria-label="Notifications"
        >
          <FiBell size={20} />
          <span className="vd-navbar__badge">8</span>
        </button>

        {/* Message/Chat notification */}
        <button
          className="vd-navbar__icon-btn vd-navbar__icon-btn--relative"
          aria-label="Messages"
        >
          <FiMessageSquare size={20} />
          <span className="vd-navbar__badge vd-navbar__badge--3">3</span>
        </button>

        {/* Divider */}
        <div className="vd-navbar__divider" />

        {/* Profile section */}
        <button className="vd-navbar__profile">
          {/* Avatar */}
          <div className="vd-navbar__avatar">
            <FiShoppingCart size={20} />
          </div>

          {/* Name + Role */}
          <div className="vd-navbar__profile-info">
            <span className="vd-navbar__profile-name">
              CleanCare Services
              <FiCheckCircle className="vd-navbar__profile-badge" />
            </span>
            <span className="vd-navbar__profile-role">Service Vendor</span>
          </div>

          {/* Chevron */}
          <FiChevronDown size={16} className="vd-navbar__chevron" />
        </button>
      </div>
    </header>
  );
}

export default VendorDashboardNavbar;
