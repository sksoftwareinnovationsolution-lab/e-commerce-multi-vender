import "./VendorCard.css";

function VendorCard() {
  return (
    <div className="vcard">
      <div className="vcard__header">
        <div className="vcard__logo">
          <span className="vcard__logo-text">TechZone</span>
        </div>
        <div className="vcard__info">
          <h3 className="vcard__name">TechZone Official Store</h3>
          <div className="vcard__rating">
            <span className="vcard__stars">★★★★☆</span>
            <span className="vcard__rating-value">4.3</span>
            <span className="vcard__rating-label">Seller Rating</span>
          </div>
        </div>
      </div>

      <div className="vcard__details">
        <div className="vcard__detail">
          <svg className="vcard__detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="vcard__detail-text">Mumbai, Maharashtra</span>
        </div>
        <div className="vcard__detail">
          <svg className="vcard__detail-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          <span className="vcard__detail-text">Total Products: <strong>342</strong></span>
        </div>
      </div>

      <div className="vcard__actions">
        <button className="vcard__btn vcard__btn--chat" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Chat with Seller
        </button>
        <button className="vcard__btn vcard__btn--store" type="button">
          Visit Store
        </button>
      </div>
    </div>
  );
}

export default VendorCard;
