import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const RANGE_LABEL = "This Week";

/* Demo data points (values in thousands of Rs) */
const DATA = [
  { label: "May 24", value: 24 },
  { label: "May 25", value: 33 },
  { label: "May 26", value: 37 },
  { label: "May 27", value: 42 },
  { label: "May 28", value: 39 },
  { label: "May 29", value: 42 },
  { label: "May 30", value: 44 },
];

const MAX_VALUE = 50;
const WIDTH = 1000;
const HEIGHT = 360;
const PAD_LEFT = 92;
const PAD_RIGHT = 16;
const PAD_TOP = 18;
const PAD_BOTTOM = 42;

const innerW = WIDTH - PAD_LEFT - PAD_RIGHT;
const innerH = HEIGHT - PAD_TOP - PAD_BOTTOM;

function buildPoints() {
  const n = DATA.length;
  return DATA.map((d, i) => {
    const x = PAD_LEFT + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
    const y = PAD_TOP + innerH - (d.value / MAX_VALUE) * innerH;
    return { ...d, x, y };
  });
}

const POINTS = buildPoints();
const POINTS_START_X = POINTS[0].x;
const POINTS_SPAN = POINTS[POINTS.length - 1].x - POINTS[0].x;
const DRAW_DURATION = 1300;

function smoothPath(points) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

const linePath = smoothPath(POINTS);
const areaPath = `${linePath} L ${POINTS[POINTS.length - 1].x} ${
  PAD_TOP + innerH
} L ${POINTS[0].x} ${PAD_TOP + innerH} Z`;

const GRID_LINES = [50, 40, 30, 20, 10, 0];
const Y_LABELS = ["₹50K", "₹40K", "₹30K", "₹20K", "₹10K", "₹0"];

function rgbToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function RevenueOverview() {
  const lineRef = useRef(null);
  const [revLen, setRevLen] = useState(0);
  const [revDrawn, setRevDrawn] = useState(false);

  useEffect(() => {
    if (!lineRef.current) return;
    setRevLen(lineRef.current.getTotalLength());
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setRevDrawn(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="sa-panel sa-revenue">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Revenue Overview</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>{RANGE_LABEL}</span>
          <FiChevronDown size={14} />
        </button>
      </div>

      <div className="sa-revenue__chart">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className={`sa-revenue__svg ${revDrawn ? "sa-revenue__svg--drawn" : ""}`}
          role="img"
          aria-label="Revenue trend for the week"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sa-rev-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={rgbToRgba("#8b5cf6", 0.28)} />
              <stop offset="100%" stopColor={rgbToRgba("#8b5cf6", 0)} />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {GRID_LINES.map((g, idx) => {
            const y = PAD_TOP + innerH - (g / MAX_VALUE) * innerH;
            return (
              <line
                key={g}
                x1={PAD_LEFT}
                y1={y}
                x2={WIDTH - PAD_RIGHT}
                y2={y}
                stroke={idx === 0 ? "#e2e8f0" : "#eef0f4"}
                strokeWidth="1"
              />
            );
          })}

          {/* Area + line */}
          <g
            className={
              revDrawn
                ? "sa-revenue__area-reveal sa-revenue__area-reveal--done"
                : "sa-revenue__area-reveal"
            }
          >
            <path d={areaPath} fill="url(#sa-rev-fill)" />
          </g>
          <path
            ref={lineRef}
            d={linePath}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={revLen || 1}
            strokeDashoffset={revDrawn ? 0 : revLen || 1}
            className="sa-revenue__line"
          />

          {/* Points */}
          {POINTS.map((p) => (
            <circle
              key={p.label}
              className="sa-revenue__point"
              cx={p.x}
              cy={p.y}
              r="7"
              fill="#ffffff"
              stroke="#8b5cf6"
              strokeWidth="3.5"
              style={{
                transitionDelay: revLen
                  ? `${((p.x - POINTS_START_X) / POINTS_SPAN) * DRAW_DURATION}ms`
                  : "0ms",
              }}
            />
          ))}
        </svg>

        {/* X axis labels */}
        <div className="sa-revenue__xaxis">
          {POINTS.map((p) => (
            <span
              key={p.label}
              className="sa-revenue__xlabel"
              style={{ left: `${(p.x / WIDTH) * 100}%` }}
            >
              {p.label}
            </span>
          ))}
        </div>

        {/* Y axis labels */}
        <div className="sa-revenue__yaxis">
          {Y_LABELS.map((label, idx) => {
            const v = GRID_LINES[idx];
            const y = PAD_TOP + innerH - (v / MAX_VALUE) * innerH;
            return (
              <span
                key={label}
                className="sa-revenue__ylabel"
                style={{ top: `${(y / HEIGHT) * 100}%` }}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default RevenueOverview;
