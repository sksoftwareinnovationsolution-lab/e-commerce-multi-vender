import {
  FiHome,
  FiBriefcase,
  FiCalendar,
  FiUsers,
  FiDollarSign,
  FiCreditCard,
  FiAward,
  FiStar,
  FiUser,
  FiTag,
  FiBarChart2,
} from "react-icons/fi";
import vendorLogo from "../../assets/images/vendor/vendor-logo.png";
import "./VendorDashboardSidebar.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: FiHome },
  { label: "Services", icon: FiBriefcase },
  { label: "Bookings", icon: FiCalendar },
  { label: "Staff Management", icon: FiUsers },
  { label: "Earnings", icon: FiDollarSign },
  { label: "Wallet & Payouts", icon: FiCreditCard },
  { label: "Subscriptions", icon: FiAward },
  { label: "Reviews & Ratings", icon: FiStar },
  { label: "Customers", icon: FiUser },
  { label: "Coupons", icon: FiTag },
  { label: "Reports", icon: FiBarChart2 },
];

function VendorDashboardSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="vd-sidebar__overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          vd-sidebar
          ${isOpen ? "vd-sidebar--open" : ""}
        `}
      >
        {/* Logo */}
        <div className="vd-sidebar__logo">
          <img
            src={vendorLogo}
            alt="Vendor Logo"
            className="vd-sidebar__logo-img"
          />
        </div>

        <div className="vd-sidebar__scroll">
          {/* Vendor profile card */}
          <div className="vd-profile-card">
            <div className="vd-profile-card__icon">
              <FiBriefcase />
            </div>
            <div className="vd-profile-card__text">
              <span className="vd-profile-card__title">Service Vendor</span>
              <span className="vd-profile-card__subtitle">
                Manage your services &amp; bookings
              </span>
            </div>
          </div>

          {/* Sidebar navigation */}
          <nav className="vd-sidebar__nav">
            {NAV_ITEMS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="vd-nav-item"
              >
                <Icon className="vd-nav-item__icon" size={20} />
                <span className="vd-nav-item__label">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default VendorDashboardSidebar;
