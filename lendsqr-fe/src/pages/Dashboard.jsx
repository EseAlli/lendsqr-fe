import React, { useState } from "react";
import Card from "../components/Card";
import Dialog from "../components/Dialog";
import Filter from "../components/Filter";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Layout>
      <p className="page-title">Dashboard</p>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Dialog open={open} handleClick={handleClick}>
        {/* <Filter /> */}
        <p>Hello</p>
      </Dialog>
    </Layout>
  );
};

export default Dashboard;
