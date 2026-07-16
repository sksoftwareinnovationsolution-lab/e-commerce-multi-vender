import "../shop/ProductCard.css";

function ProductCard() {
  return (
    <article className="pcard">
      <div className="pcard__header">
        <span className="pcard__badge">-25%</span>
        <button className="pcard__wishlist" type="button" aria-label="Add to wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="pcard__image">
        <div className="pcard__placeholder">Image</div>
      </div>

      <div className="pcard__body">
        <span className="pcard__brand">Samsung</span>
        <h3 className="pcard__name">Wireless Bluetooth Headphones</h3>
        <div className="pcard__rating">
          <span className="pcard__stars">★★★★☆</span>
          <span className="pcard__rating-count">(2,456)</span>
        </div>
        <div className="pcard__prices">
          <span className="pcard__price">₹1,249</span>
          <span className="pcard__old-price">₹1,699</span>
        </div>
      </div>

      <div className="pcard__actions">
        <button className="pcard__btn pcard__btn--cart" type="button">
          Add to Cart
        </button>
        <button className="pcard__btn pcard__btn--buy" type="button">
          Buy Now
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
