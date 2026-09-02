import { useEffect, useRef, useState } from "react";
import {
  FiCalendar,
  FiChevronDown,
  FiDownload,
  FiFilter,
} from "react-icons/fi";
import useCountUp from "./useCountUp";
import "./SuperAdminReports.css";

import revenueIcon from "../../assets/images/superadmin/total-revenue-admin.png";
import ordersIcon from "../../assets/images/superadmin/total-orders-admin.png";
import usersIcon from "../../assets/images/superadmin/total-users-admin.png";
import vendorsIcon from "../../assets/images/superadmin/total-venders-admin.png";
import serviceIcon from "../../assets/images/superadmin/total-service-providers-admin.png";
import ridersIcon from "../../assets/images/superadmin/total-riders-admin.png";

const RANGE_LABEL = "May 24, 2025 - May 30, 2025";
const TREND_LABEL = "vs Apr 17 - Apr 23";

function rgbToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function MiniSpark({ color, data }) {
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
    line += ` C ${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6}, ${
      p2.x - (p3.x - p1.x) / 6
    } ${p2.y - (p3.y - p1.y) / 6}, ${p2.x} ${p2.y}`;
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
      className={`sa-reports-stat-card__mini ${drawn ? "sa-reports-stat-card__mini--drawn" : ""}`}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sa-rpt-mini-fill-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={rgbToRgba(color, 0.25)} />
          <stop offset="100%" stopColor={rgbToRgba(color, 0)} />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#sa-rpt-mini-fill-${color.replace("#", "")})`} />
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
          r="2.4"
          fill="#fff"
          stroke={color}
          strokeWidth="1.4"
        />
      ))}
    </svg>
  );
}

const KPI_CARDS = [
  {
    id: "revenue",
    icon: revenueIcon,
    iconBg: "rgba(139, 92, 246, 0.14)",
    title: "Total Revenue",
    value: "₹28,95,320",
    percent: "12.5%",
    color: "#8b5cf6",
    spark: [20, 24, 22, 28, 30, 33, 38],
  },
  {
    id: "orders",
    icon: ordersIcon,
    iconBg: "rgba(59, 130, 246, 0.14)",
    title: "Total Orders",
    value: "12,540",
    percent: "8.3%",
    color: "#3b82f6",
    spark: [10, 12, 11, 14, 13, 16, 17],
  },
  {
    id: "users",
    icon: usersIcon,
    iconBg: "rgba(249, 115, 22, 0.14)",
    title: "Total Users",
    value: "58,765",
    percent: "15.7%",
    color: "#f97316",
    spark: [8, 9, 11, 10, 13, 14, 16],
  },
  {
    id: "vendors",
    icon: vendorsIcon,
    iconBg: "rgba(34, 197, 94, 0.14)",
    title: "Total Vendors",
    value: "2,345",
    percent: "10.2%",
    color: "#22c55e",
    spark: [6, 7, 6, 8, 9, 9, 11],
  },
  {
    id: "service",
    icon: serviceIcon,
    iconBg: "rgba(6, 182, 212, 0.14)",
    title: "Total Service Providers",
    value: "5,689",
    percent: "11.8%",
    color: "#06b6d4",
    spark: [5, 6, 6, 7, 7, 8, 9],
  },
  {
    id: "riders",
    icon: ridersIcon,
    iconBg: "rgba(139, 92, 246, 0.14)",
    title: "Total Riders",
    value: "3,456",
    percent: "7.8%",
    color: "#8b5cf6",
    spark: [4, 4, 5, 5, 6, 6, 7],
  },
];

