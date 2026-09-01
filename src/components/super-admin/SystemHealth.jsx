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
  return <FiCheckCircle size={18} className="sa-health__check" />;
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
    <article className="sa-panel sa-health">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">System Health</h2>
      </div>

      <ul className="sa-health__list">
        <li className="sa-health__row">
          <span className="sa-health__icon sa-health__icon--green">
            <FiServer size={16} />
          </span>
          <div className="sa-health__info">
            <span className="sa-health__title">Server Status</span>
            <span className="sa-health__value">All systems operational</span>
          </div>
          <span className="sa-health__side">
            <StatusCheck />
          </span>
        </li>

        <li className="sa-health__row">
          <span className="sa-health__icon sa-health__icon--blue">
            <FiDatabase size={16} />
          </span>
          <div className="sa-health__info">
            <span className="sa-health__title">Database</span>
            <span className="sa-health__value">Connected</span>
          </div>
          <span className="sa-health__side">
            <StatusCheck />
          </span>
        </li>

        <li className="sa-health__row sa-health__row--stacked">
          <span className="sa-health__icon sa-health__icon--purple">
            <FiHardDrive size={16} />
          </span>
          <div className="sa-health__info">
            <span className="sa-health__title">Storage Usage</span>
            <span className="sa-health__value">
              {Math.round(storage)}% / 100%
            </span>
          </div>
          <div className="sa-health__progress">
            <span
              className="sa-health__progress-fill"
              style={{ width: `${storage}%` }}
            />
          </div>
        </li>

        <li className="sa-health__row">
          <span className="sa-health__icon sa-health__icon--green">
            <FiActivity size={16} />
          </span>
          <div className="sa-health__info">
            <span className="sa-health__title">API Performance</span>
            <span className="sa-health__value">Good</span>
          </div>
          <span className="sa-health__side">
            <span className="sa-health__good">Good</span>
          </span>
        </li>

        <li className="sa-health__row sa-health__row--active">
          <span className="sa-health__icon sa-health__icon--purple">
            <FiUsers size={16} />
          </span>
          <div className="sa-health__active">
            <div className="sa-health__info">
              <span className="sa-health__title">Active Sessions</span>
              <span className="sa-health__value">1,245</span>
            </div>
            <div className="sa-health__spark">
              <svg
                viewBox={`0 0 ${SPARK_WIDTH} ${SPARK_HEIGHT}`}
                className={`sa-health__spark-svg ${
                  sparkDrawn ? "sa-health__spark-svg--drawn" : ""
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
                    sparkDrawn
                      ? "sa-health__spark-reveal sa-health__spark-reveal--done"
                      : "sa-health__spark-reveal"
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
                  className="sa-health__spark-line"
                />
                <circle
                  className="sa-health__spark-dot"
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