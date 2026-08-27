import { useState } from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import StatCard from "./StatCard";
import "./SuperAdminDashboard.css";

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
    <div className="sa-dashboard">
      {/* Header */}
      <div className="sa-dashboard__header">
        <div className="sa-dashboard__heading">
          <h1 className="sa-dashboard__title">Dashboard</h1>
          <p className="sa-dashboard__desc">
            Welcome back, Super Admin! Here&apos;s what&apos;s happening on your
            platform.
          </p>
        </div>

        <button className="sa-dashboard__daterange" type="button">
          <FiCalendar className="sa-dashboard__daterange-icon" size={17} />
          <span className="sa-dashboard__daterange-text">{range}</span>
          <FiChevronDown className="sa-dashboard__daterange-chevron" size={16} />
        </button>
      </div>

      {/* Stat cards */}
      <div className="sa-dashboard__grid">
        {CARDS.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
