import { useEffect, useRef, useState } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiDatabase,
  FiHardDrive,
  FiServer,
  FiUsers,
} from "react-icons/fi";
import useCountUp from "./useCountUp";

const SPARK = [
  { label: "Mon", value: 820 },
  { label: "Tue", value: 940 },
  { label: "Wed", value: 890 },
  { label: "Thu", value: 1040 },
  { label: "Fri", value: 1120 },
  { label: "Sat", value: 1180 },
  { label: "Sun", value: 1245 },
];

const SPARK_WIDTH = 200;
const SPARK_HEIGHT = 44;
const SPARK_PAD = 2;

function buildSparkPath() {
  const min = Math.min(...SPARK.map((d) => d.value));
  const max = Math.max(...SPARK.map((d) => d.value));
  const n = SPARK.length;
  return SPARK.map((d, i) => {
    const x =
      SPARK_PAD + (n === 1 ? 0 : (i / (n - 1)) * (SPARK_WIDTH - SPARK_PAD * 2));
    const y =
      SPARK_HEIGHT -
      SPARK_PAD -
      ((d.value - min) / (max - min || 1)) * (SPARK_HEIGHT - SPARK_PAD * 2);
    return { ...d, x, y };
  });
}

const SPARK_POINTS = buildSparkPath();

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

const SPARK_LINE = smoothPath(SPARK_POINTS);
const SPARK_AREA = `${SPARK_LINE} L ${SPARK_POINTS[SPARK_POINTS.length - 1].x} ${
  SPARK_HEIGHT - SPARK_PAD
} L ${SPARK_POINTS[0].x} ${SPARK_HEIGHT - SPARK_PAD} Z`;

const STORAGE_USAGE = 68;

function StatusCheck() {
  return <FiCheckCircle size={18} className="text-[#22c55e]" />;
}

function SystemHealth() {
  const storage = useCountUp(STORAGE_USAGE, { duration: 1000 });

  const sparkLineRef = useRef(null);
  const [sparkLen, setSparkLen] = useState(0);
  const [sparkDrawn, setSparkDrawn] = useState(false);

  useEffect(() => {
    if (!sparkLineRef.current) return;
    setSparkLen(sparkLineRef.current.getTotalLength());
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setSparkDrawn(true))
    );
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <article className="bg-white dark:bg-[#1e293b] border dark:border-[#334155] border-[#eef0f3] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-[0.9rem_1rem] min-w-0 flex flex-col items-stretch">
      <div className="flex items-center justify-between gap-3 mb-[0.6rem]">
        <h2 className="text-[0.95rem] font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          System Health
        </h2>
      </div>

      <ul className="list-none flex flex-col min-w-0">
        <li className="flex items-center gap-3 py-[0.45rem] min-w-0">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[0.6rem] bg-[rgba(34,197,94,0.14)] text-[#16a34a]">
            <FiServer size={16} />
          </span>
          <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
            <span className="text-[0.85rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">Server Status</span>
            <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">All systems operational</span>
          </div>
          <span className="flex-shrink-0 flex items-center justify-end">
            <StatusCheck />
          </span>
        </li>

        <li className="flex items-center gap-3 py-[0.45rem] min-w-0 border-t border-[#f1f5f9] dark:border-[#334155]">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[0.6rem] bg-[rgba(59,130,246,0.14)] text-[#3b82f6]">
            <FiDatabase size={16} />
          </span>
          <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
            <span className="text-[0.85rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">Database</span>
            <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">Connected</span>
          </div>
          <span className="flex-shrink-0 flex items-center justify-end">
            <StatusCheck />
          </span>
        </li>

        <li className="flex items-center gap-3 py-[0.45rem] min-w-0 border-t border-[#f1f5f9] dark:border-[#334155] flex-wrap">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[0.6rem] bg-[rgba(139,92,246,0.14)] text-[#8b5cf6]">
            <FiHardDrive size={16} />
          </span>
          <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
            <span className="text-[0.85rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">Storage Usage</span>
            <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">
              {Math.round(storage)}% / 100%
            </span>
          </div>
          <div className="basis-full h-[6px] rounded-full bg-[#f1f5f9] dark:bg-[#334155] overflow-hidden mt-[0.15rem]">
            <span
              className="block h-full rounded-full bg-[linear-gradient(90deg,#a78bfa,#8b5cf6)]"
              style={{ width: `${storage}%` }}
            />
          </div>
        </li>

        <li className="flex items-center gap-3 py-[0.45rem] min-w-0 border-t border-[#f1f5f9] dark:border-[#334155]">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[0.6rem] bg-[rgba(34,197,94,0.14)] text-[#16a34a]">
            <FiActivity size={16} />
          </span>
          <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
            <span className="text-[0.85rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">API Performance</span>
            <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">Good</span>
          </div>
          <span className="flex-shrink-0 flex items-center justify-end">
            <span className="inline-flex items-center px-[0.6rem] py-[0.22rem] rounded-full bg-[rgba(34,197,94,0.14)] text-[#16a34a] dark:text-[#4ade80] text-[0.7rem] font-semibold">Good</span>
          </span>
        </li>

        <li className="flex items-center gap-3 py-[0.45rem] min-w-0 border-t border-[#f1f5f9] dark:border-[#334155]">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[0.6rem] bg-[rgba(139,92,246,0.14)] text-[#8b5cf6]">
            <FiUsers size={16} />
          </span>
          <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0 flex flex-col gap-[0.1rem]">
              <span className="text-[0.85rem] font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">Active Sessions</span>
              <span className="text-[0.72rem] font-medium text-gray-400 dark:text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">1,245</span>
            </div>
            <div className="flex-shrink min-w-0 w-[120px] max-w-[140px] flex items-center">
              <svg
                viewBox={`0 0 ${SPARK_WIDTH} ${SPARK_HEIGHT}`}
                className={`w-full h-[44px] min-w-0 block ${
                  sparkDrawn ? "opacity-100" : ""
                }`}
                role="img"
                aria-label="Active sessions trend"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="sa-health-spark-fill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g
                  className={
                    "[transform-box:fill-box] [transform-origin:left_center] [transition:transform_1200ms_cubic-bezier(0.22,1,0.36,1)] motion-reduce:[transition:none] " +
                    (sparkDrawn ? "[transform:scaleX(1)]" : "[transform:scaleX(0)]")
                  }
                >
                  <path d={SPARK_AREA} fill="url(#sa-health-spark-fill)" />
                </g>
                <path
                  ref={sparkLineRef}
                  d={SPARK_LINE}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={sparkLen || 1}
                  strokeDashoffset={sparkDrawn ? 0 : sparkLen || 1}
                  className="[transition:stroke-dashoffset_1200ms_cubic-bezier(0.22,1,0.36,1)] motion-reduce:[transition:none]"
                />
                <circle
                  className={
                    (sparkDrawn ? "opacity-100 " : "opacity-0 ") +
                    "[transition:opacity_250ms_ease_1100ms] motion-reduce:opacity-100 motion-reduce:[transition:none]"
                  }
                  cx={SPARK_POINTS[SPARK_POINTS.length - 1].x}
                  cy={SPARK_POINTS[SPARK_POINTS.length - 1].y}
                  r="3.5"
                  fill="#8b5cf6"
                />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default SystemHealth;