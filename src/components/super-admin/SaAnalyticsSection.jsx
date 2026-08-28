import RevenueOverview from "./RevenueOverview";
import OrderOverview from "./OrderOverview";
import TopCategories from "./TopCategories";
import "./SaAnalyticsSection.css";

function SaAnalyticsSection() {
  return (
    <section className="sa-analytics" aria-label="Dashboard analytics">
      <RevenueOverview />
      <OrderOverview />
      <TopCategories />
    </section>
  );
}

export default SaAnalyticsSection;
