/* ========================================
   products.js — Dummy Product Data
   Structured for easy backend API integration.
   Replace ALL_PRODUCTS with API call later.
   ======================================== */

export const ALL_PRODUCTS = Array.from({ length: 24 }, (_, i) => i + 1);

/**
 * Helper to get product by ID.
 * Later this can be replaced with an API call.
 */
export function getProductById(id) {
  return ALL_PRODUCTS.includes(id) ? { id } : null;
}
