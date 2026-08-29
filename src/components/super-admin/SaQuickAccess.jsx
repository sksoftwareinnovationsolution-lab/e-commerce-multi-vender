import {
  UserPlus,
  Store,
  Package,
  Wrench,
  Bike,
  Ticket,
  Bell,
  Settings,
} from "lucide-react";

const QUICK_ACTIONS = [
  {
    id: "add-user",
    label: "Add New User",
    icon: UserPlus,
    color: "#3b82f6",
    bg: "rgba(59, 130, 246, 0.12)",
  },
  {
    id: "add-vendor",
    label: "Add New Vendor",
    icon: Store,
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.13)",
  },
  {
    id: "add-product",
    label: "Add New Product",
    icon: Package,
    color: "#8b5cf6",
    bg: "rgba(139, 92, 246, 0.12)",
  },
  {
    id: "add-service",
    label: "Add New Service",
    icon: Wrench,
    color: "#f97316",
    bg: "rgba(249, 115, 22, 0.13)",
  },
  {
    id: "add-rider",
    label: "Add New Rider",
    icon: Bike,
    color: "#06b6d4",
    bg: "rgba(6, 182, 212, 0.12)",
  },
  {
    id: "create-coupon",
    label: "Create Coupon",
    icon: Ticket,
    color: "#ec4899",
    bg: "rgba(236, 72, 153, 0.12)",
  },
  {
    id: "send-notification",
    label: "Send Notification",
    icon: Bell,
    color: "#22c55e",
    bg: "rgba(34, 197, 94, 0.13)",
  },
  {
    id: "system-settings",
    label: "System Settings",
    icon: Settings,
    color: "#6366f1",
    bg: "rgba(99, 102, 241, 0.12)",
  },
];

function SaQuickAccess() {
  return (
    <article className="sa-panel sa-quick">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Quick Access</h2>
      </div>

      <div className="sa-quick__list">
        {QUICK_ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              type="button"
              className="sa-quick__item"
              aria-label={action.label}
            >
              <span
                className="sa-quick__icon"
                style={{ backgroundColor: action.bg, color: action.color }}
              >
                <Icon size={22} />
              </span>
              <span className="sa-quick__label">{action.label}</span>
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default SaQuickAccess;