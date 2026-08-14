import { Link } from "react-router-dom";
import HeroBanner from "../../components/service/HeroBanner";
import PopularServiceCategories from "../../components/service/PopularServiceCategories";
import FeaturedServices from "../../components/service/FeaturedServices";
import TopRatedServiceProviders from "../../components/service/TopRatedServiceProviders";
import WhyChooseServices from "../../components/service/WhyChooseServices";
import AppBanner from "../../components/service/AppBanner";
import SellerCTABanner from "../../components/service/SellerCTABanner";
import StatsTrustMetrics from "../../components/service/StatsTrustMetrics";
import ServiceInfoSection from "../../components/service/ServiceInfoSection";
import "../Home/Home.css";
import "../Products/Products.css";

function Services() {
  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">
              Home
            </Link>
          </li>
          <li className="breadcrumb__separator">/</li>
          <li className="breadcrumb__item breadcrumb__item--active" aria-current="page">
            Services
          </li>
        </ol>
      </nav>

      <HeroBanner />

      <PopularServiceCategories />

      <FeaturedServices />

      <TopRatedServiceProviders />

      <WhyChooseServices />

      <AppBanner />

      <StatsTrustMetrics />

      <ServiceInfoSection />

      <div className="view-less">
        <Link to="/" className="view-less__link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          Back to Home
        </Link>
      </div>

      <SellerCTABanner />
    </div>
  );
}

export default Services;
