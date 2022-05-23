import React from "react";
import { Link, Outlet } from "react-router-dom";

const sideLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-3">
        {/* <!-- Page content here --> */}
        <h1 className="text-primary font-bold text-xl md:text-2xl mb-5">
          Welcome to your Dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/allAdmin">{sideLogo}All Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/allUsers">{sideLogo}All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/myOrders">{sideLogo}My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">{sideLogo}Add A Review</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
