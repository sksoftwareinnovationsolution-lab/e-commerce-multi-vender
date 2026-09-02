import { useState } from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import StatCard from "./StatCard";
import SaAnalyticsSection from "./SaAnalyticsSection";
import SaBottomSection from "./SaBottomSection";
import SaAccessSection from "./SaAccessSection";

import revenueIcon from "../../assets/images/superadmin/total-revenue-admin.png";
import ordersIcon from "../../assets/images/superadmin/total-orders-admin.png";
import usersIcon from "../../assets/images/superadmin/total-users-admin.png";
import vendorsIcon from "../../assets/images/superadmin/total-venders-admin.png";
import productsIcon from "../../assets/images/superadmin/total-products-admin.png";
import serviceIcon from "../../assets/images/superadmin/total-service-providers-admin.png";
import ridersIcon from "../../assets/images/superadmin/total-riders-admin.png";
import withdrawalsIcon from "../../assets/images/superadmin/total-withdrawls-admin.png";

const CARDS = [
  {
    id: "revenue",
    icon: revenueIcon,
    iconBg: "rgba(139, 92, 246, 0.14)",
    title: "Total Revenue",
    value: "₹28,95,320",
    trend: { direction: "up", percent: "12.5%" },
  },
  {
    id: "orders",
    icon: ordersIcon,
    iconBg: "rgba(59, 130, 246, 0.14)",
    title: "Total Orders",
    value: "12,540",
    trend: { direction: "up", percent: "8.3%" },
  },
  {
    id: "users",
    icon: usersIcon,
    iconBg: "rgba(249, 115, 22, 0.14)",
    title: "Total Users",
    value: "58,765",
    trend: { direction: "up", percent: "15.7%" },
  },
  {
    id: "vendors",
    icon: vendorsIcon,
    iconBg: "rgba(34, 197, 94, 0.14)",
    title: "Total Vendors",
    value: "2,345",
    trend: { direction: "up", percent: "10.2%" },
  },
  {
    id: "products",
    icon: productsIcon,
    iconBg: "rgba(236, 72, 153, 0.14)",
    title: "Total Products",
    value: "50,348",
    trend: { direction: "up", percent: "9.4%" },
  },
  {
    id: "service",
    icon: serviceIcon,
    iconBg: "rgba(6, 182, 212, 0.14)",
    title: "Total Service Providers",
    value: "5,689",
    trend: { direction: "up", percent: "11.6%" },
  },
  {
    id: "riders",
    icon: ridersIcon,
    iconBg: "rgba(139, 92, 246, 0.14)",
    title: "Total Riders",
    value: "3,456",
    trend: { direction: "up", percent: "7.8%" },
  },
  {
    id: "withdrawals",
    icon: withdrawalsIcon,
    iconBg: "rgba(239, 68, 68, 0.14)",
    title: "Total Withdrawals",
    value: "₹7,65,430",
    trend: { direction: "down", percent: "4.2%" },
  },
];

function SuperAdminDashboard() {
  const [range] = useState("May 24, 2025 - May 30, 2025");

  return (
    <div className="flex flex-col gap-6 w-full max-w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-start justify-between md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-[1.2]">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-[1.5] max-w-[620px]">
            Welcome back, Super Admin! Here&apos;s what&apos;s happening on your
            platform.
          </p>
        </div>

        <button
          className="inline-flex items-center gap-2 px-[0.9rem] py-[0.6rem] bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-gray-200 rounded-[0.625rem] shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer whitespace-nowrap transition-[border-color,box-shadow] duration-200 hover:border-[#c7d2fe] hover:shadow-[0_2px_8px_rgba(79,70,229,0.08)]"
          type="button"
        >
          <FiCalendar className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" size={17} />
          <span className="text-[0.8125rem] font-medium text-gray-700 dark:text-gray-200">{range}</span>
          <FiChevronDown className="text-gray-400 flex-shrink-0" size={16} />
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

      {/* Analytics section (below stat cards) */}
      <SaAnalyticsSection />

      {/* Recent activity + system health (below analytics) */}
      <SaBottomSection />

      {/* Quick access + platform summary (bottom) */}
      <SaAccessSection />
    </div>
  );
}

export default SuperAdminDashboard;
