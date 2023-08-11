import React from "react";
import Tbody from "./crudTbody";
import "../index.css";
class Table extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper-table">
          <h1>MANAGER USER</h1>
          <table>
            <thead>
              <th>No.</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>DOB</th>
              <th>MANAGE</th>
              <th>ACTION</th>
            </thead>
            <tbody>
              <Tbody />
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
export default Table;
