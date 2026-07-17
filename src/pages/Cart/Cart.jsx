import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    deliveryCharges,
    grandTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty__icon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c4b5fd"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
        <h2 className="cart-empty__title">Your cart is empty</h2>
        <p className="cart-empty__text">
          Looks like you haven&apos;t added any products yet. Start exploring
          and find something you love!
        </p>
        <Link to="/" className="cart-empty__btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cart">
        <div className="cart__header">
          <h1 className="cart__title">Shopping Cart</h1>
          <span className="cart__count">{totalItems} item{totalItems !== 1 ? "s" : ""}</span>
        </div>

        <div className="cart__layout">
          <div className="cart__items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__image">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="cart-item__placeholder">Image</div>
                  )}
                </div>

                <div className="cart-item__details">
                  <div className="cart-item__top">
                    <div className="cart-item__info">
                      <span className="cart-item__brand">{item.brand}</span>
                      <h3 className="cart-item__name">{item.name}</h3>
                      <span className="cart-item__vendor">by {item.vendor}</span>
                    </div>
                    <button
                      className="cart-item__remove"
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>

                  <div className="cart-item__bottom">
                    <div className="cart-item__qty">
                      <button
                        className="cart-item__qty-btn"
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="cart-item__qty-value">{item.quantity}</span>
                      <button
                        className="cart-item__qty-btn"
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="cart-item__price">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart__footer-actions">
              <Link to="/" className="cart__continue-btn">
                ← Continue Shopping
              </Link>
              <button
                className="cart__clear-btn"
                type="button"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="cart__summary">
            <h2 className="cart__summary-title">Order Summary</h2>

            <div className="cart__summary-rows">
              <div className="cart__summary-row">
                <span className="cart__summary-label">Total Items</span>
                <span className="cart__summary-value">{totalItems}</span>
              </div>
              <div className="cart__summary-row">
                <span className="cart__summary-label">Total Price</span>
                <span className="cart__summary-value">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="cart__summary-row">
                <span className="cart__summary-label">Delivery Charges</span>
                <span
                  className={`cart__summary-value ${
                    deliveryCharges === 0 ? "cart__summary-value--free" : ""
                  }`}
                >
                  {deliveryCharges === 0 ? "FREE" : `₹${deliveryCharges}`}
                </span>
              </div>
            </div>

            <div className="cart__summary-divider" />

            <div className="cart__summary-row cart__summary-row--total">
              <span className="cart__summary-label">Grand Total</span>
              <span className="cart__summary-value">
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>

            {totalPrice < 999 && (
              <p className="cart__summary-note">
                Add ₹{(999 - totalPrice).toLocaleString("en-IN")} more for free
                delivery!
              </p>
            )}

            <button className="cart__checkout-btn" type="button">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
