import { FiMenu, FiSearch, FiBell, FiSun, FiMoon, FiChevronDown } from "react-icons/fi";
import { useTheme } from "../../context/useTheme";

function SuperAdminNavbar({ onMenuToggle }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-[72px] bg-white border-b border-gray-200 flex items-center px-4 lg:px-6 gap-4">
      {/* LEFT: Hamburger + Search */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Hamburger */}
        <button
          onClick={onMenuToggle}
          className="flex items-center justify-center w-10 h-10 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <FiMenu size={22} />
        </button>

        {/* Search bar */}
        <div className="hidden sm:flex items-center h-10 w-[220px] lg:w-[320px] bg-gray-50 border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 focus-within:border-gray-300 focus-within:ring-2 focus-within:ring-gray-100">
          <FiSearch className="flex-shrink-0 w-[18px] h-[18px] text-gray-400 ml-3" />
          <input
            className="flex-1 min-w-0 px-3 bg-transparent text-[14px] text-gray-700 placeholder-gray-400 outline-none border-none"
            type="search"
            placeholder="Search anything..."
            aria-label="Search"
          />
        </div>
      </div>

      {/* RIGHT: Theme toggle + Notifications + Profile */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        {/* Notification bell */}
        <button
          className="relative flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
          aria-label="Notifications"
        >
          <FiBell size={20} />
          <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-[18px] h-[18px] bg-red-500 text-white text-[10px] font-bold leading-none rounded-full">
            3
          </span>
        </button>

        {/* Divider */}
        <div className="hidden md:block w-px h-8 bg-gray-200 mx-1" />

        {/* Profile section */}
        <button className="flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          {/* Avatar */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-100 overflow-hidden flex items-center justify-center">
            {/* Placeholder — replace src with uploaded image later */}
            <div className="w-full h-full bg-gray-300" />
          </div>

          {/* Name + Role */}
          <div className="hidden md:flex flex-col items-start">
            <span className="text-[14px] font-semibold text-gray-800 leading-tight">
              Super Admin
            </span>
            <span className="text-[12px] text-gray-400 leading-tight">
              Super Administrator
            </span>
          </div>

          {/* Chevron */}
          <FiChevronDown
            size={16}
            className="hidden md:block text-gray-400 flex-shrink-0"
          />
        </button>
      </div>
    </header>
  );
}

export default SuperAdminNavbar;
