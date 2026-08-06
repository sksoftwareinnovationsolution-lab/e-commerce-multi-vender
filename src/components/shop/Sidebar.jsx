import { useState } from "react";
import "../shop/Sidebar.css";

const MIN_PRICE = 0;
const MAX_PRICE = 50000;
const PRICE_STEP = 500;

const categoryList = [
  { label: "Electronics", count: 1240 },
  { label: "Fashion", count: 890 },
  { label: "Home & Kitchen", count: 560 },
  { label: "Beauty", count: 320 },
  { label: "Sports", count: 230 },
  { label: "Bags & Luggage", count: 175 },
];

const brandList = [
  { label: "boAt", count: 267 },
  { label: "Noise", count: 198 },
  { label: "Samsung", count: 312 },
  { label: "LG", count: 134 },
  { label: "HP", count: 145 },
  { label: "Sony", count: 89 },
  { label: "Puma", count: 203 },
  { label: "Mi", count: 156 },
  { label: "Philips", count: 112 },
  { label: "Bella Vita", count: 98 },
  { label: "Safari", count: 76 },
  { label: "Wildcraft", count: 64 },
];

const ratingOptions = [5, 4, 3];

const availabilityOptions = ["In Stock", "Out of Stock"];

const discountOptions = [
  "10% or more",
  "20% or more",
  "30% or more",
  "50% or more",
];

function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) =>
    i < count ? "★" : "☆"
  ).join("");
}

function Sidebar() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState([]);
  const [brandSearch, setBrandSearch] = useState("");

  const toggleArrayItem = (arr, setArr, item) => {
    setArr((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setMinPrice(MIN_PRICE);
    setMaxPrice(MAX_PRICE);
    setSelectedBrands([]);
    setSelectedRating(null);
    setSelectedAvailability([]);
    setSelectedDiscount([]);
    setBrandSearch("");
  };

  const handleMinPrice = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - PRICE_STEP);
    setMinPrice(value);
  };

  const handleMaxPrice = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + PRICE_STEP);
    setMaxPrice(value);
  };

  const filteredBrands = brandList.filter((b) =>
    b.label.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <aside className="sidebar">
      {/* Categories */}
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Categories</h3>
        <ul className="sidebar__list">
          {categoryList.map((cat) => (
            <li key={cat.label}>
              <label className="sidebar__option">
                <input
                  type="checkbox"
                  className="sidebar__checkbox"
                  checked={selectedCategories.includes(cat.label)}
                  onChange={() =>
                    toggleArrayItem(
                      selectedCategories,
                      setSelectedCategories,
                      cat.label
                    )
                  }
                />
                <span className="sidebar__label">{cat.label}</span>
                <span className="sidebar__count">{cat.count}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Filter by Price</h3>
        <div
          className="sidebar__price-range"
          style={{
            "--range-min": `${(minPrice / MAX_PRICE) * 100}%`,
            "--range-max": `${(maxPrice / MAX_PRICE) * 100}%`,
          }}
        >
          <input
            type="range"
            className="sidebar__slider sidebar__slider--min"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={PRICE_STEP}
            value={minPrice}
            onChange={handleMinPrice}
            aria-label="Minimum price"
          />
          <input
            type="range"
            className="sidebar__slider sidebar__slider--max"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={PRICE_STEP}
            value={maxPrice}
            onChange={handleMaxPrice}
            aria-label="Maximum price"
          />
        </div>
        <div className="sidebar__price-labels">
          <span>₹{minPrice.toLocaleString("en-IN")}</span>
          <span>₹{maxPrice.toLocaleString("en-IN")}</span>
        </div>
      </div>

      {/* Brands */}
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Brands</h3>
        <input
          type="text"
          className="sidebar__brand-search"
          placeholder="Search brand..."
          value={brandSearch}
          onChange={(e) => setBrandSearch(e.target.value)}
        />
        <ul className="sidebar__list">
          {filteredBrands.map((brand) => (
            <li key={brand.label}>
              <label className="sidebar__option">
                <input
                  type="checkbox"
                  className="sidebar__checkbox"
                  checked={selectedBrands.includes(brand.label)}
                  onChange={() =>
                    toggleArrayItem(
                      selectedBrands,
                      setSelectedBrands,
                      brand.label
                    )
                  }
                />
                <span className="sidebar__label">{brand.label}</span>
                <span className="sidebar__count">{brand.count}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating */}
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Customer Rating</h3>
        <ul className="sidebar__list">
          {ratingOptions.map((r) => (
            <li key={r}>
              <label className="sidebar__option">
                <input
                  type="radio"
                  className="sidebar__radio"
                  name="rating"
                  checked={selectedRating === r}
                  onChange={() => setSelectedRating(r)}
                />
                <span className="sidebar__stars">{renderStars(r)}</span>
                <span className="sidebar__label">&amp; up</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Availability */}
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Availability</h3>
        <ul className="sidebar__list">
          {availabilityOptions.map((opt) => (
            <li key={opt}>
              <label className="sidebar__option">
                <input
                  type="checkbox"
                  className="sidebar__checkbox"
                  checked={selectedAvailability.includes(opt)}
                  onChange={() =>
                    toggleArrayItem(
                      selectedAvailability,
                      setSelectedAvailability,
                      opt
                    )
                  }
                />
                <span className="sidebar__label">{opt}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Discount */}
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Discount</h3>
        <ul className="sidebar__list">
          {discountOptions.map((d) => (
            <li key={d}>
              <label className="sidebar__option">
                <input
                  type="checkbox"
                  className="sidebar__checkbox"
                  checked={selectedDiscount.includes(d)}
                  onChange={() =>
                    toggleArrayItem(
                      selectedDiscount,
                      setSelectedDiscount,
                      d
                    )
                  }
                />
                <span className="sidebar__label">{d}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="sidebar__clear"
        type="button"
        onClick={clearFilters}
      >
        Clear All Filters
      </button>
    </aside>
  );
}

export default Sidebar;
