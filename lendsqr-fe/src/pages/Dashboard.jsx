import React from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <p className="page-title">Dashboard</p>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Filter/>
    </Layout>
  );
};

export default Dashboard;
