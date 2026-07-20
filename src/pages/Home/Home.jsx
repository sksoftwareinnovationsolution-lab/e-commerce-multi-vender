import { Link } from "react-router-dom";
import Hero from "../../components/ui/Hero/Hero";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import ShopByCategories from "../../components/home/ShopByCategories/ShopByCategories";
import BookTopServices from "../../components/home/BookTopServices/BookTopServices";
import TopServiceProviders from "../../components/home/TopServiceProviders/TopServiceProviders";
import WhyChooseOmnivixo from "../../components/home/WhyChooseOmnivixo/WhyChooseOmnivixo";
import "../../pages/Home/Home.css";

function Home() {
  return (
    <div className="home-page">
      <Hero />

      <div className="container">
        <ShopByCategories />

        <BookTopServices />

        <div id="featured-products">
          <div className="section-header">
            <div className="section-header__text">
              <h2 className="section-header__title">Featured Products</h2>
              <p className="section-header__subtitle">
                Handpicked products just for you.
              </p>
            </div>
            <Link to="/shop" className="section-header__view-all">
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
          <FeaturedProducts />
        </div>

        <TopServiceProviders />

        <WhyChooseOmnivixo />
      </div>
    </div>
  );
}

export default Home;
