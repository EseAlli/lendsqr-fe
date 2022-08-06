import React from "react";
import Layout from "../../components/Layout";
import avatar from "../../assets/icons/avatar.svg";

const UserDetails = () => {
  return (
    <Layout>
      <p className="page-title">User Details</p>
      <div className="user-action-btns">
        <button className="btn btn-outline btn-outline-red">
          Blacklist User
        </button>
        <button className="btn btn-outline btn-outline-green">
          Activate User
        </button>
      </div>
      <div className="user-details">
        <div className="shadow-box">
          <div className="basic-info">
            <div className="flex gap-6 info">
              <img src={avatar} />
              <div>
                <p className="user-name">Grace Effiom</p>
                <p>lsdjgekh</p>
              </div>
            </div>
            <hr />
            <div className="info tier">
              <p className="title">User's Tier</p>
              <p>lsdjgekh</p>
            </div>
            <hr />
            <div className="info account">
              <p className="title">₦200,000.00</p>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className="tab-controls">
            <ul className="tab-list">
              <li className="active">General Details</li>
              <li>Documents</li>
              <li>Bank Details</li>
              <li>Loans</li>
              <li>Savings</li>
              <li>App and System</li>
            </ul>
          </div>
        </div>

        <GeneralInfo />
      </div>
    </Layout>
  );
};

export default UserDetails;

const BlankPage = () => {
  return <div className="shadow-box"></div>;
};

const GeneralInfo = () => {
  return (
    <div className="tabs shadow-box">
      <h3 className="tab-accordion-header">Documents</h3>
      <div className="tab-content">
        <p className="section-title">Personal Information</p>
        <div className="section">
          <div className="section-content">
            <p className="label">Full Name</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Phone Number</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Email Address</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Bvn</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Gender</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Marital Status</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Children</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Type of Residence</p>
            <p className="value">Grace Effiom</p>
          </div>
        </div>
        <hr />
        <p className="section-title">Education and Employment</p>
        <div className="section">
          <div className="section-content">
            <p className="label">Level of Eductaion</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Employment Status</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Sector of Employment</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Duration of Employment</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Official Email</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Monthly Income</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Loan Repayment</p>
            <p className="value">Grace Effiom</p>
          </div>
        </div>
        <hr />
        <p className="section-title">Socials</p>
        <div className="section">
          <div className="section-content">
            <p className="label">Twitter</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Facebook</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Instagram</p>
            <p className="value">Grace Effiom</p>
          </div>
        </div>
        <hr />
        <p className="section-title">Guarantor</p>
        <div className="section">
          <div className="section-content">
            <p className="label">Full Name</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Phone Number</p>
            <p className="value">Grace Effiom</p>
          </div>

          <div className="section-content">
            <p className="label">Email Address</p>
            <p className="value">Grace Effiom</p>
          </div>
          <div className="section-content">
            <p className="label">Relationship</p>
            <p className="value">Grace Effiom</p>
          </div>
        </div>
      </div>
    </div>
  );
};
