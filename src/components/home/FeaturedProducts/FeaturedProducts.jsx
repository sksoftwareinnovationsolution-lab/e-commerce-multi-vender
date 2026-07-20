import { useCart } from "../../../context/useCart";
import boatImg from "../../../assets/images/products/boat-wave-call-2.png";
import noiseImg from "../../../assets/images/products/noise-buds-vs103.png";
import lgImg from "../../../assets/images/products/lg-43-inch-4k-tv.png";
import pumaImg from "../../../assets/images/products/puma-running-shoes.png";
import miImg from "../../../assets/images/products/mi-power-bank-20000mah.png";
import "./FeaturedProducts.css";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "boAt Wave Call 2 Smart Watch",
    price: 1599,
    oldPrice: 1999,
    discount: -20,
    image: boatImg,
    rating: 4.5,
    reviews: "2.3k",
  },
  {
    id: 2,
    name: "Noise Buds VS103 Wireless Earbuds",
    price: 1099,
    oldPrice: 1299,
    discount: -15,
    image: noiseImg,
    rating: 4.6,
    reviews: "1.8k",
  },
  {
    id: 3,
    name: "LG 43 Inch 4K Ultra HD Smart TV",
    price: 28999,
    oldPrice: 31999,
    discount: -10,
    image: lgImg,
    rating: 4.4,
    reviews: "2.5k",
  },
  {
    id: 4,
    name: "Puma Men's Street Running Shoes",
    price: 1799,
    oldPrice: 2399,
    discount: -25,
    image: pumaImg,
    rating: 4.3,
    reviews: "1.2k",
  },
  {
    id: 5,
    name: "Mi 20000mAh Power Bank",
    subtitle: "18W Fast Charging",
    price: 1299,
    oldPrice: 1599,
    discount: -18,
    image: miImg,
    rating: 4.5,
    reviews: "2.2k",
  },
];

function formatPrice(amount) {
  return amount.toLocaleString("en-IN");
}

function StarRating({ rating, reviews }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="fp-card__rating">
      <span className="fp-card__stars">
        {Array.from({ length: full }, (_, i) => (
          <span key={`full-${i}`} className="fp-star fp-star--full">
            &#9733;
          </span>
        ))}
        {hasHalf && <span className="fp-star fp-star--half">&#9733;</span>}
        {Array.from({ length: empty }, (_, i) => (
          <span key={`empty-${i}`} className="fp-star fp-star--empty">
            &#9733;
          </span>
        ))}
      </span>
      <span className="fp-card__rating-text">
        {rating} ({reviews})
      </span>
    </div>
  );
}

function FeaturedProducts() {
  const { addItem } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <section className="fp-section">
      <div className="fp-grid">
        {FEATURED_PRODUCTS.map((product) => (
          <article key={product.id} className="fp-card">
            <div className="fp-card__badge">{product.discount}%</div>

            <div className="fp-card__image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="fp-card__image"
                loading="lazy"
              />
            </div>

            <div className="fp-card__body">
              <h3 className="fp-card__name" title={product.name}>
                {product.name}
              </h3>
              {product.subtitle && (
                <span className="fp-card__subtitle">{product.subtitle}</span>
              )}

              <StarRating rating={product.rating} reviews={product.reviews} />

              <div className="fp-card__prices">
                <span className="fp-card__price">
                  &#8377;{formatPrice(product.price)}
                </span>
                <span className="fp-card__old-price">
                  &#8377;{formatPrice(product.oldPrice)}
                </span>
              </div>
            </div>

            <div className="fp-card__footer">
              <button
                type="button"
                className="fp-card__btn"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
