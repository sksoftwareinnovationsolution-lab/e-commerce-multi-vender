import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiClock, FiFileText } from "react-icons/fi";
import superAdminLogo from "../../assets/images/superadmin/super-admin-logo.png";

const MENU_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: FiHome, path: "/super-admin" },
  { id: "analytics", label: "Analytics", icon: FiClock, path: "/super-admin/analytics" },
  { id: "reports", label: "Reports", icon: FiFileText, path: "/super-admin/reports" },
];

function SuperAdminSidebar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const [activeId, setActiveId] = useState("dashboard");
  const listRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });

  const handleSelect = (item) => {
    setActiveId(item.id);
    if (item.path === "/super-admin") {
      navigate(item.path);
    }
    if (window.innerWidth < 1024) onClose?.();
  };

  useEffect(() => {
    const list = listRef.current;
    const el = itemRefs.current[activeId];
    if (list && el) {
      setIndicator({
        top: el.offsetTop - list.offsetTop,
        height: el.offsetHeight,
      });
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
        <div className="flex items-center justify-center px-6 py-5 flex-shrink-0">
          <img
            src={superAdminLogo}
            alt="Super Admin Logo"
            className="h-[72px] w-auto object-contain"
          />
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto px-4 pb-6 flex flex-col gap-6">
          {/* Primary Dashboard button */}
          <button
            onClick={() => handleSelect(MENU_ITEMS[0])}
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
          <div className="flex flex-col gap-2">
            <span className="px-2 text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Overview
            </span>

            {/* Sliding nav list */}
            <div ref={listRef} className="relative flex flex-col gap-1">
              {/* Sliding active highlight */}
              <span
                className="absolute left-0 right-0 rounded-lg bg-gradient-to-r from-blue-500/25 to-purple-500/25 border border-blue-400/40"
                style={{
                  top: indicator.top,
                  height: indicator.height,
                  transition: "top 0.3s ease, height 0.3s ease",
                }}
              />

              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    onClick={() => handleSelect(item)}
                    className={`
                      relative flex items-center gap-3 w-full h-11 px-4 rounded-lg text-left z-10
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
        </div>
      </aside>
    </>
  );
}

export default SuperAdminSidebar;
