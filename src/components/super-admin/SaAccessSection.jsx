import SaQuickAccess from "./SaQuickAccess";
import SaPlatformSummary from "./SaPlatformSummary";
import "./SaAccessSection.css";

function SaAccessSection() {
  return (
    <section
      className="sa-access"
      aria-label="Quick access and platform summary"
    >
      <SaQuickAccess />
      <SaPlatformSummary />
    </section>
  );
}

export default SaAccessSection;