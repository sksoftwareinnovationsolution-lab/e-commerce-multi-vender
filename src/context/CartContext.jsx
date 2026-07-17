import { createContext, useState, useCallback, useMemo, useEffect } from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "marketplace_cart";
const DELIVERY_CHARGES = 49;
const FREE_DELIVERY_THRESHOLD = 999;

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = useCallback((product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, 10) }
            : item
        );
      }
      return [...prev, { ...product, quantity: Math.min(quantity, 10) }];
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    const clamped = Math.max(1, Math.min(quantity, 10));
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: clamped } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const value = useMemo(() => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const deliveryCharges =
      cartItems.length === 0 || totalPrice >= FREE_DELIVERY_THRESHOLD
        ? 0
        : DELIVERY_CHARGES;
    const grandTotal = totalPrice + deliveryCharges;

    return {
      cartItems,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      deliveryCharges,
      grandTotal,
    };
  }, [cartItems, addItem, removeItem, updateQuantity, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
