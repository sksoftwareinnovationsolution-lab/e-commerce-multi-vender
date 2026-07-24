import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/images/logo2.png";

function Footer() {
  return (
    <footer className="bg-[#060A2B] border-t border-white/10">
      <div className="max-w-[1450px] mx-auto px-8 xl:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-18">
          <div>
            <img
              src={logo}
              alt="Omnivixo"
              className="h-10 w-auto mb-5"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Shop. Sell. Book. Serve.
              <br />
              Everything you need,
              <br />
              one platform.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              For Customers
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/my-orders" className="text-gray-300 hover:text-white transition-colors text-sm">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              For Sellers
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/become-a-seller" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link to="/seller-dashboard" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Seller Dashboard
                </Link>
              </li>
              <li>
                <Link to="/seller-support" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Seller Support
                </Link>
              </li>
              <li>
                <Link to="/seller-terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold tracking-wide text-sm mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="text-gray-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-xs">Email:</span>
                    <p className="text-gray-300 text-sm">support@omnivixo.com</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <Phone size={16} className="text-gray-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-xs">Phone:</span>
                    <p className="text-gray-300 text-sm">+91 12345 67890</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-gray-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-400 text-xs">Address:</span>
                    <p className="text-gray-300 text-sm">Omnivixo Pvt. Ltd.<br />India</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Omnivixo. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-10 h-7 bg-white rounded flex items-center justify-center">
                <svg viewBox="0 0 50 16" className="h-3.5">
                  <text x="25" y="12" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1A1F71" fontFamily="Arial, sans-serif">VISA</text>
                </svg>
              </div>
              <div className="w-10 h-7 bg-white rounded flex items-center justify-center px-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#EB001B] -mr-1.5"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F79E1B] -ml-1.5"></div>
                </div>
              </div>
              <div className="w-10 h-7 bg-white rounded flex items-center justify-center">
                <span className="text-[#096B3F] text-[9px] font-bold" style={{ fontFamily: "Arial, sans-serif" }}>RuPay</span>
              </div>
              <div className="w-10 h-7 bg-white rounded flex items-center justify-center">
                <span className="text-[#097B43] text-[9px] font-bold" style={{ fontFamily: "Arial, sans-serif" }}>UPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
