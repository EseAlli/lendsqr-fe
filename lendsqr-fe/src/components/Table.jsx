import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Dialog from "./Dialog";
import Filter from "./Filter";
const Table = ({ headers, content }) => {
  const [open, setOpen] = useState(false);
  const handleFilterClick = () => {
    setOpen(!open);
  };

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
                <div className="table-header">
                  <p>{value}</p>
                  {key === 0 ? (
                    <Dialog
                      open={open}
                      handleClick={handleFilterClick}
                      button={
                        <button
                          className="icon-btn"
                          onClick={() => handleFilterClick()}
                        >
                          <span className="material-symbols-outlined">
                            filter_list
                          </span>
                        </button>
                      }
                    >
                      <Filter />
                    </Dialog>
                  ) : (
                    <span className="material-symbols-outlined">
                      filter_list
                    </span>
                  )}
                </div>
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