function KpiCard({ card }) {
  return (
    <article className="sa-reports-stat-card">
      <div className="sa-reports-stat-card__body">
        <div className="sa-reports-stat-card__info">
          <h3 className="sa-reports-stat-card__title">{card.title}</h3>
          <p className="sa-reports-stat-card__value">{card.value}</p>
          <span className="sa-reports-stat-card__trend">
            <span className="sa-reports-stat-card__arrow">↑</span>
            {card.percent}
            <span className="sa-reports-stat-card__trend-label">{TREND_LABEL}</span>
          </span>
        </div>

        <div
          className="sa-reports-stat-card__icon"
          style={{ backgroundColor: card.iconBg }}
        >
          <img src={card.icon} alt="" className="sa-reports-stat-card__icon-img" />
        </div>
      </div>

      <MiniSpark color={card.color} data={card.spark} />
    </article>
  );
}

/* ================================================================
   Chart Data & Helpers
   ================================================================ */

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

/* ---------- Revenue Overview ---------- */

const RPT_REV_DATA_THIS = [
  { label: "May 24", value: 18 },
  { label: "May 25", value: 28 },
  { label: "May 26", value: 33 },
  { label: "May 27", value: 38 },
  { label: "May 28", value: 30 },
  { label: "May 29", value: 42 },
  { label: "May 30", value: 45 },
];

const RPT_REV_DATA_LAST = [
  { label: "May 24", value: 12 },
  { label: "May 25", value: 18 },
  { label: "May 26", value: 24 },
  { label: "May 27", value: 21 },
  { label: "May 28", value: 28 },
  { label: "May 29", value: 32 },
  { label: "May 30", value: 36 },
];

const RPT_REV_MAX = 50;
const RPT_REV_W = 600;
const RPT_REV_H = 220;
const RPT_REV_PL = 56;
const RPT_REV_PR = 12;
const RPT_REV_PT = 14;
const RPT_REV_PB = 34;
const RPT_REV_IW = RPT_REV_W - RPT_REV_PL - RPT_REV_PR;
const RPT_REV_IH = RPT_REV_H - RPT_REV_PT - RPT_REV_PB;
const RPT_REV_GRID = [50, 40, 30, 20, 10, 0];
const RPT_REV_YLABELS = ["\u20B950K", "\u20B940K", "\u20B930K", "\u20B920K", "\u20B910K", "\u20B90"];

