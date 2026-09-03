import RevenueOverview from "./RevenueOverview";
import OrderOverview from "./OrderOverview";
import TopCategories from "./TopCategories";

function SaAnalyticsSection() {
  return (
    <section
      className="grid grid-cols-1 gap-4 w-full mt-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1.1fr_1fr] min-[1500px]:grid-cols-[1.6fr_1.05fr_0.95fr]"
      aria-label="Dashboard analytics"
    >
      <RevenueOverview />
      <OrderOverview />
      <TopCategories />
    </section>
  );
}

export default SaAnalyticsSection;
