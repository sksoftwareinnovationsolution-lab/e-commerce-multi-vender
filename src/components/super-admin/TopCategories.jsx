import {
  FiChevronDown,
  FiMonitor,
  FiShoppingBag,
  FiHome,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

const RANGE_LABEL = "This Week";

const CATEGORIES = [
  {
    name: "Electronics",
    orders: "2,560 Orders",
    percent: "20.2%",
    icon: FiMonitor,
    bg: "rgba(139, 92, 246, 0.12)",
    color: "#8b5cf6",
  },
  {
    name: "Fashion",
    orders: "2,270 Orders",
    percent: "17.6%",
    icon: FiShoppingBag,
    bg: "rgba(249, 115, 22, 0.14)",
    color: "#f97316",
  },
  {
    name: "Home & Kitchen",
    orders: "1,985 Orders",
    percent: "15.8%",
    icon: FiHome,
    bg: "rgba(236, 72, 153, 0.12)",
    color: "#ec4899",
  },
  {
    name: "Beauty",
    orders: "1,520 Orders",
    percent: "12.1%",
    icon: FiHeart,
    bg: "rgba(59, 130, 246, 0.12)",
    color: "#3b82f6",
  },
  {
    name: "Grocery",
    orders: "1,460 Orders",
    percent: "9.1%",
    icon: FiShoppingCart,
    bg: "rgba(34, 197, 94, 0.14)",
    color: "#22c55e",
  },
];

function TopCategories() {
  return (
    <article className="bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-5 min-w-0 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          Top Categories
        </h2>
        <button className="inline-flex items-center gap-[0.35rem] px-[0.7rem] py-[0.4rem] bg-gray-50 dark:bg-[#0f172a] border dark:border-[#334155] border-gray-200 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer whitespace-nowrap transition-[border-color,background-color] duration-200 hover:border-[#c7d2fe] hover:text-indigo-600 dark:hover:text-[#a5b4fc]" type="button">
          <span>{RANGE_LABEL}</span>
          <FiChevronDown size={14} className="flex-shrink-0 text-gray-400" />
        </button>
      </div>

      <ul className="list-none flex flex-col">
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <li
              key={cat.name}
              className={`flex items-center gap-3 py-[0.62rem] ${
                i > 0 ? "border-t border-[#f1f5f9] dark:border-[#334155]" : ""
              }`}
            >
              <span
                className="flex-shrink-0 flex items-center justify-center w-[38px] h-[38px] rounded-[0.6rem]"
                style={{ backgroundColor: cat.bg, color: cat.color }}
              >
                <Icon size={17} />
              </span>
              <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
                <span className="text-[0.85rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">
                  {cat.name}
                </span>
                <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500">
                  {cat.orders}
                </span>
              </div>
              <span className="text-[0.85rem] font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                {cat.percent}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default TopCategories;
