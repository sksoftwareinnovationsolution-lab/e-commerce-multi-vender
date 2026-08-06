/* ========================================
   products.js — Dummy Product Data
   Structured for easy backend API integration.
   Replace ALL_PRODUCTS with API call later.
   ======================================== */

import boatWaveCall2 from "../assets/images/products/boat-wave-call-2.png";
import noiseBudsVs103 from "../assets/images/products/noise-buds-vs103.png";
import lg43Inch4kTv from "../assets/images/products/lg-43-inch-4k-tv.png";
import pumaRunningShoes from "../assets/images/products/puma-running-shoes.png";
import miPowerBank20000mah from "../assets/images/products/mi-power-bank-20000mah.png";
import samsungM14 from "../assets/images/products/Samsung-m14.png";
import hp15 from "../assets/images/products/HP-15.png";
import sonyWhCh510 from "../assets/images/products/Sony.png";
import bellaVita from "../assets/images/products/bella-vita.png";
import philipsGrinder from "../assets/images/products/Phillips-grinder.png";
import safariBag from "../assets/images/products/safari-bag.png";
import wildcraft from "../assets/images/products/wildcraft.png";

export const ALL_PRODUCTS = Array.from({ length: 150 }, (_, i) => i + 1);

export const PRODUCTS = {
  1: {
    id: 1,
    brand: "boAt",
    name: "boAt Wave Call 2",
    description: "Smart Watch",
    price: 1599,
    oldPrice: 1999,
    discount: "-20%",
    rating: "4.3",
    ratingCount: "2.1K",
    image: boatWaveCall2,
    vendor: "boAt Official Store",
  },
  2: {
    id: 2,
    brand: "Noise",
    name: "Noise Buds VS103",
    description: "Wireless Earbuds",
    price: 1099,
    oldPrice: 1299,
    discount: "-15%",
    rating: "4.4",
    ratingCount: "1.8K",
    image: noiseBudsVs103,
    vendor: "Noise Official Store",
  },
  3: {
    id: 3,
    brand: "LG",
    name: "LG 43 Inch 4K TV",
    description: "Ultra HD Smart TV",
    price: 28999,
    oldPrice: 31999,
    discount: "-10%",
    rating: "4.6",
    ratingCount: "2.5K",
    image: lg43Inch4kTv,
    vendor: "LG Electronics India",
  },
  4: {
    id: 4,
    brand: "Puma",
    name: "Puma Men's Shoes",
    description: "Running Shoes",
    price: 1799,
    oldPrice: 2399,
    discount: "-25%",
    rating: "4.3",
    ratingCount: "3.2K",
    image: pumaRunningShoes,
    vendor: "Puma India",
  },
  5: {
    id: 5,
    brand: "Mi",
    name: "20000mAh Power Bank",
    description: "18W Fast Charging",
    price: 1799,
    oldPrice: 2399,
    discount: "-10%",
    rating: "4.5",
    ratingCount: "2.9K",
    image: miPowerBank20000mah,
    vendor: "Mi Official Store",
  },
  6: {
    id: 6,
    brand: "Samsung",
    name: "Samsung Galaxy M14 5G",
    description: "(6GB RAM, 128GB)",
    price: 12499,
    oldPrice: 16999,
    discount: "-18%",
    rating: "4.4",
    ratingCount: "1.6K",
    image: samsungM14,
    vendor: "Samsung Official Store",
  },
  7: {
    id: 7,
    brand: "HP",
    name: "HP 15s Intel Core i5",
    description: "11th Gen Laptop",
    price: 32999,
    oldPrice: 37499,
    discount: "-12%",
    rating: "4.4",
    ratingCount: "960",
    image: hp15,
    vendor: "HP Official Store",
  },
  8: {
    id: 8,
    brand: "Sony",
    name: "Sony WH-CH510",
    description: "Wireless Headphones",
    price: 2399,
    oldPrice: 2999,
    discount: "-20%",
    rating: "4.3",
    ratingCount: "760",
    image: sonyWhCh510,
    vendor: "Sony Official Store",
  },
  9: {
    id: 9,
    brand: "Bella Vita",
    name: "Bella Vita Luxury",
    description: "Perfume for Men",
    price: 849,
    oldPrice: 999,
    discount: "-10%",
    rating: "4.5",
    ratingCount: "1.2K",
    image: bellaVita,
    vendor: "Bella Vita Official Store",
  },
  10: {
    id: 10,
    brand: "Philips",
    name: "Philips Mixer Grinder",
    description: "750W, 3 Jars",
    price: 2699,
    oldPrice: 2999,
    discount: "-10%",
    rating: "4.3",
    ratingCount: "640",
    image: philipsGrinder,
    vendor: "Philips India",
  },
  11: {
    id: 11,
    brand: "Safari",
    name: "Safari Polypropylene",
    description: "55cm Cabin Luggage",
    price: 2199,
    oldPrice: 2599,
    discount: "-15%",
    rating: "4.4",
    ratingCount: "430",
    image: safariBag,
    vendor: "Safari Official Store",
  },
  12: {
    id: 12,
    brand: "Wildcraft",
    name: "Wildcraft Laptop",
    description: "Backpack 30L",
    price: 1199,
    oldPrice: 1499,
    discount: "-20%",
    rating: "4.3",
    ratingCount: "320",
    image: wildcraft,
    vendor: "Wildcraft India",
  },
};

/**
 * Helper to get product by ID.
 * Later this can be replaced with an API call.
 */
export function getProductById(id) {
  return PRODUCTS[id] || { id };
}
