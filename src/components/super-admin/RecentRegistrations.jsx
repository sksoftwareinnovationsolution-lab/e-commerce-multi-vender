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
    <article className="sa-panel sa-registrations">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Recent Registrations</h2>
        <button className="sa-panel__viewall" type="button">
          <span>View All</span>
          <FiChevronRight size={13} />
        </button>
      </div>

      <ul className="sa-registrations__list">
        {REGISTRATIONS.map((reg) => {
          const Icon = reg.icon;
          return (
            <li key={`${reg.name}-${reg.role}`} className="sa-registrations__row">
              <span
                className="sa-registrations__icon"
                style={{ backgroundColor: reg.bg, color: reg.color }}
              >
                <Icon size={16} />
              </span>
              <div className="sa-registrations__info">
                <span className="sa-registrations__name">{reg.name}</span>
                <span className="sa-registrations__role">{reg.role}</span>
              </div>
              <span className="sa-registrations__date">{reg.date}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default RecentRegistrations;