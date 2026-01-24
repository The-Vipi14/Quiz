import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
