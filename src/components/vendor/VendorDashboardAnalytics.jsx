import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import useCountUp from "../super-admin/useCountUp";

import imgBooking from "../../assets/images/vendordashboard/new-booking-received-.png";
import imgReview from "../../assets/images/vendordashboard/new-review-received.png";
import imgWallet from "../../assets/images/vendordashboard/orange-wallet.png";
import imgCancel from "../../assets/images/vendordashboard/booking-canceled.png";

import "./VendorDashboardAnalytics.css";

/* ────────────────────────────────────────────
   1. EARNINGS OVERVIEW
   ──────────────────────────────────────────── */

const EARNINGS_DATA = [
  { label: "May 24", value: 20 },
  { label: "May 25", value: 28 },
  { label: "May 26", value: 33 },
  { label: "May 27", value: 28 },
  { label: "May 28", value: 40 },
  { label: "May 29", value: 38 },
  { label: "May 30", value: 50 },
];

const E_WIDTH = 1000;
const E_HEIGHT = 360;
const E_PAD_LEFT = 92;
const E_PAD_RIGHT = 16;
const E_PAD_TOP = 18;
const E_PAD_BOTTOM = 42;
const E_MAX = 50;

const eInnerW = E_WIDTH - E_PAD_LEFT - E_PAD_RIGHT;
const eInnerH = E_HEIGHT - E_PAD_TOP - E_PAD_BOTTOM;

function buildEPoints() {
  const n = EARNINGS_DATA.length;
  return EARNINGS_DATA.map((d, i) => {
    const x = E_PAD_LEFT + (n === 1 ? eInnerW / 2 : (i / (n - 1)) * eInnerW);
    const y = E_PAD_TOP + eInnerH - (d.value / E_MAX) * eInnerH;
    return { ...d, x, y };
  });
}

const E_POINTS = buildEPoints();
const E_START_X = E_POINTS[0].x;
const E_SPAN = E_POINTS[E_POINTS.length - 1].x - E_POINTS[0].x;
const E_DRAW_DURATION = 1300;

