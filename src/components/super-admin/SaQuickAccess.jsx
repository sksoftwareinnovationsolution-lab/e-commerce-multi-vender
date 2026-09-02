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

const BORDER_CLASSES = [
  "border-b border-r lg:border-b-0",
  "border-b md:border-r lg:border-b-0",
  "border-b border-r lg:border-b-0",
  "border-b lg:border-r lg:border-b-0",
  "border-r",
  "border-b md:border-b-0 md:border-r",
  "border-r",
  "",
];

function SaQuickAccess() {
  return (
    <article className="bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-[1rem_1.1rem] min-w-0 flex flex-col items-stretch">
      <div className="flex items-center justify-between gap-3 mb-[0.6rem]">
        <h2 className="text-[0.95rem] font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          Quick Access
        </h2>
      </div>

      <div className="flex-1 min-w-0 grid grid-cols-2 content-center md:grid-cols-4 lg:grid-cols-8">
        {QUICK_ACTIONS.map((action, i) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              type="button"
              className={`group flex flex-col items-center justify-center gap-[0.55rem] p-[0.6rem_0.4rem] rounded-lg cursor-pointer font-inherit min-w-0 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-[rgba(148,163,184,0.06)] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-[#c7d2fe] focus-visible:outline-offset-[-2px] border-slate-100 dark:border-slate-700 ${BORDER_CLASSES[i]}`}
              aria-label={action.label}
            >
              <span
                className="flex-shrink-0 flex items-center justify-center w-[46px] h-[46px] rounded-xl transition-[transform,box-shadow] duration-200 group-hover:-translate-y-[2px]"
                style={{ backgroundColor: action.bg, color: action.color }}
              >
                <Icon size={22} />
              </span>
              <span className="line-clamp-2 text-[0.72rem] font-medium text-gray-600 dark:text-slate-300 leading-[1.25] text-center min-h-[2.5em]">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default SaQuickAccess;