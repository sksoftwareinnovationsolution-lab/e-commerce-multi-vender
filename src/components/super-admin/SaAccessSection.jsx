import SaQuickAccess from "./SaQuickAccess";
import SaPlatformSummary from "./SaPlatformSummary";

function SaAccessSection() {
  return (
    <section
      className="grid grid-cols-1 gap-4 w-full mt-1 lg:grid-cols-[1.55fr_1fr] lg:items-stretch"
      aria-label="Quick access and platform summary"
    >
      <SaQuickAccess />
      <SaPlatformSummary />
    </section>
  );
}

export default SaAccessSection;