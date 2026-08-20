import { Link } from "react-router-dom";
import DealsHeroBanner from "./DealsHeroBanner";
import DealsCategories from "./DealsCategories";
import FlashDeals from "./FlashDeals";
import TodaysDeals from "./TodaysDeals";
import TrendingDeals from "./TrendingDeals";
import TopBrandsOnDeal from "./TopBrandsOnDeal";
import DealsByCategory from "./DealsByCategory";
import DealsHighlights from "./DealsHighlights";
import "./Deals.css";

function Deals() {
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
            Deals
          </li>
        </ol>
      </nav>

      <DealsHeroBanner />
      <DealsCategories />
      <FlashDeals />
      <TodaysDeals />
      <TrendingDeals />
      <DealsByCategory />
      <DealsHighlights />
      <TopBrandsOnDeal />
    </div>
  );
}

export default Deals;
