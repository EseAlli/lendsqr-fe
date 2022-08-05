import React from "react";
import Users from "../assets/icons/two-figures.svg";

const Card = () => {
  return (
    <div className="card">
      <img className="card-icon" src={Users} />
      <h5>Users</h5>
      <p>2,398</p>
    </div>
  );
};

export default Card;
