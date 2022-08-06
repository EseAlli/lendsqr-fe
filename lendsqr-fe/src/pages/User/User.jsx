import React, { useState } from "react";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import usersIcon from "../../assets/icons/two-figures.svg";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import savings from "../../assets/icons/users-with-savings.svg";
import loans from "../../assets/icons/users-with-loans.svg";
import active from "../../assets/icons/active-users.svg";
import { useUserContext } from "../../context/UserContext";

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

  const { users } = useUserContext();
  console.log(users);

  const getMoreItemsByOffset = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <p className="page-title">Users</p>
      <div className="card-container">
        <Card image={usersIcon} title="User" content="2,457" />
        <Card image={active} title="Active User" content="2,457" />
        <Card image={loans} title="Users With Loans" content="2,457" />
        <Card image={savings} title="Users with savings" content="2,457" />
      </div>
      <div className="table-container">
        <Table headers={tablehead} content={users} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={count}
          pageSize={PageSize}
          onPageChange={(page) => getMoreItemsByOffset(page)}
        />
      </div>
    </Layout>
  );
};

export default User;
