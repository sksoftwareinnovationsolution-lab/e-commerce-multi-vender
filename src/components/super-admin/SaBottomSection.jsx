import RecentOrders from "./RecentOrders";
import RecentRegistrations from "./RecentRegistrations";
import SystemHealth from "./SystemHealth";

function SaBottomSection() {
  return (
    <section
      className="grid grid-cols-1 gap-4 w-full mt-1 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr]"
      aria-label="Recent activity and system health"
    >
      <RecentOrders />
      <RecentRegistrations />
      <SystemHealth />
    </section>
  );
}

export default SaBottomSection;