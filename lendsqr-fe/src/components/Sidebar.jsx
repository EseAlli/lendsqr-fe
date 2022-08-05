import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to="#">
          <span class="material-symbols-outlined">business_center</span>
          Switch Organization
          <span class="material-symbols-outlined">expand_more</span>
        </Link>
        <Link to="#">
          <span class="material-symbols-outlined">home</span>
          Dashboard
        </Link>
        <br />
        <p>Customers</p>
        <Link to="#">
          <span class="material-symbols-outlined">group</span>Users
        </Link>
        <Link to="#">
          <span class="material-symbols-outlined">groups</span>Guarantors
        </Link>
        <Link to="#">Loans</Link>
        <Link to="#">Decision Models</Link>
        <Link to="#">Savings</Link>
        <Link to="#">Loan Requests</Link>
        <Link to="#">Whitelist</Link>
        <Link to="#">Karma</Link>
        <p>BUSINESSES</p>
        <Link to="#">Organization</Link>
        <Link to="#">Loan Products</Link>
        <Link to="#">Savings Products</Link>
        <Link to="#">Fees and Charges</Link>
        <Link to="#">Transaction</Link>
        <Link to="#">Services</Link>
        <Link to="#">Service Account</Link>
        <Link to="#">Settlements</Link>
        <Link to="#">Reports</Link>
        <p>Settings</p>
        <Link to="#">Preference</Link>
        <Link to="#">Fees and Pricing</Link>
        <Link to="#">Audit Logs</Link>
      </div>
    </div>
  );
};

export default Sidebar;
