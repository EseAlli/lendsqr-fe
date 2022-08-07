import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Dialog from "./Dialog";
import Filter from "./Filter";
import view from "../assets/icons/view.svg";
import cancel from "../assets/icons/cancel.svg";
import activate from "../assets/icons/activate.svg";
const Table = ({ headers, content }) => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTable, setActiveTable] = useState(0);
  const handleFilterClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = (key) => {
    setActiveTable(key);
    console.log(key, activeTable);
    setMenuOpen(!menuOpen);
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
            <tr key={key}>
              <td>{value.orgName}</td>
              <td>{value.userName}</td>
              <td>{value.email}</td>
              <td>{value.phoneNumber}</td>
              <td>{moment(value.createdAt).format("dddd, MMMM Do, h:mm a")}</td>
              <td>{value.status}</td>
              <td className="table-action">
                <Dialog
                  open={menuOpen}
                  handleClick={handleMenuClick}
                  button={
                    <button
                      className="icon-btn"
                      onClick={() => handleMenuClick(key)}
                    >
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  }
                >
                  {key === activeTable && (
                    <div className="tool-tip">
                      <ul>
                        <li>
                          <img src={view} alt="view" />
                          View Details
                        </li>
                        <li>
                          <img src={cancel} alt="cancel" />
                          Blacklist User
                        </li>
                        <li>
                          <img src={activate} alt="activate" />
                          Activate User
                        </li>
                      </ul>
                    </div>
                  )}
                </Dialog>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
