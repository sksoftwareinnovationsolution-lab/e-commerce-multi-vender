import { Link, useParams } from "react-router-dom";
import ProductGallery from "../../components/product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import VendorCard from "../../components/product/VendorCard/VendorCard";
import ProductTabs from "../../components/product/ProductTabs/ProductTabs";
import RelatedProducts from "../../components/product/RelatedProducts/RelatedProducts";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">Home</Link>
          </li>
          <li className="breadcrumb__separator">/</li>
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">Electronics</Link>
          </li>
          <li className="breadcrumb__separator">/</li>
          <li className="breadcrumb__item breadcrumb__item--active" aria-current="page">
            Product #{id}
          </li>
        </ol>
      </nav>

      <div className="pd-main">
        <div className="pd-main__gallery">
          <ProductGallery />
        </div>

        <div className="pd-main__info">
          <ProductInfo />
        </div>

        <div className="pd-main__vendor">
          <VendorCard />
        </div>
      </div>

      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}

export default ProductDetails;
