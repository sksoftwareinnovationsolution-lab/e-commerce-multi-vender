import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SuperAdminSidebar from "./SuperAdminSidebar";
import SuperAdminNavbar from "./SuperAdminNavbar";
import "./SuperAdminLayout.css";

function SuperAdminLayout() {
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
    <div className="sa-layout">
      <SuperAdminSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className={`sa-layout__main${sidebarOpen ? " sa-layout__main--sidebar-open" : ""}`}>
        <SuperAdminNavbar onMenuToggle={toggleSidebar} />

        <main className="sa-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SuperAdminLayout;
