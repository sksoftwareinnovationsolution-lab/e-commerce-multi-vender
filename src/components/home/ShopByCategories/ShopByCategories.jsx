import { Link } from "react-router-dom";

const SHOP_CATEGORIES = [
  { id: 1, slug: "electronics", label: "Electronics", image: "/categories/electronics.png" },
  { id: 2, slug: "fashion", label: "Fashion", image: "/categories/fashion.png" },
  { id: 3, slug: "home", label: "Home", image: "/categories/home-living.png" },
  { id: 4, slug: "beauty", label: "Beauty", image: "/categories/beauty.png" },
  { id: 5, slug: "grocery", label: "Grocery", image: "/categories/grocery.png" },
  { id: 6, slug: "automobile", label: "Automobile", image: "/categories/automobile.png" },
  { id: 7, slug: "pets", label: "Pets", image: "/categories/pets.png" },
  { id: 8, slug: "gaming", label: "Gaming", image: "/categories/gaming.png" },
];

function ShopByCategories() {
  return (
    <section className="shop-by-cats" aria-label="Shop By Category">
      <div className="shop-by-cats__header">
        <div className="shop-by-cats__header-text">
          <h2 className="shop-by-cats__title">Shop By Category</h2>
          <p className="shop-by-cats__subtitle">
            Explore thousands of products across top categories.
          </p>
        </div>
        <Link to="/shop" className="shop-by-cats__view-all">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      <div className="shop-by-cats__row">
        {SHOP_CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="shop-by-cats__card"
          >
            <div className="shop-by-cats__card-img">
              <img src={cat.image} alt={cat.label} loading="lazy" />
            </div>
            <span className="shop-by-cats__card-label">{cat.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategories;
