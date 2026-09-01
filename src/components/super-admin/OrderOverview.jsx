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
    <article className="sa-panel sa-order">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Order Overview</h2>
      </div>

      <div className="sa-order__body">
        <div className="sa-order__donut">
          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="sa-order__svg"
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
          <div className="sa-order__center">
            <span className="sa-order__center-value">{TOTAL}</span>
            <span className="sa-order__center-label">Total Orders</span>
          </div>
        </div>

        <ul className="sa-order__legend">
          {STATUS.map((d) => (
            <li key={d.label} className="sa-order__legend-item">
              <span
                className="sa-order__legend-dot"
                style={{ backgroundColor: d.color }}
              />
              <span className="sa-order__legend-name">{d.label}</span>
              <span className="sa-order__legend-value">
                {d.value.toLocaleString("en-IN")}
              </span>
              <span className="sa-order__legend-percent">{d.percent}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default OrderOverview;
