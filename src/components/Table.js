import React from "react";

function Table(props) {
  return (
    <>
      <table style={{ width: "100%" }}>
        <tr>
          <th>Employee</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Location</th>
        </tr>
        {props.children}
      </table>
    </>
  );
}

export default Table;
