import { Link } from "react-router-dom";

import raviSharma from "../../../assets/images/providers/ravi-sharma.png";
import amitYadav from "../../../assets/images/providers/amit-yadav.png";
import poojaKumari from "../../../assets/images/providers/pooja-kumari.png";
import sandeepPatel from "../../../assets/images/providers/sandeep-patel.png";
import nehaVerma from "../../../assets/images/providers/neha-verma.png";
import vikramSingh from "../../../assets/images/providers/vikram-singh.png";

const TOP_PROVIDERS = [
  {
    id: "prov-001",
    image: raviSharma,
    name: "Ravi Sharma",
    profession: "Electrician",
    rating: 4.8,
    reviews: 320,
    experience: "7+ Years Exp.",
    verified: true,
  },
  {
    id: "prov-002",
    image: amitYadav,
    name: "Amit Yadav",
    profession: "AC Technician",
    rating: 4.7,
    reviews: 180,
    experience: "7+ Years Exp.",
    verified: true,
  },
  {
    id: "prov-003",
    image: poojaKumari,
    name: "Pooja Kumari",
    profession: "Home Cleaning",
    rating: 4.6,
    reviews: 150,
    experience: "3+ Years Exp.",
    verified: true,
  },
  {
    id: "prov-004",
    image: sandeepPatel,
    name: "Sandeep Patel",
    profession: "Plumber",
    rating: 4.7,
    reviews: 190,
    experience: "6+ Years Exp.",
    verified: true,
  },
  {
    id: "prov-005",
    image: nehaVerma,
    name: "Neha Verma",
    profession: "Interior Designer",
    rating: 4.9,
    reviews: 280,
    experience: "4+ Years Exp.",
    verified: true,
  },
  {
    id: "prov-006",
    image: vikramSingh,
    name: "Vikram Singh",
    profession: "Home Painter",
    rating: 4.8,
    reviews: 105,
    experience: "3+ Years Exp.",
    verified: true,
  },
];

function TopServiceProviders() {
  return (
    <section className="top-providers" aria-label="Top Service Providers">
      <div className="top-providers__header">
        <div className="top-providers__header-text">
          <h2 className="top-providers__title">Top Service Providers</h2>
          <p className="top-providers__subtitle">
            Highly rated professionals you can trust.
          </p>
        </div>
        <Link to="/services" className="top-providers__view-all">
          View All
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </div>

      <div className="top-providers__grid">
        {TOP_PROVIDERS.map((provider) => (
          <div key={provider.id} className="top-providers__card">
            <div className="top-providers__card-body">
              <div className="top-providers__card-avatar">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="top-providers__card-img"
                />
              </div>
              <div className="top-providers__card-info">
                <h3 className="top-providers__card-name">{provider.name}</h3>
                <span className="top-providers__card-profession">{provider.profession}</span>
                <div className="top-providers__card-rating">
                  <span className="top-providers__card-star">★</span>
                  <span className="top-providers__card-value">{provider.rating}</span>
                  <span className="top-providers__card-reviews">({provider.reviews})</span>
                </div>
                <span className="top-providers__card-exp">{provider.experience}</span>
                {provider.verified && (
                  <span className="top-providers__card-verified">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Verified
                  </span>
                )}
              </div>
            </div>
            <Link to={`/services`} className="top-providers__card-book">
              Book Service
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopServiceProviders;
