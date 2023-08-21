import React from "react";
import { useParams } from "react-router-dom";
import Product from "./data";

export default function PhoneDetail() {
  const param: any = useParams();
  console.log(param);
  const productNeed: any = Product.find((product) => product.id === param.id);
  console.log(productNeed);

  return (
    <div>
      <h1>{param.phoneId}</h1>
    </div>
  );
}
