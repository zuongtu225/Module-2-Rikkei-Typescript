import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "./data";
import "./phone.css";
export default function Phone() {
  const nagivate = useNavigate();

  return (
    <div>
      {Product.map((item) => {
        return (
          <div className="product">
            <h1>{item.id}</h1>
            <p>{item.name}</p>
            <img src={`${item.img}`} alt="" />
            <button className="btnDetail">View Detail</button>
          </div>
        );
      })}
    </div>
  );
}
