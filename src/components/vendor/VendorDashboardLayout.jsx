import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import VendorDashboardSidebar from "./VendorDashboardSidebar";
import VendorDashboardNavbar from "./VendorDashboardNavbar";
import "./VendorDashboardLayout.css";

function VendorDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="vd-layout">
      <VendorDashboardSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className={`vd-layout__main${sidebarOpen ? " vd-layout__main--sidebar-open" : ""}`}>
        <VendorDashboardNavbar onMenuToggle={toggleSidebar} />

        <main className="vd-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default VendorDashboardLayout;
