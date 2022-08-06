import React from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import users from "../../assets/icons/two-figures.svg";

const User = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main-container">
        <div className="contain">
          <p className="page-title">Users</p>
          <div className="card-container">
            <Card image={users} title="User" content="2,457" />
            <Card image={users} title="User" content="2,457" />
            <Card image={users} title="User" content="2,457" />
            <Card image={users} title="User" content="2,457" />
          </div>
          <div className="table-container"></div>
        </div>
      </div>
    </div>
  );
};

export default User;
