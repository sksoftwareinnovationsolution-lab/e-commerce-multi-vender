import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/useCart";
import "./RelatedProducts.css";

const relatedItems = [
  { id: 1, brand: "Samsung", name: "Galaxy Buds2 — Wireless Earbuds", price: "₹3,499", oldPrice: "₹5,999", discount: "42%", rating: 4.1, reviews: 982 },
  { id: 2, brand: "Sony", name: "WF-1000XM5 — ANC Earbuds", price: "₹17,990", oldPrice: "₹24,990", discount: "28%", rating: 4.6, reviews: 2341 },
  { id: 3, brand: "Boat", name: "Airdopes 141 — TWS Earbuds", price: "₹1,099", oldPrice: "₹4,490", discount: "76%", rating: 4.0, reviews: 15670 },
  { id: 4, brand: "JBL", name: "Tune 230NC — Wireless Earbuds", price: "₹4,999", oldPrice: "₹7,999", discount: "38%", rating: 4.3, reviews: 1250 },
  { id: 5, brand: "OnePlus", name: "Buds Pro 2 — ANC Earbuds", price: "₹7,999", oldPrice: "₹11,999", discount: "33%", rating: 4.4, reviews: 876 },
  { id: 6, brand: "Apple", name: "AirPods Pro 2 — ANC Earbuds", price: "₹24,900", oldPrice: "₹27,900", discount: "11%", rating: 4.7, reviews: 4520 },
  { id: 7, brand: "Sennheiser", name: "Momentum TW4 — Earbuds", price: "₹21,990", oldPrice: "₹27,990", discount: "21%", rating: 4.5, reviews: 643 },
  { id: 8, brand: "Realme", name: "Buds Air 5 — TWS Earbuds", price: "₹2,499", oldPrice: "₹4,999", discount: "50%", rating: 4.2, reviews: 3890 },
];

function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) =>
    i < count ? "★" : "☆"
  ).join("");
}

function RelatedProducts() {
  const [wishlist, setWishlist] = useState([]);
  const scrollRef = useRef(null);
  const { addItem } = useCart();

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 260;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="related">
      <div className="related__header">
        <h2 className="related__title">Related Products</h2>
        <div className="related__arrows">
          <button className="related__arrow" type="button" onClick={() => scroll("left")} aria-label="Scroll left">
            ‹
          </button>
          <button className="related__arrow" type="button" onClick={() => scroll("right")} aria-label="Scroll right">
            ›
          </button>
        </div>
      </div>

      <div className="related__track" ref={scrollRef}>
        {relatedItems.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="related__card-link">
          <article className="related__card">
            <div className="related__card-top">
              <span className="related__card-discount">-{item.discount}</span>
              <button
                className={`related__card-wishlist ${wishlist.includes(item.id) ? "related__card-wishlist--active" : ""}`}
                type="button"
                onClick={(e) => { e.stopPropagation(); toggleWishlist(item.id); }}
                aria-label="Toggle wishlist"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={wishlist.includes(item.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            <div className="related__card-image">
              <div className="related__card-placeholder">Image</div>
            </div>

            <div className="related__card-body">
              <span className="related__card-brand">{item.brand}</span>
              <h3 className="related__card-name">{item.name}</h3>
              <div className="related__card-rating">
                <span className="related__card-stars">{renderStars(item.rating)}</span>
                <span className="related__card-rating-count">({item.reviews.toLocaleString()})</span>
              </div>
              <div className="related__card-prices">
                <span className="related__card-price">{item.price}</span>
                <span className="related__card-old-price">{item.oldPrice}</span>
              </div>
            </div>

            <div className="related__card-actions">
              <button className="related__card-btn related__card-btn--cart" type="button" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem({
                  id: item.id,
                  brand: item.brand,
                  name: item.name,
                  price: parseInt(item.price.replace(/[₹,]/g, ""), 10),
                  image: null,
                  vendor: `${item.brand} Store`,
                });
              }}>
                Add to Cart
              </button>
              <button className="related__card-btn related__card-btn--buy" type="button" onClick={(e) => e.stopPropagation()}>
                Buy Now
              </button>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
