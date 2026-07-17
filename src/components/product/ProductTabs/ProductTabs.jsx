import { useState } from "react";
import "./ProductTabs.css";

const tabList = [
  { id: "description", label: "Description" },
  { id: "specifications", label: "Specifications" },
  { id: "reviews", label: "Reviews" },
  { id: "shipping", label: "Shipping & Returns" },
];

const specs = [
  { label: "Brand", value: "Samsung" },
  { label: "Model", value: "Galaxy Buds Pro" },
  { label: "Type", value: "In-Ear (TWS)" },
  { label: "Connectivity", value: "Bluetooth 5.2" },
  { label: "Battery Life", value: "Up to 28 hours (with case)" },
  { label: "ANC", value: "Active Noise Cancellation" },
  { label: "Water Resistance", value: "IPX7" },
  { label: "Weight", value: "6.3g per earbud" },
  { label: "Charging", value: "USB-C / Qi Wireless" },
  { label: "Warranty", value: "1 Year Manufacturer" },
];

const reviews = [
  {
    name: "Rahul M.",
    rating: 5,
    date: "Jul 10, 2026",
    text: "Amazing sound quality! The ANC works flawlessly. Battery lasts all day with moderate use. Highly recommended.",
  },
  {
    name: "Priya S.",
    rating: 4,
    date: "Jul 8, 2026",
    text: "Great earbuds for the price. Comfortable fit and the sound is crisp. Only minor complaint is the touch controls can be a bit sensitive.",
  },
  {
    name: "Amit K.",
    rating: 4,
    date: "Jul 5, 2026",
    text: "Good product overall. The noise cancellation is impressive for this price range. Build quality feels premium.",
  },
];

function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) =>
    i < count ? "★" : "☆"
  ).join("");
}

function DescriptionTab() {
  return (
    <div className="ptabs__content-block">
      <p className="ptabs__text">
        Experience crystal-clear audio with the Samsung Galaxy Buds Pro. These wireless earbuds
        feature advanced Active Noise Cancellation (ANC) technology that adapts to your environment,
        letting you immerse yourself in music or take calls without distractions.
      </p>
      <p className="ptabs__text">
        With IPX7 water resistance, these earbuds are built to withstand sweat and rain, making them
        perfect for workouts and outdoor activities. The ergonomic design ensures a comfortable and
        secure fit for extended listening sessions.
      </p>
      <h4 className="ptabs__subheading">Key Features</h4>
      <ul className="ptabs__list">
        <li>Active Noise Cancellation with ambient mode</li>
        <li>360 Audio for immersive spatial sound</li>
        <li>Up to 28 hours total battery life with charging case</li>
        <li>IPX7 water and sweat resistance</li>
        <li>Intelligent touch controls with voice detect</li>
        <li>Bluetooth 5.2 with seamless multi-device connectivity</li>
      </ul>
    </div>
  );
}

function SpecificationsTab() {
  return (
    <div className="ptabs__content-block">
      <table className="ptabs__specs-table">
        <tbody>
          {specs.map((spec) => (
            <tr key={spec.label} className="ptabs__specs-row">
              <td className="ptabs__specs-label">{spec.label}</td>
              <td className="ptabs__specs-value">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReviewsTab() {
  return (
    <div className="ptabs__content-block">
      <div className="ptabs__reviews-summary">
        <div className="ptabs__reviews-avg">
          <span className="ptabs__reviews-avg-value">4.2</span>
          <span className="ptabs__reviews-avg-stars">★★★★☆</span>
          <span className="ptabs__reviews-avg-count">Based on 1,847 reviews</span>
        </div>
      </div>

      <div className="ptabs__reviews-list">
        {reviews.map((r, idx) => (
          <div key={idx} className="ptabs__review-item">
            <div className="ptabs__review-header">
              <div className="ptabs__review-avatar">{r.name.charAt(0)}</div>
              <div className="ptabs__review-meta">
                <span className="ptabs__review-name">{r.name}</span>
                <span className="ptabs__review-date">{r.date}</span>
              </div>
              <span className="ptabs__review-stars">{renderStars(r.rating)}</span>
            </div>
            <p className="ptabs__review-text">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShippingTab() {
  return (
    <div className="ptabs__content-block">
      <h4 className="ptabs__subheading">Shipping Policy</h4>
      <ul className="ptabs__list">
        <li>Free standard shipping on all orders above ₹499</li>
        <li>Express delivery available at ₹149 (1–2 business days)</li>
        <li>Standard delivery in 3–5 business days</li>
        <li>Orders are processed within 24 hours of placement</li>
        <li>Tracking details shared via email/SMS within 24 hours</li>
      </ul>

      <h4 className="ptabs__subheading">Return Policy</h4>
      <ul className="ptabs__list">
        <li>7-day easy return policy from date of delivery</li>
        <li>Product must be unused and in original packaging</li>
        <li>Refund processed within 5–7 business days after inspection</li>
        <li>Replacement available for defective products</li>
        <li>Contact seller for return initiation</li>
      </ul>
    </div>
  );
}

const tabComponents = {
  description: DescriptionTab,
  specifications: SpecificationsTab,
  reviews: ReviewsTab,
  shipping: ShippingTab,
};

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const ActiveContent = tabComponents[activeTab];

  return (
    <div className="ptabs">
      <div className="ptabs__nav">
        {tabList.map((tab) => (
          <button
            key={tab.id}
            className={`ptabs__tab ${activeTab === tab.id ? "ptabs__tab--active" : ""}`}
            type="button"
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="ptabs__content" key={activeTab}>
        <ActiveContent />
      </div>
    </div>
  );
}

export default ProductTabs;
