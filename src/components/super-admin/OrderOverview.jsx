import useCountUp from "./useCountUp";

const STATUS = [
  { label: "Delivered", value: 7231, percent: "57.7%", color: "#22c55e" },
  { label: "Processing", value: 2543, percent: "20.3%", color: "#3b82f6" },
  { label: "Cancelled", value: 1234, percent: "9.8%", color: "#ef4444" },
  { label: "Returned", value: 1532, percent: "12.2%", color: "#f97316" },
];

const TOTAL = "12,540";
const SIZE = 200;
const STROKE = 22;
const RADIUS = (SIZE - STROKE) / 2;
const CENTER = SIZE / 2;
const CIRC = 2 * Math.PI * RADIUS;

/* Accumulate starting offsets */
function buildSegments() {
  const total = STATUS.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  return STATUS.map((d) => {
    const fraction = d.value / total;
    const start = acc / total;
    acc += d.value;
    return { ...d, start, fraction };
  });
}

const SEGMENTS = buildSegments();

/* Stroke-dasharray/dashoffset render for each segment */
function SegmentArc({ segment, progress }) {
  const { start, fraction } = segment;
  const dashLength = fraction * CIRC * progress;
  const gapLength = CIRC - dashLength;
  const offset = (1 - start) * CIRC;
  return (
    <circle
      cx={CENTER}
      cy={CENTER}
      r={RADIUS}
      fill="none"
      stroke={segment.color}
      strokeWidth={STROKE}
      strokeDasharray={`${dashLength} ${gapLength}`}
      strokeDashoffset={offset}
      strokeLinecap="butt"
      transform={`rotate(-90 ${CENTER} ${CENTER})`}
    />
  );
}

function OrderOverview() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-5 min-w-0 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          Order Overview
        </h2>
      </div>

      <div className="flex items-center gap-5 flex-1">
        <div className="relative w-[190px] max-w-[46%] aspect-square flex-shrink-0">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="w-full h-full block"
            role="img"
            aria-label="Order status breakdown"
          >
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={STROKE}
            />
            {SEGMENTS.map((seg) => (
              <SegmentArc key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-[1.35rem] font-bold text-gray-900 dark:text-gray-100 leading-[1.1] whitespace-nowrap">
              {TOTAL}
            </span>
            <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500 mt-0.5">
              Total Orders
            </span>
          </div>
        </div>

        <ul className="flex-1 min-w-0 list-none flex flex-col gap-[0.65rem]">
          {STATUS.map((d) => (
            <li key={d.label} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-[0.8rem] font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                {d.label}
              </span>
              <span className="text-[0.8rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                {d.value.toLocaleString("en-IN")}
              </span>
              <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500 text-right whitespace-nowrap min-w-[3.4rem]">
                {d.percent}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default OrderOverview;
