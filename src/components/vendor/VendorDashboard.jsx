import VendorDashboardHeader from "./VendorDashboardHeader";
import VendorStatsCards from "./VendorStatsCards";
import VendorDashboardAnalytics from "./VendorDashboardAnalytics";
import VendorRecentBookings from "./VendorRecentBookings";
import VendorTopServices from "./VendorTopServices";
import VendorEarningsSummary from "./VendorEarningsSummary";
import VendorServiceAreaCoverage from "./VendorServiceAreaCoverage";
import VendorTodaySchedule from "./VendorTodaySchedule";
import VendorQuickActions from "./VendorQuickActions";
import "./VendorDashboard.css";

function VendorDashboard() {
  return (
    <div className="vd-dashboard">
      <VendorDashboardHeader />
      <VendorStatsCards />
      <VendorDashboardAnalytics />
      <div className="vd-grid-row">
        <VendorRecentBookings />
        <VendorTopServices />
        <VendorEarningsSummary />
      </div>
      <div className="vd-grid-row">
        <VendorServiceAreaCoverage />
        <VendorTodaySchedule />
        <VendorQuickActions />
      </div>
    </div>
  );
}

export default VendorDashboard;
