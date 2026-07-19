import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <span className="site-footer__logo">Omnivixo</span>
            <p className="site-footer__tagline">
              Your multi-vendor marketplace for everything.
            </p>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__col">
              <h4 className="site-footer__col-title">Marketplace</h4>
              <Link to="/shop" className="site-footer__link">Products</Link>
              <Link to="/shops" className="site-footer__link">Shops</Link>
              <Link to="/services" className="site-footer__link">Services</Link>
            </div>
            <div className="site-footer__col">
              <h4 className="site-footer__col-title">Support</h4>
              <span className="site-footer__link">Help Center</span>
              <span className="site-footer__link">Contact Us</span>
              <span className="site-footer__link">FAQs</span>
            </div>
            <div className="site-footer__col">
              <h4 className="site-footer__col-title">Company</h4>
              <span className="site-footer__link">About</span>
              <span className="site-footer__link">Careers</span>
              <span className="site-footer__link">Blog</span>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span className="site-footer__copy">
            &copy; {new Date().getFullYear()} Omnivixo. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
