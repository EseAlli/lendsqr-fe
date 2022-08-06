import React from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import users from "../../assets/icons/two-figures.svg";
import Table from "../../components/Table";

const tablehead = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
];

const data = [
  {
    organization: "Lendsqr",
    username: "Robert",
    email: "johndoe@gmail.com",
    date_joined: "02-04-2022",
    phone_number: "08036748234",
    status: "active",
    gender: "Male",
    designation: "Full Stack(React + Java) Developer",
  },
  {
    organization: "Lendsqr",
    username: "Michal",
    email: "johndoe@gmail.com",
    date_joined: "02-04-2022",
    phone_number: "08036748234",
    status: "active",
    gender: "Male",
    designation: "Full Stack Engineer",
  },
  {
    organization: "Lendsqr",
    username: "Morgan",
    email: "johndoe@gmail.com",
    date_joined: "02-04-2022",
    phone_number: "08036748234",
    status: "active",
    gender: "Female",
    designation: "React Developer",
  },
  {
    organization: "Lendsqr",
    username: "Tom",
    email: "johndoe@gmail.com",
    date_joined: "02-04-2022",
    phone_number: "08036748234",
    status: "active",
    gender: "Male",
    designation: "Front End Developer",
  },
  {
    organization: "Lendsqr",
    username: "Steve",
    email: "johndoe@gmail.com",
    date_joined: "02-04-2022",
    phone_number: "08036748234",
    status: "active",
    gender: "Female",
    designation: "UI/UX Designer",
  },
];

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
          <div className="table-container">
            <Table headers={tablehead} content={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
