import React from "react";
import Body from "./Body";

class Sum extends React.Component {
  a = 4;
  b = 3;
  // a và b là hai biến số được khai báo trong phạm vi của lớp Sum.
  render() {
    return (
      <>
        <h1>{this.a + this.b}</h1>
        <Body />
      </>
    );
  }
}
export default Sum;
