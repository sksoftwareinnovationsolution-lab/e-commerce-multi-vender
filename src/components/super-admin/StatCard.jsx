function StatCard({ icon, iconBg, title, value, trend }) {
  const isUp = trend.direction === "up";

  return (
    <article className="sa-stat-card">
      <div className="sa-stat-card__body">
        <div className="sa-stat-card__info">
          <h3 className="sa-stat-card__title">{title}</h3>
          <p className="sa-stat-card__value">{value}</p>
          <span
            className={`sa-stat-card__trend ${
              isUp ? "sa-stat-card__trend--up" : "sa-stat-card__trend--down"
            }`}
          >
            <span className="sa-stat-card__arrow">{isUp ? "↑" : "↓"}</span>
            {trend.percent} <span className="sa-stat-card__trend-label">vs last week</span>
          </span>
        </div>

        <div
          className="sa-stat-card__icon"
          style={{ backgroundColor: iconBg }}
        >
          <img src={icon} alt="" className="sa-stat-card__icon-img" />
        </div>
      </div>
    </article>
  );
}

export default StatCard;
