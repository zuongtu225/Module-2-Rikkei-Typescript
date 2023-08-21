import React from "react";
import { Link } from "react-router-dom";

export default function Laptop() {
  return (
    <div>
      <h1>Laptop </h1>
      <img
        className="imgLaptop"
        src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg"
        alt=""
      />
      {/* <button>
        <Link to={"../phone"}>Next</Link>
      </button> */}
    </div>
  );
}
