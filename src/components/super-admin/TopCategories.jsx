import {
  FiChevronDown,
  FiMonitor,
  FiShoppingBag,
  FiHome,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

const RANGE_LABEL = "This Week";

const CATEGORIES = [
  {
    name: "Electronics",
    orders: "2,560 Orders",
    percent: "20.2%",
    icon: FiMonitor,
    bg: "rgba(139, 92, 246, 0.12)",
    color: "#8b5cf6",
  },
  {
    name: "Fashion",
    orders: "2,270 Orders",
    percent: "17.6%",
    icon: FiShoppingBag,
    bg: "rgba(249, 115, 22, 0.14)",
    color: "#f97316",
  },
  {
    name: "Home & Kitchen",
    orders: "1,985 Orders",
    percent: "15.8%",
    icon: FiHome,
    bg: "rgba(236, 72, 153, 0.12)",
    color: "#ec4899",
  },
  {
    name: "Beauty",
    orders: "1,520 Orders",
    percent: "12.1%",
    icon: FiHeart,
    bg: "rgba(59, 130, 246, 0.12)",
    color: "#3b82f6",
  },
  {
    name: "Grocery",
    orders: "1,460 Orders",
    percent: "9.1%",
    icon: FiShoppingCart,
    bg: "rgba(34, 197, 94, 0.14)",
    color: "#22c55e",
  },
];

function TopCategories() {
  return (
    <article className="sa-panel sa-categories">
      <div className="sa-panel__header">
        <h2 className="sa-panel__title">Top Categories</h2>
        <button className="sa-panel__dropdown" type="button">
          <span>{RANGE_LABEL}</span>
          <FiChevronDown size={14} />
        </button>
      </div>

      <ul className="sa-categories__list">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <li key={cat.name} className="sa-categories__row">
              <span
                className="sa-categories__icon"
                style={{ backgroundColor: cat.bg, color: cat.color }}
              >
                <Icon size={17} />
              </span>
              <div className="sa-categories__info">
                <span className="sa-categories__name">{cat.name}</span>
                <span className="sa-categories__orders">{cat.orders}</span>
              </div>
              <span className="sa-categories__percent">{cat.percent}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default TopCategories;
