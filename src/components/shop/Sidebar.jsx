import { useState } from "react";
import "../shop/Sidebar.css";

const categoryList = [
  { label: "Electronics", count: 1240 },
  { label: "Fashion", count: 890 },
  { label: "Home & Kitchen", count: 560 },
  { label: "Beauty", count: 320 },
  { label: "Grocery", count: 410 },
  { label: "Automobile", count: 185 },
  { label: "Sports", count: 230 },
  { label: "Books", count: 175 },
];

const brandList = [
  { label: "Samsung", count: 312 },
  { label: "Apple", count: 198 },
  { label: "HP", count: 145 },
  { label: "Dell", count: 112 },
  { label: "Boat", count: 267 },
  { label: "Sony", count: 89 },
  { label: "LG", count: 134 },
  { label: "Puma", count: 203 },
];

const ratingOptions = [5, 4, 3, 2, 1];

function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) =>
    i < count ? "★" : "☆"
  ).join("");
}

function Sidebar() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(50000);
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
    setPriceRange(50000);
    setSelectedBrands([]);
    setSelectedRating(null);
    setSelectedAvailability([]);
    setSelectedDiscount([]);
    setBrandSearch("");
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
        <button className="sidebar__view-all" type="button">
          View All Categories
        </button>
      </div>

      {/* Price */}
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Filter by Price</h3>
        <div className="sidebar__price">
          <input
            type="range"
            className="sidebar__slider"
            min="0"
            max="50000"
            step="500"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div className="sidebar__price-labels">
            <span>₹0</span>
            <span>₹{priceRange.toLocaleString("en-IN")}</span>
          </div>
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
          {["In Stock", "Out Of Stock"].map((opt) => (
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
          {["10%+", "20%+", "30%+", "40%+", "50%+"].map((d) => (
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
        Clear Filters
      </button>
    </aside>
  );
}

export default Sidebar;