function ReportsRevenueOverview() {
  const lineRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [trendLen, setTrendLen] = useState(0);

  const thisPts = buildSmoothPoints(RPT_REV_DATA_THIS, RPT_REV_MAX, RPT_REV_W, RPT_REV_H, RPT_REV_PL, RPT_REV_PR, RPT_REV_PT, RPT_REV_PB);
  const lastPts = buildSmoothPoints(RPT_REV_DATA_LAST, RPT_REV_MAX, RPT_REV_W, RPT_REV_H, RPT_REV_PL, RPT_REV_PR, RPT_REV_PT, RPT_REV_PB);
  const thisPath = buildSmoothPath(thisPts);
  const areaPath = `${thisPath} L ${thisPts[thisPts.length - 1].x} ${RPT_REV_PT + RPT_REV_IH} L ${thisPts[0].x} ${RPT_REV_PT + RPT_REV_IH} Z`;
  const startX = thisPts[0].x;
  const spanX = thisPts[thisPts.length - 1].x - startX;

  useEffect(() => {
    if (!lineRef.current) return;
    setTrendLen(lineRef.current.getTotalLength());
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setDrawn(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="sa-reports-chart-card">
      <div className="sa-reports-chart-card__header">
        <h2 className="sa-reports-chart-card__title">Revenue Overview</h2>
        <button className="sa-reports-chart-card__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-reports-rev__legend">
        <span className="sa-reports-rev__legend-item">
          <span className="sa-reports-rev__legend-dot sa-reports-rev__legend-dot--solid" />
          This Week
        </span>
        <span className="sa-reports-rev__legend-item">
          <span className="sa-reports-rev__legend-dot sa-reports-rev__legend-dot--dashed" />
          Last Week
        </span>
      </div>
      <div className="sa-reports-chart-card__body sa-reports-rev__body">
        <div className="sa-reports-chart-card__chart">
          <svg
            viewBox={`0 0 ${RPT_REV_W} ${RPT_REV_H}`}
            className={`sa-reports-rev__svg ${drawn ? "sa-reports-rev__svg--drawn" : ""}`}
            role="img"
            aria-label="Revenue overview for the week"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="sa-rpt-rev-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={rgbToRgba("#8b5cf6", 0.28)} />
                <stop offset="100%" stopColor={rgbToRgba("#8b5cf6", 0)} />
              </linearGradient>
            </defs>
            {RPT_REV_GRID.map((g, idx) => {
              const y = RPT_REV_PT + RPT_REV_IH - (g / RPT_REV_MAX) * RPT_REV_IH;
              return (
                <line
                  key={g}
                  x1={RPT_REV_PL}
                  y1={y}
                  x2={RPT_REV_W - RPT_REV_PR}
                  y2={y}
                  stroke={idx === 0 ? "#e2e8f0" : "#eef0f4"}
                  strokeWidth="1"
                />
              );
            })}
            <g className={drawn ? "sa-reports-rev__area-reveal sa-reports-rev__area-reveal--done" : "sa-reports-rev__area-reveal"}>
              <path d={areaPath} fill="url(#sa-rpt-rev-fill)" />
            </g>
            <path
              d={buildSmoothPath(lastPts)}
              fill="none"
              stroke="#c4b5fd"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="6 4"
              opacity={drawn ? 1 : 0}
              style={{ transition: "opacity 600ms ease 200ms" }}
            />
            <path
              ref={lineRef}
              d={thisPath}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={trendLen || 1}
              strokeDashoffset={drawn ? 0 : trendLen || 1}
              className="sa-reports-rev__line-draw"
            />
            {lastPts.map((p) => (
              <circle
                key={`last-${p.label}`}
                className="sa-reports-rev__data-dot"
                cx={p.x}
                cy={p.y}
                r="4"
                fill="#ffffff"
                stroke="#c4b5fd"
                strokeWidth="2"
                opacity={drawn ? 1 : 0}
                style={{ transition: "opacity 400ms ease 400ms" }}
              />
            ))}
            {thisPts.map((p) => (
              <circle
                key={p.label}
                className="sa-reports-rev__data-dot"
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
          <div className="sa-reports-rev__xaxis">
            {thisPts.map((p) => (
              <span
                key={p.label}
                className="sa-reports-rev__xlabel"
                style={{ left: `${(p.x / RPT_REV_W) * 100}%` }}
              >
                {p.label}
              </span>
            ))}
          </div>
          <div className="sa-reports-rev__yaxis">
            {RPT_REV_YLABELS.map((label, idx) => {
              const v = RPT_REV_GRID[idx];
              const y = RPT_REV_PT + RPT_REV_IH - (v / RPT_REV_MAX) * RPT_REV_IH;
              return (
                <span
                  key={label}
                  className="sa-reports-rev__ylabel"
                  style={{ top: `${(y / RPT_REV_H) * 100}%` }}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- Orders by Status ---------- */

const RPT_ORD_STATUS = [
  { label: "Delivered", value: 7231, display: "7,231", percent: "57.7%", color: "#22c55e" },
  { label: "Processing", value: 2543, display: "2,543", percent: "20.3%", color: "#3b82f6" },
  { label: "Cancelled", value: 1254, display: "1,254", percent: "10.0%", color: "#ef4444" },
  { label: "Returned", value: 1532, display: "1,532", percent: "12.2%", color: "#f97316" },
];

const RPT_ORD_TOTAL = "12,540";
const RPT_ORD_SIZE = 180;
const RPT_ORD_STROKE = 20;
const RPT_ORD_RADIUS = (RPT_ORD_SIZE - RPT_ORD_STROKE) / 2;
const RPT_ORD_CENTER = RPT_ORD_SIZE / 2;
const RPT_ORD_CIRC = 2 * Math.PI * RPT_ORD_RADIUS;

function buildRptOrdSegments() {
  const total = RPT_ORD_STATUS.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  return RPT_ORD_STATUS.map((d) => {
    const start = acc / total;
    acc += d.value;
    const fraction = d.value / total;
    return { ...d, start, fraction };
  });
}

const RPT_ORD_SEGMENTS = buildRptOrdSegments();

function RptOrdArc({ segment, progress }) {
  const { start, fraction } = segment;
  const dashLength = fraction * RPT_ORD_CIRC * progress;
  const gapLength = RPT_ORD_CIRC - dashLength;
  const offset = (1 - start) * RPT_ORD_CIRC;
  return (
    <circle
      cx={RPT_ORD_CENTER}
      cy={RPT_ORD_CENTER}
      r={RPT_ORD_RADIUS}
      fill="none"
      stroke={segment.color}
      strokeWidth={RPT_ORD_STROKE}
      strokeDasharray={`${dashLength} ${gapLength}`}
      strokeDashoffset={offset}
      strokeLinecap="butt"
      transform={`rotate(-90 ${RPT_ORD_CENTER} ${RPT_ORD_CENTER})`}
    />
  );
}

function ReportsOrdersByStatus() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="sa-reports-chart-card">
      <div className="sa-reports-chart-card__header">
        <h2 className="sa-reports-chart-card__title">Orders by Status</h2>
      </div>
      <div className="sa-reports-chart-card__body">
        <div className="sa-reports-donut">
          <svg
            viewBox={`0 0 ${RPT_ORD_SIZE} ${RPT_ORD_SIZE}`}
            className="sa-reports-donut__svg"
            role="img"
            aria-label="Order status breakdown"
          >
            <circle
              cx={RPT_ORD_CENTER}
              cy={RPT_ORD_CENTER}
              r={RPT_ORD_RADIUS}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={RPT_ORD_STROKE}
            />
            {RPT_ORD_SEGMENTS.map((seg) => (
              <RptOrdArc key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
          <div className="sa-reports-donut__center">
            <span className="sa-reports-donut__center-value">{RPT_ORD_TOTAL}</span>
            <span className="sa-reports-donut__center-label">Total Orders</span>
          </div>
        </div>
        <ul className="sa-reports-legend">
          {RPT_ORD_STATUS.map((d) => (
            <li key={d.label} className="sa-reports-legend__item">
              <span className="sa-reports-legend__dot" style={{ backgroundColor: d.color }} />
              <span className="sa-reports-legend__name">{d.label}</span>
              <span className="sa-reports-legend__value">{d.display} ({d.percent})</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ---------- Revenue by Category ---------- */

const RPT_CAT_DATA = [
  { label: "Electronics", value: "\u20B95,91,230", numVal: 591230, percent: "20.4%", color: "#8b5cf6" },
  { label: "Fashion", value: "\u20B94,82,950", numVal: 482950, percent: "16.6%", color: "#3b82f6" },
  { label: "Home & Kitchen", value: "\u20B94,52,310", numVal: 452310, percent: "15.6%", color: "#f97316" },
  { label: "Beauty", value: "\u20B93,50,230", numVal: 350230, percent: "12.1%", color: "#22c55e" },
  { label: "Grocery", value: "\u20B92,95,120", numVal: 295120, percent: "10.2%", color: "#ec4899" },
  { label: "Others", value: "\u20B97,63,980", numVal: 763980, percent: "26.3%", color: "#9ca3af" },
];

const RPT_CAT_TOTAL = "\u20B928,95,320";
const RPT_CAT_SIZE = 180;
const RPT_CAT_STROKE = 20;
const RPT_CAT_RADIUS = (RPT_CAT_SIZE - RPT_CAT_STROKE) / 2;
const RPT_CAT_CENTER = RPT_CAT_SIZE / 2;
const RPT_CAT_CIRC = 2 * Math.PI * RPT_CAT_RADIUS;

function buildRptCatSegments() {
  const total = RPT_CAT_DATA.reduce((s, d) => s + d.numVal, 0);
  let acc = 0;
  return RPT_CAT_DATA.map((d) => {
    const start = acc / total;
    acc += d.numVal;
    const fraction = d.numVal / total;
    return { ...d, start, fraction };
  });
}

const RPT_CAT_SEGMENTS = buildRptCatSegments();

function RptCatArc({ segment, progress }) {
  const { start, fraction } = segment;
  const dashLength = fraction * RPT_CAT_CIRC * progress;
  const gapLength = RPT_CAT_CIRC - dashLength;
  const offset = (1 - start) * RPT_CAT_CIRC;
  return (
    <circle
      cx={RPT_CAT_CENTER}
      cy={RPT_CAT_CENTER}
      r={RPT_CAT_RADIUS}
      fill="none"
      stroke={segment.color}
      strokeWidth={RPT_CAT_STROKE}
      strokeDasharray={`${dashLength} ${gapLength}`}
      strokeDashoffset={offset}
      strokeLinecap="butt"
      transform={`rotate(-90 ${RPT_CAT_CENTER} ${RPT_CAT_CENTER})`}
    />
  );
}

function ReportsRevenueByCategory() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="sa-reports-chart-card">
      <div className="sa-reports-chart-card__header">
        <h2 className="sa-reports-chart-card__title">Revenue by Category</h2>
        <button className="sa-reports-chart-card__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>
      <div className="sa-reports-chart-card__body">
        <div className="sa-reports-donut">
          <svg
            viewBox={`0 0 ${RPT_CAT_SIZE} ${RPT_CAT_SIZE}`}
            className="sa-reports-donut__svg"
            role="img"
            aria-label="Revenue by category breakdown"
          >
            <circle
              cx={RPT_CAT_CENTER}
              cy={RPT_CAT_CENTER}
              r={RPT_CAT_RADIUS}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={RPT_CAT_STROKE}
            />
            {RPT_CAT_SEGMENTS.map((seg) => (
              <RptCatArc key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
          <div className="sa-reports-donut__center">
            <span className="sa-reports-donut__center-value">{RPT_CAT_TOTAL}</span>
            <span className="sa-reports-donut__center-label">Total Revenue</span>
          </div>
        </div>
        <ul className="sa-reports-legend">
          {RPT_CAT_DATA.map((d) => (
            <li key={d.label} className="sa-reports-legend__item">
              <span className="sa-reports-legend__dot" style={{ backgroundColor: d.color }} />
              <span className="sa-reports-legend__name">{d.label}</span>
              <span className="sa-reports-legend__value">{d.value} ({d.percent})</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const REPORT_TABS = [
  "Overview",
  "Sales Reports",
  "Order Reports",
  "User Reports",
  "Vendor Reports",
  "Financial Reports",
  "Rider Reports",
  "System Reports",
];

function SuperAdminReports() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="sa-reports-page">
      {/* Header */}
      <div className="sa-reports-page__header">
        <div className="sa-reports-page__heading">
          <h1 className="sa-reports-page__title">Reports</h1>
          <nav className="sa-reports-page__breadcrumb" aria-label="Breadcrumb">
            <a href="/super-admin" className="sa-reports-page__crumb-link">
              Dashboard
            </a>
            <span className="sa-reports-page__crumb-sep">&gt;</span>
            <span className="sa-reports-page__crumb-current">Reports</span>
          </nav>
        </div>

        <button className="sa-reports-page__daterange" type="button">
          <FiCalendar className="sa-reports-page__daterange-icon" size={17} />
          <span className="sa-reports-page__daterange-text">{RANGE_LABEL}</span>
          <FiChevronDown className="sa-reports-page__daterange-chevron" size={16} />
        </button>
      </div>

      {/* Report navigation / action row */}
      <div className="sa-reports-page__toolbar">
        <div className="sa-reports-page__tabs" role="navigation">
          {REPORT_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`sa-reports-page__tab ${
                tab === activeTab ? "sa-reports-page__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="sa-reports-page__actions">
          <button className="sa-reports-page__filter" type="button">
            <FiFilter size={14} />
            <span>Filters</span>
          </button>
          <button className="sa-reports-page__export" type="button">
            <FiDownload size={14} />
            <span>Export Report</span>
            <FiChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* KPI cards */}
      <div className="sa-reports-page__kpi-grid">
        {KPI_CARDS.map((card) => (
          <KpiCard key={card.id} card={card} />
        ))}
      </div>

      {/* Report Filters */}
      <div className="sa-reports-filters">
        <div className="sa-reports-filters__controls">
          <div className="sa-reports-filters__field">
            <label className="sa-reports-filters__label">Date Range</label>
            <div className="sa-reports-filters__input">
              <FiCalendar className="sa-reports-filters__input-icon" size={15} />
              <span className="sa-reports-filters__input-text">May 24, 2025 - May 30, 2025</span>
              <FiChevronDown className="sa-reports-filters__input-chevron" size={14} />
            </div>
          </div>

          <div className="sa-reports-filters__field">
            <label className="sa-reports-filters__label">Compare With</label>
            <div className="sa-reports-filters__input">
              <FiCalendar className="sa-reports-filters__input-icon" size={15} />
              <span className="sa-reports-filters__input-text">Apr 17, 2025 - Apr 23, 2025</span>
              <FiChevronDown className="sa-reports-filters__input-chevron" size={14} />
            </div>
          </div>

          <div className="sa-reports-filters__field">
            <label className="sa-reports-filters__label">Group By</label>
            <div className="sa-reports-filters__input">
              <span className="sa-reports-filters__input-text">Day</span>
              <FiChevronDown className="sa-reports-filters__input-chevron" size={14} />
            </div>
          </div>

          <div className="sa-reports-filters__field">
            <label className="sa-reports-filters__label">Category</label>
            <div className="sa-reports-filters__input">
              <span className="sa-reports-filters__input-text">All Categories</span>
              <FiChevronDown className="sa-reports-filters__input-chevron" size={14} />
            </div>
          </div>

          <div className="sa-reports-filters__field">
            <label className="sa-reports-filters__label">Channel</label>
            <div className="sa-reports-filters__input">
              <span className="sa-reports-filters__input-text">All Channels</span>
              <FiChevronDown className="sa-reports-filters__input-chevron" size={14} />
            </div>
          </div>
        </div>

        <div className="sa-reports-filters__buttons">
          <button className="sa-reports-filters__btn sa-reports-filters__btn--apply" type="button">
            Apply
          </button>
          <button className="sa-reports-filters__btn sa-reports-filters__btn--reset" type="button">
            Reset
          </button>
        </div>
      </div>

      {/* Charts row */}
      <div className="sa-reports-charts-grid">
        <ReportsRevenueOverview />
        <ReportsOrdersByStatus />
        <ReportsRevenueByCategory />
      </div>

      {/* Main content area: left (tables + summary) | right (Quick Reports) */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* LEFT MAIN AREA */}
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          {/* Top Performing Products + Top Vendors side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top Performing Products */}
            <div className="bg-white border border-gray-200 rounded-xl flex flex-col">
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-base font-semibold text-gray-900">Top Performing Products</h2>
              </div>

              <div className="overflow-x-auto px-5 pb-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                      <th className="text-left py-2.5 px-3 font-medium rounded-l-lg w-8">#</th>
                      <th className="text-left py-2.5 px-3 font-medium">Product</th>
                      <th className="text-left py-2.5 px-3 font-medium">Category</th>
                      <th className="text-right py-2.5 px-3 font-medium">Qty Sold</th>
                      <th className="text-right py-2.5 px-3 font-medium">Revenue</th>
                      <th className="text-right py-2.5 px-3 font-medium rounded-r-lg">Growth</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { rank: 1, name: "iPhone 15 Pro Max", category: "Electronics", qty: "312", revenue: "\u20B94,67,880", growth: "18.5%" },
                      { rank: 2, name: "Women's Handbag", category: "Fashion", qty: "298", revenue: "\u20B92,35,420", growth: "12.3%" },
                      { rank: 3, name: "Mixer Grinder", category: "Home & Kitchen", qty: "256", revenue: "\u20B91,98,360", growth: "9.8%" },
                      { rank: 4, name: "Face Serum", category: "Beauty", qty: "210", revenue: "\u20B91,67,250", growth: "15.2%" },
                      { rank: 5, name: "Wheat Atta 5kg", category: "Grocery", qty: "489", revenue: "\u20B91,45,230", growth: "8.7%" },
                    ].map((row) => (
                      <tr key={row.rank} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-2.5 px-3 text-gray-400 font-medium">{row.rank}</td>
                        <td className="py-2.5 px-3 text-gray-900 font-medium whitespace-nowrap">{row.name}</td>
                        <td className="py-2.5 px-3 text-gray-500 whitespace-nowrap">{row.category}</td>
                        <td className="py-2.5 px-3 text-gray-700 text-right tabular-nums">{row.qty}</td>
                        <td className="py-2.5 px-3 text-gray-900 font-medium text-right whitespace-nowrap tabular-nums">{row.revenue}</td>
                        <td className="py-2.5 px-3 text-green-600 font-medium text-right whitespace-nowrap">
                          <span className="inline-flex items-center gap-0.5">
                            <span className="text-xs">↑</span>
                            {row.growth}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-gray-100 bg-gray-50/60 rounded-b-xl">
                <button
                  type="button"
                  className="w-full text-center text-sm font-medium text-violet-600 hover:text-violet-700 py-3 transition-colors"
                >
                  View All Products
                </button>
              </div>
            </div>

            {/* Top Vendors by Revenue */}
            <div className="bg-white border border-gray-200 rounded-xl flex flex-col">
              <div className="px-5 pt-5 pb-3">
                <h2 className="text-base font-semibold text-gray-900">Top Vendors by Revenue</h2>
              </div>

              <div className="overflow-x-auto px-5 pb-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
                      <th className="text-left py-2.5 px-3 font-medium rounded-l-lg w-8">#</th>
                      <th className="text-left py-2.5 px-3 font-medium">Vendor</th>
                      <th className="text-right py-2.5 px-3 font-medium">Orders</th>
                      <th className="text-right py-2.5 px-3 font-medium">Revenue</th>
                      <th className="text-right py-2.5 px-3 font-medium">Growth</th>
                      <th className="text-right py-2.5 px-3 font-medium rounded-r-lg">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { rank: 1, name: "Tech World", orders: "826", revenue: "\u20B95,45,230", growth: "14.2%", rating: "4.8" },
                      { rank: 2, name: "Fashion Hub", orders: "712", revenue: "\u20B94,92,150", growth: "11.3%", rating: "4.6" },
                      { rank: 3, name: "Grocery Mart", orders: "645", revenue: "\u20B94,21,630", growth: "13.1%", rating: "4.7" },
                      { rank: 4, name: "Home Store", orders: "598", revenue: "\u20B93,85,420", growth: "10.4%", rating: "4.5" },
                      { rank: 5, name: "Beauty Zone", orders: "512", revenue: "\u20B93,25,980", growth: "9.6%", rating: "4.6" },
                    ].map((row) => (
                      <tr key={row.rank} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-2.5 px-3 text-gray-400 font-medium">{row.rank}</td>
                        <td className="py-2.5 px-3 text-gray-900 font-medium whitespace-nowrap">{row.name}</td>
                        <td className="py-2.5 px-3 text-gray-700 text-right tabular-nums">{row.orders}</td>
                        <td className="py-2.5 px-3 text-gray-900 font-medium text-right whitespace-nowrap tabular-nums">{row.revenue}</td>
                        <td className="py-2.5 px-3 text-green-600 font-medium text-right whitespace-nowrap">
                          <span className="inline-flex items-center gap-0.5">
                            <span className="text-xs">↑</span>
                            {row.growth}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right whitespace-nowrap">
                          <span className="inline-flex items-center gap-1">
                            <span className="text-yellow-400 text-sm">★</span>
                            <span className="text-gray-700 font-medium tabular-nums">{row.rating}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-gray-100 bg-gray-50/60 rounded-b-xl">
                <button
                  type="button"
                  className="w-full text-center text-sm font-medium text-violet-600 hover:text-violet-700 py-3 transition-colors"
                >
                  View All Vendors
                </button>
              </div>
            </div>
          </div>

          {/* Reports Summary */}
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Reports Summary</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {/* Total Transactions */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Total Transactions</p>
                  <p className="text-lg font-bold text-gray-900">18,765</p>
                  <p className="text-xs font-semibold text-green-600 flex items-center gap-1 mt-0.5">
                    <span>↑</span> 11.4% <span className="font-normal text-gray-400">vs last week</span>
                  </p>
                </div>
              </div>

              {/* Total Payouts */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Total Payouts</p>
                  <p className="text-lg font-bold text-gray-900">₹12,45,230</p>
                  <p className="text-xs font-semibold text-green-600 flex items-center gap-1 mt-0.5">
                    <span>↑</span> 9.3% <span className="font-normal text-gray-400">vs last week</span>
                  </p>
                </div>
              </div>

              {/* Pending Payouts */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Pending Payouts</p>
                  <p className="text-lg font-bold text-gray-900">₹2,34,560</p>
                  <p className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                    <span>↓</span> 3.2% <span className="font-normal text-gray-400">vs last week</span>
                  </p>
                </div>
              </div>

              {/* Refunds */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Refunds</p>
                  <p className="text-lg font-bold text-gray-900">₹86,450</p>
                  <p className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                    <span>↓</span> 6.1% <span className="font-normal text-gray-400">vs last week</span>
                  </p>
                </div>
              </div>

              {/* Chargebacks */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Chargebacks</p>
                  <p className="text-lg font-bold text-gray-900">₹23,120</p>
                  <p className="text-xs font-semibold text-red-500 flex items-center gap-1 mt-0.5">
                    <span>↓</span> 4.7% <span className="font-normal text-gray-400">vs last week</span>
                  </p>
                </div>
              </div>

              {/* New Registrations */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">New Registrations</p>
                  <p className="text-lg font-bold text-gray-900">5,689</p>
                  <p className="text-xs font-semibold text-green-600 flex items-center gap-1 mt-0.5">
                    <span>↑</span> 12.7% <span className="font-normal text-gray-400">vs last week</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Quick Reports */}
        <div className="w-full lg:w-80 flex-shrink-0 bg-white border border-gray-200 rounded-xl flex flex-col self-stretch">
          <div className="px-5 pt-5 pb-3">
            <h2 className="text-base font-semibold text-gray-900">Quick Reports</h2>
          </div>

          <div className="flex flex-col flex-1">
            {[
              {
                name: "Sales Summary Report",
                desc: "Detailed sales and revenue summary",
                icon: "📊",
              },
              {
                name: "Order Summary Report",
                desc: "Orders placed and status report",
                icon: "📦",
              },
              {
                name: "User Activity Report",
                desc: "User registrations and activities",
                icon: "👥",
              },
              {
                name: "Vendor Performance Report",
                desc: "Vendor sales and performance",
                icon: "🏪",
              },
              {
                name: "Rider Performance Report",
                desc: "Rider deliveries and earnings",
                icon: "🚚",
              },
              {
                name: "Payout Summary Report",
                desc: "Payouts and transactions report",
                icon: "💳",
              },
            ].map((item, idx, arr) => (
              <div
                key={item.name}
                className={`flex items-center gap-3 px-5 py-3 hover:bg-gray-50/50 transition-colors ${idx < arr.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400 truncate">{item.desc}</p>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 text-gray-400 hover:text-violet-600 transition-colors"
                  aria-label={`Download ${item.name}`}
                >
                  <FiDownload className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 bg-purple-50/40 rounded-b-xl">
            <button
              type="button"
              className="w-full text-center text-sm font-medium text-violet-600 hover:text-violet-700 py-3 transition-colors"
            >
              View All Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminReports;
