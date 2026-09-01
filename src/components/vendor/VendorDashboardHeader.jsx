import { useState } from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import "./VendorDashboardHeader.css";

function VendorDashboardHeader() {
  const [range] = useState("May 24, 2025 - May 30, 2025");

  return (
    <div className="vd-header">
      <div className="vd-header__heading">
        <h1 className="vd-header__title">Dashboard</h1>
        <p className="vd-header__desc">
          Welcome back! Here&apos;s what&apos;s happening with your service
          business today.
        </p>
      </div>

      <button className="vd-header__daterange" type="button">
        <FiCalendar className="vd-header__daterange-icon" size={17} />
        <span className="vd-header__daterange-text">{range}</span>
        <FiChevronDown className="vd-header__daterange-chevron" size={16} />
      </button>
    </div>
  );
}

export default VendorDashboardHeader;