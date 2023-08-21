import React from "react";
import NavMenu from "../Layouts/Nav";
import UseNavigate from "./useNagivate";

export default function HomePage() {
  return (
    <div>
      <NavMenu />
      <img
        className="imgHome"
        src="https://dongtayland.vn/wp-content/uploads/2021/08/The-Beverly-Vinhomes-Grand-Park-1.jpg"
        alt=""
      />

      {/* <UseNavigate /> */}
    </div>
  );
}
