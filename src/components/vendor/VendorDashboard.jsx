import VendorDashboardHeader from "./VendorDashboardHeader";
import VendorStatsCards from "./VendorStatsCards";
import VendorDashboardAnalytics from "./VendorDashboardAnalytics";
import "./VendorDashboard.css";

function VendorDashboard() {
  return (
    <div className="vd-dashboard">
      <VendorDashboardHeader />
      <VendorStatsCards />
      <VendorDashboardAnalytics />
    </div>
  );
}

export default VendorDashboard;
