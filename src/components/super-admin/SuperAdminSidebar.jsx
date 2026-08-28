import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiClock,
  FiFileText,
  FiUsers,
  FiShoppingBag,
  FiPackage,
  FiTool,
  FiTruck,
  FiShoppingCart,
  FiCalendar,
  FiArrowDownCircle,
  FiCreditCard,
  FiRepeat,
  FiStar,
  FiShield,
  FiChevronDown,
} from "react-icons/fi";
import superAdminLogo from "../../assets/images/superadmin/super-admin-logo.png";

const DASHBOARD_ITEM = {
  id: "dashboard",
  label: "Dashboard",
  icon: FiHome,
  path: "/super-admin",
};

const OVERVIEW_ITEMS = [
  { id: "analytics", label: "Analytics", icon: FiClock, path: "/super-admin/analytics" },
  { id: "reports", label: "Reports", icon: FiFileText, path: "/super-admin/reports" },
];

const MANAGEMENT_ITEMS = [
  { id: "users", label: "Users", icon: FiUsers, hasDropdown: true },
  { id: "sellers", label: "Sellers/Vendors", icon: FiShoppingBag, hasDropdown: true },
  { id: "products", label: "Products", icon: FiPackage, hasDropdown: true },
  { id: "service-providers", label: "Service Providers", icon: FiTool },
  { id: "riders", label: "Riders", icon: FiTruck, hasDropdown: true },
  { id: "orders", label: "Orders", icon: FiShoppingCart, badge: "25" },
  { id: "bookings", label: "Bookings", icon: FiCalendar },
  { id: "withdrawals", label: "Withdrawals", icon: FiArrowDownCircle },
  { id: "wallets", label: "Wallets", icon: FiCreditCard },
  { id: "subscriptions", label: "Subscriptions", icon: FiRepeat },
  { id: "reviews", label: "Reviews & Ratings", icon: FiStar },
  { id: "disputes", label: "Disputes", icon: FiShield },
];

const DEMO_SUBMENUS = {
  users: ["All Users", "Pending Verification", "Banned Users"],
  sellers: ["All Sellers", "Pending Approval", "Verified Sellers"],
  products: ["All Products", "Pending Approval", "Low Stock", "Blocked"],
  riders: ["All Riders", "Active Riders", "Pending Approval"],
};

function SuperAdminSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const [activeId, setActiveId] = useState("dashboard");
  const [openDropdowns, setOpenDropdowns] = useState({});
  const listRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (item) => {
    setActiveId(item.id);
    if (item.path === "/super-admin") {
      navigate(item.path);
    }
    if (window.innerWidth < 1024) onClose?.();
  };

  const handleManageSelect = (item) => {
    setActiveId(item.id);
    if (window.innerWidth < 1024) onClose?.();
  };

  useEffect(() => {
    const list = listRef.current;
    const el = itemRefs.current[activeId];
    const isOverviewItem = OVERVIEW_ITEMS.some((i) => i.id === activeId);
    if (list && el) {
      setIndicator({
        top: el.offsetTop - list.offsetTop,
        height: el.offsetHeight,
      });
    } else if (!isOverviewItem && activeId !== "dashboard") {
      setIndicator({ top: 0, height: 0 });
    }
  }, [activeId, isOpen]);

  const primaryActive = activeId === "dashboard";

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[270px]
          bg-[#0f172a] flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-center px-6 py-3 flex-shrink-0">
          <img
            src={superAdminLogo}
            alt="Super Admin Logo"
            className="h-[56px] w-auto object-contain"
          />
        </div>

        {/* Sidebar content */}
        <div className="super-admin-scroll flex-1 overflow-y-auto px-4 pb-3 flex flex-col gap-4">
          {/* Primary Dashboard button */}
          <button
            onClick={() => handleSelect(DASHBOARD_ITEM)}
            className={`
              flex items-center gap-3 w-full h-12 px-4 rounded-xl text-left
              transition-all duration-300 flex-shrink-0
              ${
                primaryActive
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white/5 text-gray-100 hover:bg-white/10"
              }
            `}
          >
            <FiHome
              size={20}
              className={`flex-shrink-0 ${primaryActive ? "text-white" : "text-gray-300"}`}
            />
            <span className="text-[15px] font-semibold">Dashboard</span>
          </button>

          {/* OVERVIEW section */}
          <div className="flex flex-col gap-1.5">
            <span className="px-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Overview
            </span>

            {/* Sliding nav list */}
            <div ref={listRef} className="relative flex flex-col gap-0.5">
              {/* Sliding active highlight */}
              <span
                className="absolute left-0 right-0 rounded-lg bg-gradient-to-r from-blue-500/25 to-purple-500/25 border border-blue-400/40"
                style={{
                  top: indicator.top,
                  height: indicator.height,
                  opacity: indicator.height === 0 ? 0 : 1,
                  transition: "top 0.3s ease, height 0.3s ease, opacity 0.3s ease",
                }}
              />

              {OVERVIEW_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    onClick={() => handleSelect(item)}
                    className={`
                      relative flex items-center gap-3 w-full h-10 px-4 rounded-lg text-left z-10
                      transition-colors duration-300 flex-shrink-0
                      ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}
                    `}
                  >
                    <Icon
                      size={18}
                      className={`flex-shrink-0 ${isActive ? "text-blue-300" : ""}`}
                    />
                    <span className="text-[14px] font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MANAGEMENT section */}
          <div className="flex flex-col gap-1.5">
            <span className="px-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Management
            </span>

            <div className="flex flex-col gap-0.5">
              {MANAGEMENT_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;
                const isOpen = !!openDropdowns[item.id];
                const hasRightElement = item.hasDropdown || item.badge;

                return (
                  <div key={item.id} className="flex flex-col">
                    <div className="relative">
                      <button
                        onClick={() => handleManageSelect(item)}
                        className={`
                          relative flex items-center gap-3 w-full h-10 pl-4 rounded-lg text-left z-10
                          transition-colors duration-300 flex-shrink-0
                          ${hasRightElement ? "pr-12" : "pr-4"}
                          ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}
                        `}
                      >
                        <Icon
                          size={18}
                          className={`flex-shrink-0 ${isActive ? "text-blue-300" : ""}`}
                        />
                        <span className="text-[14px] font-medium">{item.label}</span>
                      </button>

                      {item.hasDropdown && (
                        <button
                          onClick={() => toggleDropdown(item.id)}
                          aria-label={`Toggle ${item.label} submenu`}
                          className="absolute right-0 top-0 z-10 h-10 w-9 flex items-center justify-center text-gray-500 hover:text-white"
                        >
                          <FiChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : ""}`}
                          />
                        </button>
                      )}

                      {item.badge && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-1.5 text-[10px] font-semibold leading-none text-white shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {item.hasDropdown && isOpen && (
                      <div className="flex flex-col gap-1 pl-8 mt-0.5">
                        {DEMO_SUBMENUS[item.id].map((sub) => (
                          <button
                            key={sub}
                            onClick={() => handleManageSelect(item)}
                            className="flex items-center gap-3 w-full h-9 px-4 rounded-lg text-left text-[14px] font-medium text-gray-500 hover:text-white hover:bg-white/5 transition-colors duration-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SuperAdminSidebar;