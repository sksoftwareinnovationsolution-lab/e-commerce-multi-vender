import { FiChevronRight, FiUser, FiShoppingBag, FiTool, FiTruck } from "react-icons/fi";

const REGISTRATIONS = [
  {
    name: "Ramesh Kumar",
    role: "User",
    date: "May 30, 2025 10:10 AM",
    icon: FiUser,
    bg: "rgba(249, 115, 22, 0.14)",
    color: "#f97316",
  },
  {
    name: "Tech World Store",
    role: "Vendor",
    date: "May 30, 2025 09:15 AM",
    icon: FiShoppingBag,
    bg: "rgba(139, 92, 246, 0.14)",
    color: "#8b5cf6",
  },
  {
    name: "Amit Yadav",
    role: "Service Provider",
    date: "May 29, 2025 08:40 AM",
    icon: FiTool,
    bg: "rgba(59, 130, 246, 0.14)",
    color: "#3b82f6",
  },
  {
    name: "Sandeep Rider",
    role: "Rider",
    date: "May 29, 2025 07:25 AM",
    icon: FiTruck,
    bg: "rgba(34, 197, 94, 0.14)",
    color: "#22c55e",
  },
  {
    name: "Grocery Mart",
    role: "Vendor",
    date: "May 29, 2025 06:10 AM",
    icon: FiShoppingBag,
    bg: "rgba(139, 92, 246, 0.14)",
    color: "#8b5cf6",
  },
];

function RecentRegistrations() {
  return (
    <article className="bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-[0.9rem_1rem] min-w-0 flex flex-col items-stretch">
      <div className="flex items-center justify-between gap-3 mb-[0.6rem]">
        <h2 className="text-[0.95rem] font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          Recent Registrations
        </h2>
        <button className="group inline-flex items-center gap-1 bg-none border-none p-[0.3rem_0.5rem] text-[0.8rem] font-semibold text-[#8b5cf6] cursor-pointer rounded-lg whitespace-nowrap transition-[background-color,color] duration-200 hover:bg-[rgba(139,92,246,0.08)] hover:text-[#7c3aed] dark:text-[#a78bfa] dark:hover:bg-[rgba(139,92,246,0.15)] dark:hover:text-[#c4b5fd]" type="button">
          <span>View All</span>
          <FiChevronRight size={13} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-[2px]" />
        </button>
      </div>

      <ul className="list-none flex flex-col min-w-0">
        {REGISTRATIONS.map((reg, i) => {
          const Icon = reg.icon;
          return (
            <li
              key={`${reg.name}-${reg.role}`}
              className={`flex items-center gap-3 py-[0.4rem] min-w-0 ${
                i > 0 ? "border-t border-[#f1f5f9] dark:border-[#334155]" : ""
              }`}
            >
              <span
                className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[0.6rem]"
                style={{ backgroundColor: reg.bg, color: reg.color }}
              >
                <Icon size={16} />
              </span>
              <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
                <span className="text-[0.85rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">
                  {reg.name}
                </span>
                <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500">
                  {reg.role}
                </span>
              </div>
              <span className="flex-shrink-0 text-[0.68rem] font-medium text-gray-400 dark:text-slate-500 text-right whitespace-nowrap">
                {reg.date}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default RecentRegistrations;