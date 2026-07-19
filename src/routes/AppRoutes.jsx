import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Shops from "../pages/Shops/Shops";
import Services from "../pages/Services/Services";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ShopDetails from "../pages/ShopDetails/ShopDetails";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shops" element={<Shops />} />
          <Route path="services" element={<Services />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="shop/:id" element={<ShopDetails />} />
          <Route path="service/:id" element={<ServiceDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
