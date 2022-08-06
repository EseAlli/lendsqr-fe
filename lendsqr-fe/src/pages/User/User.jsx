import React, { useEffect, useState, useCallback, useMemo } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import users from "../../assets/icons/two-figures.svg";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

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
    date_joined: "May 15, 2022 10:00 AM",
    phone_number: "08036748234",
    status: "active",
    gender: "Male",
    designation: "Full Stack(React + Java) Developer",
  },
  {
    organization: "Lendsqr",
    username: "Michal",
    email: "johndoe@gmail.com",
    date_joined: "May 15, 2022 10:00 AM",
    phone_number: "08036748234",
    status: "active",
    gender: "Male",
    designation: "Full Stack Engineer",
  },
  {
    organization: "Lendsqr",
    username: "Morgan",
    email: "johndoe@gmail.com",
    date_joined: "May 15, 2022 10:00 AM",
    phone_number: "08036748234",
    status: "active",
    gender: "Female",
    designation: "React Developer",
  },
  {
    organization: "Lendsqr",
    username: "Tom",
    email: "johndoe@gmail.com",
    date_joined: "May 15, 2022 10:00 AM",
    phone_number: "08036748234",
    status: "active",
    gender: "Male",
    designation: "Front End Developer",
  },
  {
    organization: "Lendsqr",
    username: "Steve",
    email: "johndoe@gmail.com",
    date_joined: "May 15, 2022 10:00 AM",
    phone_number: "08036748234",
    status: "active",
    gender: "Female",
    designation: "UI/UX Designer",
  },
];

const User = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(5);
  const [count, setCount] = useState(500);

  const getMoreItemsByOffset = (page, type) => {
    setCurrentPage(page);
    // console.log(type)
    // fetchOrders(type, page)
  };

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
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={count}
              pageSize={PageSize}
              onPageChange={(page) => getMoreItemsByOffset(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
