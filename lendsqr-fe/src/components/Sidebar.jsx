import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import briefcase from "../assets/icons/briefcase.svg";
import home from "../assets/icons/home.svg";
import sack from "../assets/icons/sack.svg";
import badge from "../assets/icons/badge-percent.svg";
import chart from "../assets/icons/chart-bar.svg";
import clipboard from "../assets/icons/clipboard-list.svg";
import coins from "../assets/icons/coins-solid.svg";
import galaxy from "../assets/icons/galaxy.svg";
import icon from "../assets/icons/icon.svg";
import piggy from "../assets/icons/piggy-bank.svg";
import slider from "../assets/icons/sliders-h.svg";
import check from "../assets/icons/user-check.svg";
import cog from "../assets/icons/user-cog.svg";
import users from "../assets/icons/users.svg";
import friends from "../assets/icons/user-friends.svg";
import times from "../assets/icons/user-times.svg";
import vector from "../assets/icons/vector.svg";
import group from "../assets/icons/group.svg";
import handshake from "../assets/icons/handshake-regular.svg";
import hands from "../assets/icons/hand-holding.svg";
import scroll from "../assets/icons/scroll.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to="#" className="list-item mb-4">
          <div>
            <img src={briefcase} />
          </div>
          <div className="flex">
            Switch Organization
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </Link>
        <Link to="#" className="list-item">
          <img src={home} />
          Dashboard
        </Link>
        <br />
        <p className="subhead">Customers</p>
        <Link to="#" className="list-item">
          <img src={friends} />
          Users
        </Link>
        <Link to="#" className="list-item">
          <img src={users} />
          Guarantors
        </Link>
        <Link to="#" className="list-item">
          <img src={sack} />
          Loans
        </Link>
        <Link to="#" className="list-item">
          <img src={handshake} />
          Decision Models
        </Link>
        <Link to="#" className="list-item">
          <img src={piggy} />
          Savings
        </Link>
        <Link to="#" className="list-item">
          <img src={hands} />
          Loan Requests
        </Link>
        <Link to="#" className="list-item">
          <img src={check} />
          Whitelist
        </Link>
        <Link to="#" className="list-item">
          <img src={times} />
          Karma
        </Link>
        <p className="subhead mt-6">BUSINESSES</p>
        <Link to="#" className="list-item">
          <img src={briefcase} />
          Organization
        </Link>
        <Link to="#" className="list-item">
          <img src={sack} />
          Loan Products
        </Link>
        <Link to="#" className="list-item">
          <img src={group} />
          Savings Products
        </Link>
        <Link to="#" className="list-item">
          <img src={coins} />
          Fees and Charges
        </Link>
        <Link to="#" className="list-item">
          <img src={icon} />
          Transaction
        </Link>
        <Link to="#" className="list-item">
          <img src={galaxy} />
          Services
        </Link>
        <Link to="#" className="list-item">
          <img src={cog} />
          Service Account
        </Link>
        <Link to="#" className="list-item">
          <img src={scroll} />
          Settlements
        </Link>
        <Link to="#" className="list-item">
          <img src={chart} />
          Reports
        </Link>
        <p className="subhead mt-6">Settings</p>
        <Link to="#" className="list-item">
          <img src={slider} />
          Preference
        </Link>
        <Link to="#" className="list-item">
          <img src={badge} />
          Fees and Pricing
        </Link>
        <Link to="#" className="list-item">
          <img src={clipboard} />
          Audit Logs
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
