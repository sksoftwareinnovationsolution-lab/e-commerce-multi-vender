import RecentOrders from "./RecentOrders";
import RecentRegistrations from "./RecentRegistrations";
import SystemHealth from "./SystemHealth";
import "./SaBottomSection.css";

function SaBottomSection() {
  return (
    <section className="sa-bottom" aria-label="Recent activity and system health">
      <RecentOrders />
      <RecentRegistrations />
      <SystemHealth />
    </section>
  );
}

export default SaBottomSection;