import { FiTrendingUp, FiPercent } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import "./VendorEarningsSummary.css";

const EARNINGS_ROWS = [
  {
    label: "Total Earnings",
    value: "\u20B975,430",
    Icon: FiTrendingUp,
    color: "violet",
    positive: true,
  },
  {
    label: "Commission",
    value: "-\u20B97,543",
    Icon: FiPercent,
    color: "pink",
  },
  {
    label: "Payouts",
    value: "-\u20B949,137",
    Icon: FaWallet,
    color: "orange",
  },
];

function EarningsRow({ label, value, Icon, color, positive }) {
  return (
    <div className="vd-earnings-summary__row">
      <div className="vd-earnings-summary__row-left">
        <span
          className={`vd-earnings-summary__row-icon vd-earnings-summary__row-icon--${color}`}
        >
          <Icon size={11} />
        </span>
        <span className="vd-earnings-summary__row-label">
          {label}
        </span>
      </div>
      <span
        className={
          positive
            ? "vd-earnings-summary__row-value vd-earnings-summary__row-value--positive"
            : "vd-earnings-summary__row-value"
        }
      >
        {value}
      </span>
    </div>
  );
}

function VendorEarningsSummary() {
  return (
    <section className="vd-earnings-summary">
      <article className="vd-earnings-summary__card">
        <div className="vd-earnings-summary__header">
          <h2 className="vd-earnings-summary__title">
            Earnings Summary
          </h2>
          <select
            aria-label="This Week"
            className="vd-earnings-summary__select"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="vd-earnings-summary__rows">
          {EARNINGS_ROWS.map((row) => (
            <EarningsRow key={row.label} {...row} />
          ))}
        </div>

        <div className="vd-earnings-summary__net">
          <div className="vd-earnings-summary__net-left">
            <span className="vd-earnings-summary__net-icon">
              <FaWallet size={11} />
            </span>
            <div>
              <p className="vd-earnings-summary__net-label">
                Net Earnings
              </p>
              <p className="vd-earnings-summary__net-sublabel">
                Available to withdraw
              </p>
            </div>
          </div>
          <span className="vd-earnings-summary__net-value">
            {"\u20B9"}18,750
          </span>
        </div>
      </article>
    </section>
  );
}

export default VendorEarningsSummary;
