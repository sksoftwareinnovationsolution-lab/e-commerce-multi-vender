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
    <article className="md:col-span-2 lg:col-span-1 bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-5 min-w-0 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          Revenue Overview
        </h2>
        <button className="inline-flex items-center gap-[0.35rem] px-[0.7rem] py-[0.4rem] bg-gray-50 dark:bg-[#0f172a] border dark:border-[#334155] border-gray-200 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer whitespace-nowrap transition-[border-color,background-color] duration-200 hover:border-[#c7d2fe] hover:text-indigo-600 dark:hover:text-[#a5b4fc]" type="button">
          <span>{RANGE_LABEL}</span>
          <FiChevronDown size={14} className="flex-shrink-0 text-gray-400" />
        </button>
      </div>

      <div className="relative w-full">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="w-full h-auto aspect-[1000/360] block overflow-visible"
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
              "[transform-box:fill-box] [transform-origin:left_center] [transition:transform_1300ms_cubic-bezier(0.22,1,0.36,1)] motion-reduce:[transition:none] " +
              (revDrawn ? "[transform:scaleX(1)]" : "[transform:scaleX(0)]")
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
            className="[transition:stroke-dashoffset_1300ms_cubic-bezier(0.22,1,0.36,1)] motion-reduce:[transition:none]"
          />

          {/* Points */}
          {POINTS.map((p) => (
            <circle
              key={p.label}
              className={
                (revDrawn ? "opacity-100 " : "opacity-0 ") +
                "[transition:opacity_260ms_ease] motion-reduce:opacity-100 motion-reduce:[transition:none]"
              }
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
        <div className="absolute left-0 right-0 bottom-0 h-[42px] pointer-events-none">
          {POINTS.map((p) => (
            <span
              key={p.label}
              className="absolute bottom-1.5 -translate-x-1/2 text-[0.7rem] text-gray-400 dark:text-slate-500 whitespace-nowrap"
              style={{ left: `${(p.x / WIDTH) * 100}%` }}
            >
              {p.label}
            </span>
          ))}
        </div>

        {/* Y axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-[9.2%] pointer-events-none">
          {Y_LABELS.map((label, idx) => {
            const v = GRID_LINES[idx];
            const y = PAD_TOP + innerH - (v / MAX_VALUE) * innerH;
            return (
              <span
                key={label}
                className="absolute right-1.5 -translate-y-1/2 text-[0.7rem] text-gray-400 dark:text-slate-500 whitespace-nowrap"
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
