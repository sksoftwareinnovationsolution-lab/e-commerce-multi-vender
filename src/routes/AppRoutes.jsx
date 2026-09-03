import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SuperAdminLayout from "../components/super-admin/SuperAdminLayout";
import SuperAdminDashboard from "../components/super-admin/SuperAdminDashboard";
import SuperAdminAnalytics from "../components/super-admin/SuperAdminAnalytics";
import SuperAdminReports from "../components/super-admin/SuperAdminReports";
import VendorDashboardLayout from "../components/vendor/VendorDashboardLayout";
import VendorDashboard from "../components/vendor/VendorDashboard";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Shops from "../pages/Shops/Shops";
import Services from "../pages/Services/Services";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ShopDetails from "../pages/ShopDetails/ShopDetails";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Deals from "../pages/Deals/Deals";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/Account/SignUp";
import Login from "../pages/Account/Login";
import ForgotPassword from "../pages/Account/ForgotPassword";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shops" element={<Shops />} />
          <Route path="services" element={<Services />} />
          <Route path="deals" element={<Deals />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="shop/:id" element={<ShopDetails />} />
          <Route path="service/:id" element={<ServiceDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="account" element={<SignUp />} />
          <Route path="account/login" element={<Login />} />
        </Route>
        <Route path="account/forgot-password" element={<ForgotPassword />} />
        <Route path="super-admin" element={<SuperAdminLayout />}>
          <Route index element={<SuperAdminDashboard />} />
          <Route path="analytics" element={<SuperAdminAnalytics />} />
          <Route path="reports" element={<SuperAdminReports />} />
        </Route>
        <Route path="vendor-dashboard" element={<VendorDashboardLayout />}>
          <Route index element={<VendorDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
