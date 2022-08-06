import React from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main-container">
        <div className="contain">
          <p className="page-title">Dashboard</p>
          <div className="card-container">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;