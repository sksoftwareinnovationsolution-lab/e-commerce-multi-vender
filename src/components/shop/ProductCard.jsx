import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { getProductById } from "../../data/products";
import "../shop/ProductCard.css";

const PLACEHOLDER_PRODUCT = {
  brand: "Samsung",
  name: "Wireless Bluetooth Headphones",
  description: "Bluetooth Headphones",
  price: 1249,
  oldPrice: 1699,
  discount: "-25%",
  rating: "4.5",
  ratingCount: "2,456",
  image: null,
  vendor: "Samsung Official Store",
};

function ProductCard({ id }) {
  const { addItem } = useCart();

  const product = getProductById(id);
  const data = product.name ? product : { ...PLACEHOLDER_PRODUCT, id };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(data);
  };

  return (
    <Link to={`/product/${id}`} className="pcard-link">
      <article className="pcard">
        <div className="pcard__header">
          <span className="pcard__badge">{data.discount}</span>
          <button className="pcard__wishlist" type="button" aria-label="Add to wishlist" onClick={(e) => e.stopPropagation()}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>

        <div className="pcard__image">
          {data.image ? (
            <img className="pcard__img" src={data.image} alt={data.name} loading="lazy" />
          ) : (
            <div className="pcard__placeholder">Image</div>
          )}
        </div>

        <div className="pcard__body">
          <span className="pcard__brand">{data.brand}</span>
          <h3 className="pcard__name">{data.name}</h3>
          <p className="pcard__description">{data.description}</p>
          <div className="pcard__rating">
            <span className="pcard__stars">⭐ {data.rating}</span>
            <span className="pcard__rating-count">({data.ratingCount})</span>
          </div>
          <div className="pcard__prices">
            <span className="pcard__price">₹{data.price.toLocaleString("en-IN")}</span>
            <span className="pcard__old-price">₹{data.oldPrice.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <div className="pcard__actions">
          <button className="pcard__btn pcard__btn--cart" type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="pcard__btn pcard__btn--buy" type="button" onClick={(e) => e.stopPropagation()}>
            Buy Now
          </button>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
