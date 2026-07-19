import { Link } from "react-router-dom";

const SERVICE_OPTIONS = [
  { id: 1, label: "Home Cleaning", icon: "🧹", price: "From ₹699" },
  { id: 2, label: "AC Repair", icon: "❄️", price: "From ₹549" },
  { id: 3, label: "Plumbing", icon: "🔧", price: "From ₹399" },
  { id: 4, label: "Beauty Salon", icon: "💇", price: "From ₹349" },
  { id: 5, label: "Electrical", icon: "⚡", price: "From ₹499" },
  { id: 6, label: "Painting", icon: "🎨", price: "From ₹599" },
];

function BookTopServices() {
  return (
    <section className="book-top-services" aria-label="Book Top Services">
      <div className="book-top-services__header">
        <div className="book-top-services__header-text">
          <h2 className="book-top-services__title">Book Top Services</h2>
          <p className="book-top-services__subtitle">
            Trusted professionals at your doorstep.
          </p>
        </div>
        <Link to="/services" className="book-top-services__view-all">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      <div className="book-top-services__row">
        {SERVICE_OPTIONS.map((svc) => (
          <Link
            key={svc.id}
            to="/services"
            className="book-top-services__card"
          >
            <span className="book-top-services__card-icon" role="img" aria-hidden="true">
              {svc.icon}
            </span>
            <h3 className="book-top-services__card-label">{svc.label}</h3>
            <span className="book-top-services__card-price">{svc.price}</span>
            <span className="book-top-services__card-btn">Book Now</span>
          </Link>
        ))}
        <Link to="/services" className="book-top-services__card book-top-services__card--view-all">
          <span className="book-top-services__card-label">View All</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default BookTopServices;
