import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SuperAdminSidebar from "./SuperAdminSidebar";
import SuperAdminNavbar from "./SuperAdminNavbar";

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
    <div className="flex min-h-screen bg-gray-100 dark:bg-[#0f0f23]">
      <SuperAdminSidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div
        className={`flex flex-col flex-1 min-w-0 ml-0 ${
          sidebarOpen ? "lg:ml-[270px]" : ""
        }`}
      >
        <SuperAdminNavbar onMenuToggle={toggleSidebar} />

        <main className="flex-1 p-6 min-h-[calc(100vh-72px)] lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SuperAdminLayout;
