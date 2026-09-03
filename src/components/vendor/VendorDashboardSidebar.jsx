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
  FiMapPin,
  FiClock,
  FiGrid,
  FiSettings,
  FiHeadphones,
} from "react-icons/fi";
import { TbCrown } from "react-icons/tb";
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

const MANAGEMENT_ITEMS = [
  { label: "Service Areas", icon: FiMapPin },
  { label: "Availability", icon: FiClock },
  { label: "Service Categories", icon: FiGrid },
  { label: "Settings", icon: FiSettings },
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

          {/* Management section */}
          <nav className="vd-sidebar__nav">
            <span className="vd-section-title">MANAGEMENT</span>
            {MANAGEMENT_ITEMS.map(({ label, icon: Icon }) => (
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

          {/* Upgrade Your Plan card */}
          <div className="rounded-xl p-4 bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex flex-col items-center text-center gap-2 flex-shrink-0">
            <TbCrown size={28} className="text-yellow-300" />
            <span className="font-bold text-sm">Upgrade Your Plan</span>
            <span className="text-xs text-purple-100 leading-relaxed">
              Get more bookings and grow your service business
            </span>
            <button className="mt-1 w-full bg-white text-purple-700 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
              Upgrade Now
            </button>
          </div>

          {/* Need Help section */}
          <div className="flex items-center gap-3 py-3 px-3 flex-shrink-0">
            <FiHeadphones size={20} className="text-gray-500 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-gray-800 leading-tight">Need Help?</span>
              <span className="text-xs text-gray-500">Contact Support</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default VendorDashboardSidebar;
