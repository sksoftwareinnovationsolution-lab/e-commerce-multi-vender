import { useEffect, useRef, useState } from "react";
import { FiCalendar, FiChevronDown, FiFilter, FiZap } from "react-icons/fi";
import useCountUp from "./useCountUp";
import "./SuperAdminAnalytics.css";

import revenueIcon from "../../assets/images/superadmin/total-revenue-admin.png";
import ordersIcon from "../../assets/images/superadmin/total-orders-admin.png";
import usersIcon from "../../assets/images/superadmin/total-users-admin.png";
import vendorsIcon from "../../assets/images/superadmin/total-venders-admin.png";
import serviceIcon from "../../assets/images/superadmin/total-service-providers-admin.png";
import ridersIcon from "../../assets/images/superadmin/total-riders-admin.png";

const RANGE_LABEL = "May 24, 2025 - May 30, 2025";

const PERIODS = [
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "This Year",
  "Custom",
];

function rgbToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ---------------- KPI mini sparkline ---------------- */

function MiniSpark({ color, data }) {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  const W = 120;
  const H = 34;
  const pad = 4;
  const innerW = W - pad * 2;
  const innerH = H - pad * 2;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => ({
    x: pad + (i / (data.length - 1)) * innerW,
    y: pad + innerH - ((v - min) / range) * innerH,
  }));

  let line = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[Math.min(points.length - 1, i + 2)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    line += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  const area = `${line} L ${points[points.length - 1].x} ${pad + innerH} L ${points[0].x} ${pad + innerH} Z`;

  useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setDrawn(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={ref}
      className={`sa-analytics__mini ${drawn ? "sa-analytics__mini--drawn" : ""}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sa-mini-fill-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={rgbToRgba(color, 0.25)} />
          <stop offset="100%" stopColor={rgbToRgba(color, 0)} />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#sa-mini-fill-${color.replace("#", "")})`} />
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((pt, i) => (
        <circle
          key={i}
          cx={pt.x}
          cy={pt.y}
          r="1.8"
          fill="#fff"
          stroke={color}
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}

const CARDS = [
  {
    id: "revenue",
    icon: revenueIcon,
    iconBg: "rgba(139, 92, 246, 0.14)",
    title: "Total Revenue",
    value: "₹28,95,320",
    trend: { direction: "up", percent: "12.5%" },
    color: "#8b5cf6",
    spark: [20, 24, 22, 28, 30, 33, 38],
  },
  {
    id: "orders",
    icon: ordersIcon,
    iconBg: "rgba(59, 130, 246, 0.14)",
    title: "Total Orders",
    value: "12,540",
    trend: { direction: "up", percent: "8.3%" },
    color: "#3b82f6",
    spark: [10, 12, 11, 14, 13, 16, 17],
  },
  {
    id: "users",
    icon: usersIcon,
    iconBg: "rgba(249, 115, 22, 0.14)",
    title: "Total Users",
    value: "58,765",
    trend: { direction: "up", percent: "15.7%" },
    color: "#f97316",
    spark: [8, 9, 11, 10, 13, 14, 16],
  },
  {
    id: "vendors",
    icon: vendorsIcon,
    iconBg: "rgba(34, 197, 94, 0.14)",
    title: "Total Vendors",
    value: "2,345",
    trend: { direction: "up", percent: "10.2%" },
    color: "#22c55e",
    spark: [6, 7, 6, 8, 9, 9, 11],
  },
  {
    id: "service",
    icon: serviceIcon,
    iconBg: "rgba(6, 182, 212, 0.14)",
    title: "Total Service Providers",
    value: "5,689",
    trend: { direction: "up", percent: "11.8%" },
    color: "#06b6d4",
    spark: [5, 6, 6, 7, 7, 8, 9],
  },
  {
    id: "riders",
    icon: ridersIcon,
    iconBg: "rgba(139, 92, 246, 0.14)",
    title: "Total Riders",
    value: "3,456",
    trend: { direction: "up", percent: "7.8%" },
    color: "#8b5cf6",
    spark: [4, 4, 5, 5, 6, 6, 7],
  },
];

function KpiCard({ card }) {
  const isUp = card.trend.direction === "up";
  const numeric = Number(card.value.replace(/\D/g, "")) || 0;
  const prefix = card.value.startsWith("₹") ? "₹" : "";
  const animated = useCountUp(numeric, { duration: 1000 });

  return (
    <article className="sa-stat-card">
      <div className="sa-stat-card__body">
        <div className="sa-stat-card__info">
          <h3 className="sa-stat-card__title">{card.title}</h3>
          <p className="sa-stat-card__value">
            {prefix}
            {Math.round(animated).toLocaleString("en-IN")}
          </p>
          <span
            className={`sa-stat-card__trend ${
              isUp ? "sa-stat-card__trend--up" : "sa-stat-card__trend--down"
            }`}
          >
            <span className="sa-stat-card__arrow">{isUp ? "↑" : "↓"}</span>
            {card.trend.percent}{" "}
            <span className="sa-stat-card__trend-label">vs last week</span>
          </span>
        </div>

        <div className="sa-stat-card__icon" style={{ backgroundColor: card.iconBg }}>
          <img src={card.icon} alt="" className="sa-stat-card__icon-img" />
        </div>
      </div>

      <MiniSpark color={card.color} data={card.spark} />
    </article>
  );
}

/* ---------------- Shared chart utilities ---------------- */

function buildSmoothPoints(data, maxVal, w, h, pl, pr, pt, pb) {
  const iw = w - pl - pr;
  const ih = h - pt - pb;
  const n = data.length;
  return data.map((d, i) => ({
    ...d,
    x: pl + (n === 1 ? iw / 2 : (i / (n - 1)) * iw),
    y: pt + ih - (d.value / maxVal) * ih,
  }));
}

function buildSmoothPath(points) {
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

/* ---------------- Revenue Overview ---------------- */

const REV_DATA = [
  { label: "May 24", value: 20 },
  { label: "May 25", value: 28 },
  { label: "May 26", value: 33 },
  { label: "May 27", value: 30 },
  { label: "May 28", value: 37 },
  { label: "May 29", value: 39 },
  { label: "May 30", value: 42 },
];

const REV_MAX = 50;
const REV_W = 600;
const REV_H = 220;
const REV_PL = 56;
const REV_PR = 12;
const REV_PT = 14;
const REV_PB = 34;
const REV_IW = REV_W - REV_PL - REV_PR;
const REV_IH = REV_H - REV_PT - REV_PB;
const REV_GRID = [50, 40, 30, 20, 10, 0];
const REV_YLABELS = ["₹50K", "₹40K", "₹30K", "₹20K", "₹10K", "₹0"];

function RevenueOverview() {
  const lineRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [trendLen, setTrendLen] = useState(0);

  const points = buildSmoothPoints(REV_DATA, REV_MAX, REV_W, REV_H, REV_PL, REV_PR, REV_PT, REV_PB);
  const linePath = buildSmoothPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${REV_PT + REV_IH} L ${points[0].x} ${REV_PT + REV_IH} Z`;
  const startX = points[0].x;
  const spanX = points[points.length - 1].x - startX;

  useEffect(() => {
    if (!lineRef.current) return;
    setTrendLen(lineRef.current.getTotalLength());
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setDrawn(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Revenue Overview</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-analytics__chart-wrap">
        <svg
          viewBox={`0 0 ${REV_W} ${REV_H}`}
          className={`sa-analytics__line-svg ${drawn ? "sa-analytics__svg--drawn" : ""}`}
          role="img"
          aria-label="Revenue overview for the week"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sa-rev-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={rgbToRgba("#8b5cf6", 0.28)} />
              <stop offset="100%" stopColor={rgbToRgba("#8b5cf6", 0)} />
            </linearGradient>
          </defs>
          {REV_GRID.map((g, idx) => {
            const y = REV_PT + REV_IH - (g / REV_MAX) * REV_IH;
            return (
              <line
                key={g}
                x1={REV_PL}
                y1={y}
                x2={REV_W - REV_PR}
                y2={y}
                stroke={idx === 0 ? "#e2e8f0" : "#eef0f4"}
                strokeWidth="1"
              />
            );
          })}
          <g className={drawn ? "sa-analytics__area-reveal sa-analytics__area-reveal--done" : "sa-analytics__area-reveal"}>
            <path d={areaPath} fill="url(#sa-rev-fill)" />
          </g>
          <path
            ref={lineRef}
            d={linePath}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={trendLen || 1}
            strokeDashoffset={drawn ? 0 : trendLen || 1}
            className="sa-analytics__line-draw"
          />
          {points.map((p) => (
            <circle
              key={p.label}
              className="sa-analytics__data-point"
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#ffffff"
              stroke="#8b5cf6"
              strokeWidth="2.5"
              style={{
                transitionDelay: trendLen
                  ? `${((p.x - startX) / spanX) * 1300}ms`
                  : "0ms",
              }}
            />
          ))}
        </svg>
        <div className="sa-analytics__xaxis">
          {points.map((p) => (
            <span
              key={p.label}
              className="sa-analytics__xlabel"
              style={{ left: `${(p.x / REV_W) * 100}%` }}
            >
              {p.label}
            </span>
          ))}
        </div>
        <div className="sa-analytics__yaxis">
          {REV_YLABELS.map((label, idx) => {
            const v = REV_GRID[idx];
            const y = REV_PT + REV_IH - (v / REV_MAX) * REV_IH;
            return (
              <span
                key={label}
                className="sa-analytics__ylabel"
                style={{ top: `${(y / REV_H) * 100}%` }}
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

/* ---------------- Order Overview ---------------- */

const ORD_STATUS = [
  { label: "Delivered", value: 7231, percent: "57.7%", color: "#22c55e" },
  { label: "Processing", value: 2543, percent: "20.3%", color: "#3b82f6" },
  { label: "Cancelled", value: 1254, percent: "10.0%", color: "#ef4444" },
  { label: "Returned", value: 1532, percent: "12.2%", color: "#f97316" },
];

const ORD_TOTAL = "12,540";
const ORD_SIZE = 180;
const ORD_STROKE = 20;
const ORD_RADIUS = (ORD_SIZE - ORD_STROKE) / 2;
const ORD_CENTER = ORD_SIZE / 2;
const ORD_CIRC = 2 * Math.PI * ORD_RADIUS;

function buildOrdSegments() {
  const total = ORD_STATUS.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  return ORD_STATUS.map((d) => {
    const start = acc / total;
    acc += d.value;
    const fraction = d.value / total;
    return { ...d, start, fraction };
  });
}

const ORD_SEGMENTS = buildOrdSegments();

function OrdSegmentArc({ segment, progress }) {
  const { start, fraction } = segment;
  const dashLength = fraction * ORD_CIRC * progress;
  const gapLength = ORD_CIRC - dashLength;
  const offset = (1 - start) * ORD_CIRC;
  return (
    <circle
      cx={ORD_CENTER}
      cy={ORD_CENTER}
      r={ORD_RADIUS}
      fill="none"
      stroke={segment.color}
      strokeWidth={ORD_STROKE}
      strokeDasharray={`${dashLength} ${gapLength}`}
      strokeDashoffset={offset}
      strokeLinecap="butt"
      transform={`rotate(-90 ${ORD_CENTER} ${ORD_CENTER})`}
    />
  );
}

function OrderOverview() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Order Overview</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-analytics__order-body">
        <div className="sa-analytics__donut">
          <svg
            viewBox={`0 0 ${ORD_SIZE} ${ORD_SIZE}`}
            className="sa-analytics__donut-svg"
            role="img"
            aria-label="Order status breakdown"
          >
            <circle
              cx={ORD_CENTER}
              cy={ORD_CENTER}
              r={ORD_RADIUS}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={ORD_STROKE}
            />
            {ORD_SEGMENTS.map((seg) => (
              <OrdSegmentArc key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
          <div className="sa-analytics__center">
            <span className="sa-analytics__center-value">{ORD_TOTAL}</span>
            <span className="sa-analytics__center-label">Total Orders</span>
          </div>
        </div>
        <ul className="sa-analytics__legend">
          {ORD_STATUS.map((d) => (
            <li key={d.label} className="sa-analytics__legend-item">
              <span className="sa-analytics__legend-dot" style={{ backgroundColor: d.color }} />
              <span className="sa-analytics__legend-name">{d.label}</span>
              <span className="sa-analytics__legend-value">
                {d.value.toLocaleString("en-IN")}
              </span>
              <span className="sa-analytics__legend-percent">{d.percent}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ---------------- User Growth ---------------- */

const UG_DATA = [
  { label: "May 24", value: 3 },
  { label: "May 25", value: 6 },
  { label: "May 26", value: 7 },
  { label: "May 27", value: 8.5 },
  { label: "May 28", value: 8 },
  { label: "May 29", value: 9.5 },
  { label: "May 30", value: 10 },
];

const UG_MAX = 12;
const UG_W = 600;
const UG_H = 220;
const UG_PL = 42;
const UG_PR = 12;
const UG_PT = 14;
const UG_PB = 34;
const UG_IW = UG_W - UG_PL - UG_PR;
const UG_IH = UG_H - UG_PT - UG_PB;
const UG_GRID = [12, 9, 6, 3, 0];
const UG_YLABELS = ["12K", "9K", "6K", "3K", "0"];

function UserGrowth() {
  const lineRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [trendLen, setTrendLen] = useState(0);

  const points = buildSmoothPoints(UG_DATA, UG_MAX, UG_W, UG_H, UG_PL, UG_PR, UG_PT, UG_PB);
  const linePath = buildSmoothPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${UG_PT + UG_IH} L ${points[0].x} ${UG_PT + UG_IH} Z`;
  const startX = points[0].x;
  const spanX = points[points.length - 1].x - startX;

  useEffect(() => {
    if (!lineRef.current) return;
    setTrendLen(lineRef.current.getTotalLength());
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setDrawn(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">User Growth</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-analytics__chart-wrap">
        <svg
          viewBox={`0 0 ${UG_W} ${UG_H}`}
          className={`sa-analytics__line-svg ${drawn ? "sa-analytics__svg--drawn" : ""}`}
          role="img"
          aria-label="User growth for the week"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sa-ug-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={rgbToRgba("#8b5cf6", 0.28)} />
              <stop offset="100%" stopColor={rgbToRgba("#8b5cf6", 0)} />
            </linearGradient>
          </defs>
          {UG_GRID.map((g, idx) => {
            const y = UG_PT + UG_IH - (g / UG_MAX) * UG_IH;
            return (
              <line
                key={g}
                x1={UG_PL}
                y1={y}
                x2={UG_W - UG_PR}
                y2={y}
                stroke={idx === 0 ? "#e2e8f0" : "#eef0f4"}
                strokeWidth="1"
              />
            );
          })}
          <g className={drawn ? "sa-analytics__area-reveal sa-analytics__area-reveal--done" : "sa-analytics__area-reveal"}>
            <path d={areaPath} fill="url(#sa-ug-fill)" />
          </g>
          <path
            ref={lineRef}
            d={linePath}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={trendLen || 1}
            strokeDashoffset={drawn ? 0 : trendLen || 1}
            className="sa-analytics__line-draw"
          />
          {points.map((p) => (
            <circle
              key={p.label}
              className="sa-analytics__data-point"
              cx={p.x}
              cy={p.y}
              r="5"
              fill="#ffffff"
              stroke="#8b5cf6"
              strokeWidth="2.5"
              style={{
                transitionDelay: trendLen
                  ? `${((p.x - startX) / spanX) * 1300}ms`
                  : "0ms",
              }}
            />
          ))}
        </svg>
        <div className="sa-analytics__xaxis">
          {points.map((p) => (
            <span
              key={p.label}
              className="sa-analytics__xlabel"
              style={{ left: `${(p.x / UG_W) * 100}%` }}
            >
              {p.label}
            </span>
          ))}
        </div>
        <div className="sa-analytics__yaxis">
          {UG_YLABELS.map((label, idx) => {
            const v = UG_GRID[idx];
            const y = UG_PT + UG_IH - (v / UG_MAX) * UG_IH;
            return (
              <span
                key={label}
                className="sa-analytics__ylabel"
                style={{ top: `${(y / UG_H) * 100}%` }}
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

/* ---------------- Top Categories ---------------- */

const TC_DATA = [
  { name: "Electronics", orders: "2,540 Orders", percent: "20.2%", color: "#8b5cf6", initials: "E" },
  { name: "Fashion", orders: "2,120 Orders", percent: "17.6%", color: "#ec4899", initials: "F" },
  { name: "Home & Kitchen", orders: "1,950 Orders", percent: "15.5%", color: "#3b82f6", initials: "H" },
  { name: "Beauty", orders: "1,530 Orders", percent: "12.1%", color: "#f97316", initials: "B" },
  { name: "Grocery", orders: "1,440 Orders", percent: "9.1%", color: "#22c55e", initials: "G" },
];

function TopCategories() {
  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Top Categories</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-analytics__cat-list">
        {TC_DATA.map((cat, i) => (
          <div
            key={cat.name}
            className="sa-analytics__cat-row"
            style={i < TC_DATA.length - 1 ? { borderBottom: "1px solid #f1f5f9" } : undefined}
          >
            <div className="sa-analytics__cat-icon" style={{ backgroundColor: rgbToRgba(cat.color, 0.14), color: cat.color }}>
              <span>{cat.initials}</span>
            </div>
            <div className="sa-analytics__cat-info">
              <span className="sa-analytics__cat-name">{cat.name}</span>
              <span className="sa-analytics__cat-orders">{cat.orders}</span>
            </div>
            <span className="sa-analytics__cat-percent">{cat.percent}</span>
          </div>
        ))}
      </div>
      <div className="sa-analytics__card-footer">
        <button className="sa-analytics__card-footer-link" type="button">View All Categories</button>
      </div>
    </article>
  );
}

/* ---------------- Sales by Channel ---------------- */

const SC_DATA = [
  { label: "Web", value: "₹18,40,320", percent: "63.5%", color: "#22C55E" },
  { label: "Mobile App", value: "₹8,75,430", percent: "30.2%", color: "#2563EB" },
  { label: "Vendor Panel", value: "₹1,25,250", percent: "4.3%", color: "#EF4444" },
  { label: "Other", value: "₹54,320", percent: "1.9%", color: "#7C3AED" },
];

const SC_TOTAL = "₹28,95,320";
const SC_SIZE = 180;
const SC_STROKE = 20;
const SC_RADIUS = (SC_SIZE - SC_STROKE) / 2;
const SC_CENTER = SC_SIZE / 2;
const SC_CIRC = 2 * Math.PI * SC_RADIUS;

function buildScSegments() {
  const total = SC_DATA.reduce((s, d) => s + Number(d.percent), 0);
  let acc = 0;
  return SC_DATA.map((d) => {
    const start = acc / total;
    const fraction = Number(d.percent) / total;
    acc += Number(d.percent);
    return { ...d, start, fraction };
  });
}

const SC_SEGMENTS = buildScSegments();

function ScSegmentArc({ segment, progress }) {
  const { start, fraction } = segment;
  const dashLength = fraction * SC_CIRC * progress;
  const gapLength = SC_CIRC - dashLength;
  const offset = (1 - start) * SC_CIRC;
  return (
    <circle
      cx={SC_CENTER}
      cy={SC_CENTER}
      r={SC_RADIUS}
      fill="none"
      stroke={segment.color}
      strokeWidth={SC_STROKE}
      strokeDasharray={`${dashLength} ${gapLength}`}
      strokeDashoffset={offset}
      strokeLinecap="butt"
      transform={`rotate(-90 ${SC_CENTER} ${SC_CENTER})`}
    />
  );
}

function SalesByChannel() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Sales by Channel</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-analytics__channel-body">
        <div className="sa-analytics__donut">
          <svg
            viewBox={`0 0 ${SC_SIZE} ${SC_SIZE}`}
            className="sa-analytics__donut-svg"
            role="img"
            aria-label="Sales by channel breakdown"
          >
            <circle
              cx={SC_CENTER}
              cy={SC_CENTER}
              r={SC_RADIUS}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={SC_STROKE}
            />
            {SC_SEGMENTS.map((seg) => (
              <ScSegmentArc key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
          <div className="sa-analytics__center">
            <span className="sa-analytics__center-value">{SC_TOTAL}</span>
            <span className="sa-analytics__center-label">Total Revenue</span>
          </div>
        </div>
        <ul className="sa-analytics__legend">
          {SC_DATA.map((d) => (
            <li key={d.label} className="sa-analytics__legend-item">
              <span className="sa-analytics__legend-dot" style={{ backgroundColor: d.color }} />
              <span className="sa-analytics__legend-name">{d.label}</span>
              <span className="sa-analytics__legend-value">{d.value}</span>
              <span className="sa-analytics__legend-percent">{d.percent}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ---------------- Top Vendors by Sales ---------------- */

const TV_DATA = [
  { name: "Tech World", sales: "₹2,45,320", growth: "12.5%", color: "#8b5cf6", initials: "TW" },
  { name: "Fashion Hub", sales: "₹1,85,640", growth: "8.3%", color: "#3b82f6", initials: "FH" },
  { name: "Grocery Mart", sales: "₹1,45,230", growth: "15.7%", color: "#22c55e", initials: "GM" },
  { name: "Home Store", sales: "₹1,15,220", growth: "10.2%", color: "#f97316", initials: "HS" },
  { name: "Beauty Zone", sales: "₹95,420", growth: "7.6%", color: "#ec4899", initials: "BZ" },
];

function TopVendorsBySales() {
  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Top Vendors by Sales</h2>
        <button className="sa-analytics__view-all-btn" type="button">View All</button>
      </div>
      <div className="sa-analytics__vendor-list">
        {TV_DATA.map((vendor, i) => (
          <div
            key={vendor.name}
            className="sa-analytics__vendor-row"
            style={i < TV_DATA.length - 1 ? { borderBottom: "1px solid #f1f5f9" } : undefined}
          >
            <div className="sa-analytics__vendor-avatar" style={{ backgroundColor: rgbToRgba(vendor.color, 0.14), color: vendor.color }}>
              <span>{vendor.initials}</span>
            </div>
            <div className="sa-analytics__vendor-info">
              <span className="sa-analytics__vendor-name">{vendor.name}</span>
              <span className="sa-analytics__vendor-sales">{vendor.sales}</span>
            </div>
            <span className="sa-analytics__vendor-growth">
              ↑ {vendor.growth}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

/* ---------------- Top Service Providers ---------------- */

const SP_DATA = [
  { name: "Repair Services", bookings: "1,240 Bookings", rating: "4.8", color: "#8b5cf6", initials: "RS" },
  { name: "Cleaning Services", bookings: "1,120 Bookings", rating: "4.6", color: "#3b82f6", initials: "CS" },
  { name: "Home Services", bookings: "980 Bookings", rating: "4.7", color: "#22c55e", initials: "HS" },
  { name: "Beauty Services", bookings: "860 Bookings", rating: "4.5", color: "#f97316", initials: "BS" },
  { name: "Packers & Movers", bookings: "750 Bookings", rating: "4.4", color: "#ec4899", initials: "PM" },
];

function TopServiceProviders() {
  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Top Service Providers</h2>
        <button className="sa-analytics__view-all-btn" type="button">View All</button>
      </div>
      <div className="sa-analytics__sp-list">
        {SP_DATA.map((sp, i) => (
          <div
            key={sp.name}
            className="sa-analytics__sp-row"
            style={i < SP_DATA.length - 1 ? { borderBottom: "1px solid #f1f5f9" } : undefined}
          >
            <div className="sa-analytics__sp-icon" style={{ backgroundColor: rgbToRgba(sp.color, 0.14), color: sp.color }}>
              <FiZap size={14} />
            </div>
            <div className="sa-analytics__sp-info">
              <span className="sa-analytics__sp-name">{sp.name}</span>
              <span className="sa-analytics__sp-bookings">{sp.bookings}</span>
            </div>
            <span className="sa-analytics__sp-rating">
              <span className="sa-analytics__sp-star">★</span>
              {sp.rating}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

/* ---------------- Recent Orders Overview ---------------- */

const RO_DATA = [
  { id: "#ORD-12540", customer: "Ananya Singh", vendor: "Tech World", amount: "₹2,999", status: "Delivered", date: "May 30, 2025" },
  { id: "#ORD-12539", customer: "Rohit Verma", vendor: "Fashion Hub", amount: "₹1,299", status: "Processing", date: "May 30, 2025" },
  { id: "#ORD-12538", customer: "Priya Mehta", vendor: "Grocery Mart", amount: "₹850", status: "Delivered", date: "May 29, 2025" },
  { id: "#ORD-12537", customer: "Vikram Patel", vendor: "Home Store", amount: "₹1,450", status: "Cancelled", date: "May 29, 2025" },
  { id: "#ORD-12536", customer: "Neha Sharma", vendor: "Beauty Zone", amount: "₹999", status: "Processing", date: "May 28, 2025" },
];

const RO_STATUS_COLORS = {
  Delivered: { bg: "#dcfce7", color: "#16a34a" },
  Processing: { bg: "#ede9fe", color: "#7c3aed" },
  Cancelled: { bg: "#fee2e2", color: "#dc2626" },
};

function RecentOrdersOverview() {
  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Recent Orders Overview</h2>
        <button className="sa-analytics__view-all-btn" type="button">View All</button>
      </div>
      <div className="sa-analytics__orders-table-wrap">
        <table className="sa-analytics__orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {RO_DATA.map((row) => (
              <tr key={row.id}>
                <td className="sa-analytics__orders-id">{row.id}</td>
                <td>{row.customer}</td>
                <td>{row.vendor}</td>
                <td className="sa-analytics__orders-amount">{row.amount}</td>
                <td>
                  <span
                    className="sa-analytics__orders-badge"
                    style={{
                      backgroundColor: RO_STATUS_COLORS[row.status].bg,
                      color: RO_STATUS_COLORS[row.status].color,
                    }}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="sa-analytics__orders-date">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

/* ---------------- Customer Demographics ---------------- */

const CD_DATA = [
  { label: "18-24 Years", percent: 25.4, color: "#22C55E" },
  { label: "25-34 Years", percent: 38.7, color: "#2563EB" },
  { label: "35-44 Years", percent: 22.1, color: "#F97316" },
  { label: "45-54 Years", percent: 9.8, color: "#EF4444" },
  { label: "55+ Years", percent: 4.0, color: "#7C3AED" },
];

const CD_SIZE = 180;
const CD_STROKE = 22;
const CD_RADIUS = (CD_SIZE - CD_STROKE) / 2;
const CD_CENTER = CD_SIZE / 2;
const CD_CIRC = 2 * Math.PI * CD_RADIUS;

function buildCdSegments() {
  const total = CD_DATA.reduce((s, d) => s + d.percent, 0);
  let acc = 0;
  return CD_DATA.map((d) => {
    const start = acc / total;
    const fraction = d.percent / total;
    acc += d.percent;
    return { ...d, start, fraction };
  });
}

const CD_SEGMENTS = buildCdSegments();

function CdSegmentArc({ segment, progress }) {
  const { start, fraction } = segment;
  const dashLength = fraction * CD_CIRC * progress;
  const gapLength = CD_CIRC - dashLength;
  const offset = (1 - start) * CD_CIRC;
  return (
    <circle
      cx={CD_CENTER}
      cy={CD_CENTER}
      r={CD_RADIUS}
      fill="none"
      stroke={segment.color}
      strokeWidth={CD_STROKE}
      strokeDasharray={`${dashLength} ${gapLength}`}
      strokeDashoffset={offset}
      strokeLinecap="butt"
      transform={`rotate(-90 ${CD_CENTER} ${CD_CENTER})`}
    />
  );
}

function CustomerDemographics() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Customer Demographics</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-analytics__channel-body">
        <div className="sa-analytics__donut">
          <svg
            viewBox={`0 0 ${CD_SIZE} ${CD_SIZE}`}
            className="sa-analytics__donut-svg"
            role="img"
            aria-label="Customer demographics breakdown"
          >
            <circle
              cx={CD_CENTER}
              cy={CD_CENTER}
              r={CD_RADIUS}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={CD_STROKE}
            />
            {CD_SEGMENTS.map((seg) => (
              <CdSegmentArc key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
        </div>
        <ul className="sa-analytics__legend">
          {CD_DATA.map((d) => (
            <li key={d.label} className="sa-analytics__legend-item">
              <span className="sa-analytics__legend-dot" style={{ backgroundColor: d.color }} />
              <span className="sa-analytics__legend-name">{d.label}</span>
              <span className="sa-analytics__legend-value" />
              <span className="sa-analytics__legend-percent">{d.percent}%</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ---------------- Devices & Platforms ---------------- */

const DP_DATA = [
  { label: "Mobile", count: "45,231", percent: 65.6, color: "#7C3AED" },
  { label: "Desktop", count: "18,654", percent: 27.1, color: "#2563EB" },
  { label: "Tablet", count: "3,847", percent: 5.6, color: "#06B6D4" },
  { label: "Other", count: "1,200", percent: 1.7, color: "#F97316" },
];

const DP_VIEW_W = 200;
const DP_VIEW_H = 100;
const DP_CENTER = 100;
const DP_RADIUS = 80;
const DP_STROKE = 24;

function buildDpSegments() {
  const total = DP_DATA.reduce((s, d) => s + d.percent, 0);
  let acc = 0;
  return DP_DATA.map((d) => {
    const start = acc / total;
    const fraction = d.percent / total;
    acc += d.percent;
    return { ...d, start, fraction };
  });
}

const DP_SEGMENTS = buildDpSegments();

function dpPoint(fraction, r) {
  const theta = Math.PI * (1 - fraction);
  return [
    DP_CENTER + r * Math.cos(theta),
    DP_CENTER - r * Math.sin(theta),
  ].map((n) => n.toFixed(2));
}

function dpArcPath(startFrac, endFrac, progress) {
  const s = startFrac * progress;
  const e = endFrac * progress;
  const [x1, y1] = dpPoint(s, DP_RADIUS);
  const [x2, y2] = dpPoint(e, DP_RADIUS);
  return `M ${x1} ${y1} A ${DP_RADIUS} ${DP_RADIUS} 0 0 1 ${x2} ${y2}`;
}

function DpSegmentArc({ segment, progress }) {
  return (
    <path
      d={dpArcPath(segment.start, segment.start + segment.fraction, progress)}
      fill="none"
      stroke={segment.color}
      strokeWidth={DP_STROKE}
      strokeLinecap="round"
    />
  );
}

function DevicesPlatforms() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="sa-panel sa-analytics__chart-card">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Devices &amp; Platforms</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-analytics__devices-body">
        <div className="sa-analytics__semi-donut">
          <svg
            viewBox={`0 0 ${DP_VIEW_W} ${DP_VIEW_H}`}
            className="sa-analytics__semi-donut-svg"
            role="img"
            aria-label="Devices and platforms breakdown"
          >
            <path
              d={dpArcPath(0, 1, 1)}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={DP_STROKE}
              strokeLinecap="round"
            />
            {DP_SEGMENTS.map((seg) => (
              <DpSegmentArc key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
          <div className="sa-analytics__semi-center">
            <span className="sa-analytics__semi-label">Sessions</span>
            <span className="sa-analytics__semi-value">68,932</span>
          </div>
        </div>
        <ul className="sa-analytics__legend">
          {DP_DATA.map((d) => (
            <li key={d.label} className="sa-analytics__legend-item">
              <span className="sa-analytics__legend-dot" style={{ backgroundColor: d.color }} />
              <span className="sa-analytics__legend-name">{d.label}</span>
              <span className="sa-analytics__legend-value">{d.count}</span>
              <span className="sa-analytics__legend-percent">({d.percent}%)</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ---------------- Page ---------------- */

function SuperAdminAnalytics() {
  const [activePeriod, setActivePeriod] = useState("This Week");

  return (
    <div className="sa-analytics-page">
      {/* Header */}
      <div className="sa-analytics-page__header">
        <div className="sa-analytics-page__heading">
          <nav className="sa-analytics-page__breadcrumb" aria-label="Breadcrumb">
            <a href="/super-admin" className="sa-analytics-page__crumb-link">
              Dashboard
            </a>
            <span className="sa-analytics-page__crumb-sep">›</span>
            <span className="sa-analytics-page__crumb-current">Analytics</span>
          </nav>
          <h1 className="sa-analytics-page__title">Analytics</h1>
          <p className="sa-analytics-page__desc">
            Monitor your platform performance and business insights.
          </p>
        </div>

        <button className="sa-analytics-page__daterange" type="button">
          <FiCalendar className="sa-analytics-page__daterange-icon" size={17} />
          <span className="sa-analytics-page__daterange-text">{RANGE_LABEL}</span>
          <FiChevronDown className="sa-analytics-page__daterange-chevron" size={16} />
        </button>
      </div>

      {/* Filter / Action row */}
      <div className="sa-analytics-page__toolbar">
        <div className="sa-analytics-page__periods" role="tablist">
          {PERIODS.map((p) => (
            <button
              key={p}
              type="button"
              role="tab"
              aria-selected={activePeriod === p}
              className={`sa-analytics-page__period ${
                activePeriod === p ? "sa-analytics-page__period--active" : ""
              }`}
              onClick={() => setActivePeriod(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="sa-analytics-page__actions">
          <button className="sa-analytics-page__filter" type="button">
            <FiFilter size={14} />
            <span>Filters</span>
          </button>
          <button className="sa-analytics-page__export" type="button">
            <span>Export Report</span>
            <FiChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="sa-analytics-page__grid">
        {CARDS.map((card) => (
          <KpiCard key={card.id} card={card} />
        ))}
      </div>

      {/* Charts */}
      <div className="sa-analytics-page__charts">
        <RevenueOverview />
        <OrderOverview />
        <UserGrowth />
      </div>

      {/* Additional insights */}
      <div className="sa-analytics-page__insights">
        <TopCategories />
        <SalesByChannel />
        <TopVendorsBySales />
        <TopServiceProviders />
      </div>

      {/* New cards row */}
      <div className="sa-analytics-page__new-cards">
        <RecentOrdersOverview />
        <CustomerDemographics />
        <DevicesPlatforms />
      </div>
    </div>
  );
}

export default SuperAdminAnalytics;