function eSmoothPath(points) {
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

const eLinePath = eSmoothPath(E_POINTS);
const eAreaPath = `${eLinePath} L ${E_POINTS[E_POINTS.length - 1].x} ${
  E_PAD_TOP + eInnerH
} L ${E_POINTS[0].x} ${E_PAD_TOP + eInnerH} Z`;

const E_GRID = [50, 40, 30, 20, 10, 0];
const E_Y_LABELS = ["\u20B950K", "\u20B940K", "\u20B930K", "\u20B920K", "\u20B910K", "\u20B90"];

function EarningsOverview() {
  const lineRef = useRef(null);
  const [revLen, setRevLen] = useState(0);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (!lineRef.current) return;
    setRevLen(lineRef.current.getTotalLength());
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setDrawn(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="vd-panel vd-analytics__card">
      <div className="vd-panel__header">
        <h2 className="vd-panel__title">Earnings Overview</h2>
        <button className="vd-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>

      <div className="vd-earnings__chart">
        <svg
          viewBox={`0 0 ${E_WIDTH} ${E_HEIGHT}`}
          className={`vd-earnings__svg ${drawn ? "vd-earnings__svg--drawn" : ""}`}
          role="img"
          aria-label="Earnings trend for the week"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="vd-earn-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.28)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
          </defs>

          {E_GRID.map((g, idx) => {
            const y = E_PAD_TOP + eInnerH - (g / E_MAX) * eInnerH;
            return (
              <line
                key={g}
                x1={E_PAD_LEFT}
                y1={y}
                x2={E_WIDTH - E_PAD_RIGHT}
                y2={y}
                stroke={idx === 0 ? "#e2e8f0" : "#eef0f4"}
                strokeWidth="1"
              />
            );
          })}

          <g
            className={
              drawn
                ? "vd-earnings__area-reveal vd-earnings__area-reveal--done"
                : "vd-earnings__area-reveal"
            }
          >
            <path d={eAreaPath} fill="url(#vd-earn-fill)" />
          </g>
          <path
            ref={lineRef}
            d={eLinePath}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={revLen || 1}
            strokeDashoffset={drawn ? 0 : revLen || 1}
            className="vd-earnings__line"
          />

          {E_POINTS.map((p) => (
            <circle
              key={p.label}
              className="vd-earnings__point"
              cx={p.x}
              cy={p.y}
              r="7"
              fill="#ffffff"
              stroke="#8b5cf6"
              strokeWidth="3.5"
              style={{
                transitionDelay: revLen
                  ? `${((p.x - E_START_X) / E_SPAN) * E_DRAW_DURATION}ms`
                  : "0ms",
              }}
            />
          ))}
        </svg>

        <div className="vd-earnings__xaxis">
          {E_POINTS.map((p) => (
            <span
              key={p.label}
              className="vd-earnings__xlabel"
              style={{ left: `${(p.x / E_WIDTH) * 100}%` }}
            >
              {p.label}
            </span>
          ))}
        </div>

        <div className="vd-earnings__yaxis">
          {E_Y_LABELS.map((label, idx) => {
            const v = E_GRID[idx];
            const y = E_PAD_TOP + eInnerH - (v / E_MAX) * eInnerH;
            return (
              <span
                key={label}
                className="vd-earnings__ylabel"
                style={{ top: `${(y / E_HEIGHT) * 100}%` }}
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

/* ────────────────────────────────────────────
   2. BOOKING STATUS
   ──────────────────────────────────────────── */

const BOOKING_STATUSES = [
  { label: "Completed", value: 982, percent: "78.7%", color: "#22c55e" },
  { label: "Confirmed", value: 156, percent: "12.5%", color: "#3b82f6" },
  { label: "Pending", value: 78, percent: "6.3%", color: "#f97316" },
  { label: "Cancelled", value: 32, percent: "2.5%", color: "#ef4444" },
];

const BOOKING_TOTAL = "1,248";
const D_SIZE = 200;
const D_STROKE = 22;
const D_RADIUS = (D_SIZE - D_STROKE) / 2;
const D_CENTER = D_SIZE / 2;
const D_CIRC = 2 * Math.PI * D_RADIUS;

function buildBookingSegments() {
  const total = BOOKING_STATUSES.reduce((s, d) => s + d.value, 0);
  let acc = 0;
  return BOOKING_STATUSES.map((d) => {
    const fraction = d.value / total;
    const start = acc / total;
    acc += d.value;
    return { ...d, start, fraction };
  });
}

const B_SEGMENTS = buildBookingSegments();

function BookingSegment({ segment, progress }) {
  const { start, fraction } = segment;
  const dashLength = fraction * D_CIRC * progress;
  const gapLength = D_CIRC - dashLength;
  const offset = (1 - start) * D_CIRC;
  return (
    <circle
      cx={D_CENTER}
      cy={D_CENTER}
      r={D_RADIUS}
      fill="none"
      stroke={segment.color}
      strokeWidth={D_STROKE}
      strokeDasharray={`${dashLength} ${gapLength}`}
      strokeDashoffset={offset}
      strokeLinecap="butt"
      transform={`rotate(-90 ${D_CENTER} ${D_CENTER})`}
    />
  );
}

function BookingStatus() {
  const progress = useCountUp(1, { duration: 1000 });

  return (
    <article className="vd-panel vd-analytics__card">
      <div className="vd-panel__header">
        <h2 className="vd-panel__title">Booking Status</h2>
        <button className="vd-panel__dropdown" type="button">
          <span>This Week</span>
          <FiChevronDown size={14} />
        </button>
      </div>

      <div className="vd-booking__body">
        <div className="vd-booking__donut">
          <svg
            viewBox={`0 0 ${D_SIZE} ${D_SIZE}`}
            className="vd-booking__svg"
            role="img"
            aria-label="Booking status breakdown"
          >
            <circle
              cx={D_CENTER}
              cy={D_CENTER}
              r={D_RADIUS}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth={D_STROKE}
            />
            {B_SEGMENTS.map((seg) => (
              <BookingSegment key={seg.label} segment={seg} progress={progress} />
            ))}
          </svg>
          <div className="vd-booking__center">
            <span className="vd-booking__center-value">{BOOKING_TOTAL}</span>
            <span className="vd-booking__center-label">Total Bookings</span>
          </div>
        </div>

        <ul className="vd-booking__legend">
          {BOOKING_STATUSES.map((d) => (
            <li key={d.label} className="vd-booking__legend-item">
              <span
                className="vd-booking__legend-dot"
                style={{ backgroundColor: d.color }}
              />
              <span className="vd-booking__legend-name">{d.label}</span>
              <span className="vd-booking__legend-value">
                {d.value.toLocaleString("en-IN")}
              </span>
              <span className="vd-booking__legend-percent">{d.percent}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ────────────────────────────────────────────
   3. RECENT NOTIFICATIONS
   ──────────────────────────────────────────── */

const NOTIFICATIONS = [
  {
    id: 1,
    icon: imgBooking,
    title: "New booking received",
    description: "Home Cleaning - May 31, 10:00 AM",
    time: "2 minutes ago",
  },
  {
    id: 2,
    icon: imgReview,
    title: "New review received",
    description: "Great services! Very professional staff.",
    time: "25 minutes ago",
  },
  {
    id: 3,
    icon: imgWallet,
    title: "\u20B92,450 has been added to your wallet",
    description: "For booking #BK-12569",
    time: "1 hour ago",
  },
  {
    id: 4,
    icon: imgCancel,
    title: "Booking cancelled",
    description: "Pest Control - May 29, 2:00 PM",
    time: "2 hours ago",
  },
];

function RecentNotifications() {
  return (
    <article className="vd-panel vd-analytics__card vd-analytics__card--notifications">
      <div className="vd-panel__header">
        <h2 className="vd-panel__title">Recent Notifications</h2>
        <button className="vd-panel__viewall" type="button">
          <span>View All</span>
          <FiChevronRight size={14} />
        </button>
      </div>

      <ul className="vd-notifications__list">
        {NOTIFICATIONS.map((n, idx) => (
          <li
            key={n.id}
            className={`vd-notifications__item ${
              idx < NOTIFICATIONS.length - 1 ? "vd-notifications__item--bordered" : ""
            }`}
          >
            <div className="vd-notifications__icon">
              <img src={n.icon} alt="" className="vd-notifications__icon-img" />
            </div>
            <div className="vd-notifications__info">
              <span className="vd-notifications__title">{n.title}</span>
              <span className="vd-notifications__desc">{n.description}</span>
            </div>
            <span className="vd-notifications__time">{n.time}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* ────────────────────────────────────────────
   COMPOSED ANALYTICS SECTION
   ──────────────────────────────────────────── */

function VendorDashboardAnalytics() {
  return (
    <section className="vd-analytics" aria-label="Dashboard analytics">
      <EarningsOverview />
      <BookingStatus />
      <RecentNotifications />
    </section>
  );
}

export default VendorDashboardAnalytics;
