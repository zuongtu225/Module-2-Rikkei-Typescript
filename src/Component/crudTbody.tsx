import React from "react";
import "../index.css";
class Tbody extends React.Component {
  listUsers = [
    {
      id: 1,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },
    {
      id: 2,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },

    {
      id: 3,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },
    {
      id: 4,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },
    {
      id: 5,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },
    {
      id: 6,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },
    {
      id: 7,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },
    {
      id: 8,
      name: "Daniel",
      age: 20,
      email: "daniel225@gmail.com",
      dob: 22 / 5 / 2003,
      role: "user",
    },
  ];
  render() {
    return (
      <>
        {this.listUsers.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>
                <button id="btnStatus">{user.role}</button>
              </td>
              <td>
                <button id="btdDelete">
                  <i className="bx bx-trash"></i>
                </button>
                <button id="bdtEdit">
                  <i className="bx bx-edit"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}
export default Tbody;
