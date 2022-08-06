import React from "react";

const Table = ({ headers, content }) => {
  console.log(headers);
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
            <tr key={key}>
              <td>{value.organization}</td>
              <td>{value.username}</td>
              <td>{value.email}</td>
              <td>{value.phone_number}</td>
              <td>{value.date_joined}</td>
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
