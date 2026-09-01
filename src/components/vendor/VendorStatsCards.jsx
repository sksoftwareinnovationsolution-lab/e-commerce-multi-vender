import vendor1 from "../../assets/images/vendordashboard/vendor1.png";
import vendor2 from "../../assets/images/vendordashboard/vendor2.png";
import vendor3 from "../../assets/images/vendordashboard/vendor3.png";
import vendor4 from "../../assets/images/vendordashboard/vendor4.png";
import vendor5 from "../../assets/images/vendordashboard/vendor5.png";
import vendor6 from "../../assets/images/vendordashboard/vendor6.png";
import "./VendorStatsCards.css";

const CARDS = [
  {
    id: "earnings",
    title: "Total Earnings",
    value: "\u20B975,430",
    icon: vendor1,
    trend: { direction: "up", percent: "16.8%", label: "vs last week" },
  },
  {
    id: "bookings",
    title: "Total Bookings",
    value: "1,248",
    icon: vendor2,
    trend: { direction: "up", percent: "12.5%", label: "vs last week" },
  },
  {
    id: "completed",
    title: "Completed Bookings",
    value: "982",
    icon: vendor3,
    trend: { direction: "up", percent: "14.2%", label: "vs last week" },
  },
  {
    id: "customers",
    title: "Total Customers",
    value: "856",
    icon: vendor4,
    trend: { direction: "up", percent: "10.7%", label: "vs last week" },
  },
  {
    id: "rating",
    title: "Average Rating",
    value: "4.8",
    icon: vendor6,
    reviews: { count: 324 },
  },
  {
    id: "wallet",
    title: "Wallet Balance",
    value: "\u20B918,750",
    icon: vendor5,
    subtext: "Available to withdraw",
  },
];

function VendorStatsCards() {
  return (
    <div className="vd-stats">
      {CARDS.map((card) => (
        <article key={card.id} className="vd-stat-card">
          <div className="vd-stat-card__body">
            <div className="vd-stat-card__info">
              <h3 className="vd-stat-card__title">{card.title}</h3>
              <p className="vd-stat-card__value">{card.value}</p>

              {card.trend && (
                <span
                  className={`vd-stat-card__trend vd-stat-card__trend--${card.trend.direction}`}
                >
                  <span className="vd-stat-card__arrow">
                    {card.trend.direction === "up" ? "\u2191" : "\u2193"}
                  </span>{" "}
                  {card.trend.percent}{" "}
                  <span className="vd-stat-card__trend-label">
                    {card.trend.label}
                  </span>
                </span>
              )}

              {card.reviews && (
                <span className="vd-stat-card__reviews">
                  <span className="vd-stat-card__star">\u2605</span> From{" "}
                  {card.reviews.count} reviews
                </span>
              )}

              {card.subtext && (
                <span className="vd-stat-card__subtext">{card.subtext}</span>
              )}
            </div>

            <div className="vd-stat-card__icon">
              <img
                src={card.icon}
                alt=""
                className="vd-stat-card__icon-img"
              />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default VendorStatsCards;
