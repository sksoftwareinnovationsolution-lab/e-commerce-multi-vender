import useCountUp from "./useCountUp";

function StatCard({ icon, iconBg, title, value, trend }) {
  const isUp = trend.direction === "up";
  const numeric = Number(value.replace(/\D/g, "")) || 0;
  const prefix = value.startsWith("₹") ? "₹" : "";
  const animated = useCountUp(numeric, { duration: 1000 });

  return (
    <article className="bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-[0.875rem] min-w-0 transition-[box-shadow,transform] duration-200 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]">
      <div className="flex items-start justify-between gap-[0.625rem]">
        <div className="flex flex-col gap-[0.2rem] min-w-0">
          <h3 className="text-[0.8125rem] font-medium text-gray-500 dark:text-gray-400 leading-[1.3]">{title}</h3>
          <p className="text-[1.375rem] xl:text-[1.5rem] font-bold text-gray-900 dark:text-gray-100 leading-[1.2] whitespace-nowrap">
            {prefix}
            {Math.round(animated).toLocaleString("en-IN")}
          </p>
          <span
            className={`inline-flex items-center gap-[0.3rem] text-xs font-semibold leading-[1.2] ${
              isUp ? "text-green-600" : "text-red-600"
            }`}
          >
            <span className="text-[0.875rem] font-bold">{isUp ? "↑" : "↓"}</span>
            {trend.percent}{" "}
            <span className="font-normal text-gray-400 dark:text-gray-500">vs last week</span>
          </span>
        </div>

        <div
          className="flex-shrink-0 flex items-center justify-center w-14 xl:w-[60px] h-14 xl:h-[60px] rounded-[0.625rem] overflow-hidden"
          style={{ backgroundColor: iconBg }}
        >
          <img src={icon} alt="" className="w-[68%] h-[68%] object-contain" />
        </div>
      </div>
    </article>
  );
}

export default StatCard;
