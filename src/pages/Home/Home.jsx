import { Link } from "react-router-dom";
import Hero from "../../components/ui/Hero/Hero";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import ShopByCategories from "../../components/home/ShopByCategories/ShopByCategories";
import BookTopServices from "../../components/home/BookTopServices/BookTopServices";
import TopServiceProviders from "../../components/home/TopServiceProviders/TopServiceProviders";
import WhyChooseOmnivixo from "../../components/home/WhyChooseOmnivixo/WhyChooseOmnivixo";
import SellerCTABanner from "../../components/home/SellerCTABanner/SellerCTABanner";
import AppShowcase from "../../components/home/AppShowcase/AppShowcase";
import "../../pages/Home/Home.css";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import StatsBanner from "../../components/home/StatsBanner/StatsBanner";
import FAQ from "../../components/home/FAQ/FAQ";
import NewsletterBanner from "../../components/home/NewsletterBanner/NewsletterBanner";


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

        <SellerCTABanner />

        <div className="mt-8">
          <AppShowcase />
        </div>



        <div className="mt-12 mb-10 lg:mb-12">
          <Testimonials />
        </div>

        <div style={{ marginTop: "50px" }}>
          <StatsBanner />
        </div>
        <div style={{ marginTop: "10px" }}>
          <FAQ />
        </div>


        <div style={{ marginTop: "20px"}}>
          <NewsletterBanner />
        </div>
      </div>
    </div>
  );
}

export default Home;
