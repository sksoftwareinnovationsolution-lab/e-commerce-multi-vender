import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
