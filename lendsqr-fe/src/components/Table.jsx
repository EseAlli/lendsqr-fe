import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const Table = ({ headers, content }) => {
  let history = useNavigate();
  const handleClick = (id) => {
    history(`/users/${id}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((value, key) => {
            return (
              <th key={key}>
                {value}
                <span className="material-symbols-outlined">filter_list</span>
              </th>
            );
          })}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {content.map((value, key) => {
          return (
            <tr key={key} onClick={() => handleClick(value.id)}>
              <td>{value.orgName}</td>
              <td>{value.userName}</td>
              <td>{value.email}</td>
              <td>{value.phoneNumber}</td>
              <td>{moment(value.createdAt).format("dddd, MMMM Do, h:mm a")}</td>
              <td>{value.status}</td>
              <td>
                <span className="material-symbols-outlined">more_vert</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
