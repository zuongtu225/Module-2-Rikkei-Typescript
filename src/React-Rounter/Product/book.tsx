import React from "react";
import { Link } from "react-router-dom";

export default function Book() {
  return (
    <div>
      <img
        className="bookImg"
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000"
        alt=""
      />
      <Link to="/">Home</Link>
    </div>
  );
}
