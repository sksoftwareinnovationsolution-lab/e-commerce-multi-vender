import {
  FiPlus,
  FiFileText,
  FiCalendar,
  FiDollarSign,
  FiBarChart2,
  FiTag,
  FiSettings,
} from "react-icons/fi";
import "./VendorQuickActions.css";

const actions = [
  { label: "Add Service", icon: FiPlus, color: "violet" },
  { label: "Manage Services", icon: FiFileText, color: "blue" },
  { label: "New Booking", icon: FiCalendar, color: "green" },
  { label: "My Schedule", icon: FiCalendar, color: "indigo" },
  { label: "Withdraw Money", icon: FiDollarSign, color: "emerald" },
  { label: "View Reports", icon: FiBarChart2, color: "orange" },
  { label: "Coupons", icon: FiTag, color: "pink" },
  { label: "Settings", icon: FiSettings, color: "gray" },
];

function VendorQuickActions() {
  return (
    <section className="vd-quick-actions">
      <article className="vd-quick-actions__card">
        <div className="vd-quick-actions__header">
          <h2 className="vd-quick-actions__title">
            Quick Actions
          </h2>
        </div>

        <div className="vd-quick-actions__grid">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                className="vd-quick-actions__btn"
              >
                <span
                  className={`vd-quick-actions__icon vd-quick-actions__icon--${action.color}`}
                >
                  <Icon size={18} />
                </span>
                <span className="vd-quick-actions__label">
                  {action.label}
                </span>
              </button>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default VendorQuickActions;
