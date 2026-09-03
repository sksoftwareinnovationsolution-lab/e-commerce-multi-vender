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

function SummaryStat({ stat, index }) {
  const numeric = Number(stat.value.replace(/\D/g, "")) || 0;
  const animated = useCountUp(numeric, { duration: 1000 });

  const borderClass =
    index === 0
      ? "border-b border-r border-slate-100 dark:border-slate-700"
      : index === 1
      ? "border-b border-slate-100 dark:border-slate-700 md:border-r md:border-slate-100 md:dark:border-slate-700"
      : index === 2
      ? "border-r border-slate-100 dark:border-slate-700"
      : "";

  return (
    <li
      className={`flex flex-col items-center justify-center gap-[0.3rem] p-[0.5rem_0.4rem] min-w-0 text-center ${borderClass}`}
    >
      <span className="text-[1.3rem] font-bold tracking-[-0.02em] leading-[1.15] whitespace-nowrap" style={{ color: stat.color }}>
        {Math.round(animated).toLocaleString("en-IN")}
      </span>
      <span className="text-[0.72rem] font-medium text-gray-500 dark:text-gray-400 leading-[1.25]">
        {stat.label}
      </span>
    </li>
  );
}

function SaPlatformSummary() {
  return (
    <article className="bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-[1rem_1.1rem] min-w-0 flex flex-col items-stretch">
      <div className="flex items-center justify-between gap-3 mb-[0.6rem]">
        <h2 className="text-[0.95rem] font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          Platform Summary
        </h2>
      </div>

      <ul className="flex-1 min-w-0 grid grid-cols-2 content-center md:grid-cols-4 gap-y-[0.4rem] md:gap-y-0">
        {SUMMARY_STATS.map((stat, i) => (
          <SummaryStat key={stat.id} stat={stat} index={i} />
        ))}
      </ul>
    </article>
  );
}

export default SaPlatformSummary;