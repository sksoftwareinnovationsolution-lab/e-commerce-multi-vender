import { useState } from "react";
import { useCart } from "../../../context/useCart";
import "./ProductInfo.css";

const colorOptions = [
  { name: "Black", hex: "#111827" },
  { name: "White", hex: "#f9fafb" },
  { name: "Purple", hex: "#7c3aed" },
  { name: "Blue", hex: "#2563eb" },
];

const sizeOptions = ["XS", "S", "M", "L", "XL"];

function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();

  const incrementQty = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrementQty = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleAddToCart = () => {
    addItem({
      id: "samsung-galaxy-buds-pro",
      brand: "Samsung",
      name: "Samsung Galaxy Buds Pro — Wireless ANC Earbuds",
      price: 4999,
      image: null,
      vendor: "Samsung Official Store",
      color: selectedColor,
      size: selectedSize,
    }, quantity);
  };

  return (
    <div className="pinfo">
      <div className="pinfo__top">
        <span className="pinfo__category">Electronics</span>
        <span className="pinfo__brand">Samsung</span>
      </div>

      <h1 className="pinfo__title">Samsung Galaxy Buds Pro — Wireless ANC Earbuds</h1>

      <div className="pinfo__rating">
        <span className="pinfo__stars">★★★★☆</span>
        <span className="pinfo__rating-value">4.2</span>
        <span className="pinfo__review-count">1,847 reviews</span>
      </div>

      <div className="pinfo__price-block">
        <div className="pinfo__price-row">
          <span className="pinfo__price">₹4,999</span>
          <span className="pinfo__old-price">₹8,999</span>
          <span className="pinfo__discount-badge">44% OFF</span>
        </div>
        <p className="pinfo__tax-info">Inclusive of all taxes. Free shipping on orders above ₹499.</p>
      </div>

      <div className="pinfo__divider" />

      <div className="pinfo__meta">
        <div className="pinfo__meta-item">
          <span className="pinfo__meta-label">Availability</span>
          <span className="pinfo__meta-value pinfo__meta-value--green">In Stock</span>
        </div>
        <div className="pinfo__meta-item">
          <span className="pinfo__meta-label">SKU</span>
          <span className="pinfo__meta-value">SM-GPB-PRO-001</span>
        </div>
        <div className="pinfo__meta-item">
          <span className="pinfo__meta-label">Delivery</span>
          <span className="pinfo__meta-value">Free delivery by <strong>Jul 20 – Jul 22</strong></span>
        </div>
      </div>

      <div className="pinfo__divider" />

      {/* Color Selection */}
      <div className="pinfo__section">
        <h3 className="pinfo__section-title">
          Color: <span className="pinfo__section-value">{selectedColor}</span>
        </h3>
        <div className="pinfo__colors">
          {colorOptions.map((c) => (
            <button
              key={c.name}
              className={`pinfo__color-btn ${selectedColor === c.name ? "pinfo__color-btn--active" : ""}`}
              type="button"
              onClick={() => setSelectedColor(c.name)}
              aria-label={`Select color ${c.name}`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="pinfo__section">
        <h3 className="pinfo__section-title">
          Size: <span className="pinfo__section-value">{selectedSize}</span>
        </h3>
        <div className="pinfo__sizes">
          {sizeOptions.map((s) => (
            <button
              key={s}
              className={`pinfo__size-btn ${selectedSize === s ? "pinfo__size-btn--active" : ""}`}
              type="button"
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="pinfo__section">
        <h3 className="pinfo__section-title">Quantity</h3>
        <div className="pinfo__qty">
          <button
            className="pinfo__qty-btn"
            type="button"
            onClick={decrementQty}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="pinfo__qty-value">{quantity}</span>
          <button
            className="pinfo__qty-btn"
            type="button"
            onClick={incrementQty}
            disabled={quantity >= 10}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="pinfo__divider" />

      {/* Action Buttons */}
      <div className="pinfo__actions">
        <button
          className={`pinfo__wishlist-btn ${isWishlisted ? "pinfo__wishlist-btn--active" : ""}`}
          type="button"
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {isWishlisted ? "Wishlisted" : "Wishlist"}
        </button>

        <button className="pinfo__share-btn" type="button" aria-label="Share product">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>
      </div>

      <div className="pinfo__main-actions">
        <button className="pinfo__btn pinfo__btn--cart" type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="pinfo__btn pinfo__btn--buy" type="button">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
