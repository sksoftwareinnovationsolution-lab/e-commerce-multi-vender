import useCountUp from "./useCountUp";

const SUMMARY_STATS = [
  {
    id: "users",
    label: "Total Users",
    value: "58,765",
    color: "#3b82f6",
  },
  {
    id: "vendors",
    label: "Total Vendors",
    value: "2,345",
    color: "#8b5cf6",
  },
  {
    id: "service",
    label: "Service Providers",
    value: "5,689",
    color: "#ec4899",
  },
  {
    id: "riders",
    label: "Active Riders",
    value: "3,456",
    color: "#06b6d4",
  },
];

function SummaryStat({ stat }) {
  const numeric = Number(stat.value.replace(/\D/g, "")) || 0;
  const animated = useCountUp(numeric, { duration: 1000 });

  return (
    <li className="sa-summary__item">
      <span className="sa-summary__value" style={{ color: stat.color }}>
        {Math.round(animated).toLocaleString("en-IN")}
      </span>
      <span className="sa-summary__label">{stat.label}</span>
    </li>
  );
}

function SaPlatformSummary() {
  return (
    <article className="sa-panel sa-summary">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Platform Summary</h2>
      </div>

      <ul className="sa-summary__list">
        {SUMMARY_STATS.map((stat) => (
          <SummaryStat key={stat.id} stat={stat} />
        ))}
      </ul>
    </article>
  );
}

export default SaPlatformSummary;