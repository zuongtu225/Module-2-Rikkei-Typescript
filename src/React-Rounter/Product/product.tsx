import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import NavMenu from "../../Layouts/Nav";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./phone.css";
import { Button } from "react-bootstrap";
import Laptop from "./Laptop";
import Phone from "./Phone";
import Book from "./book";
export default function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <NavMenu />
      <ul className="ulProduct">
        <li>
          <NavLink to={"/product"}>PHONE</NavLink>
          {/* <Button onClick={() => navigate("/product")}>PHONE</Button> */}
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "green" } : {};
            }}
            to={"/product/laptop"}
          >
            LAPTOP
          </NavLink>
          {/* 
          
       => style là một trong những prop mà bạn có thể truyền cho component NavLink trong thư viện react-router-dom
                   
       => Prop style: Bạn truyền vào style một hàm nhận một đối số isActive để xác định xem liên kết có đang được truy cập (active) ko.  
                            
         => Thuộc tính isActive không cần được khai báo trước vì nó là một thuộc tính của đối tượng NavLinkProps. 
         => Đối tượng NavLinkProps là một đối tượng có sẵn theo mặc định trong React Router. 
         => Bạn đang sử dụng cú pháp destructuring để truy cập thuộc tính isActive và gán nó cho biến isActive.                   




                            */}

          {/* <Button onClick={() => navigate("laptop")}>LAPTOP</Button> */}
        </li>
        <li>
          <NavLink to={"/product/book"}>BOOK</NavLink>
          {/* <Button onClick={() => navigate("book")}>BOOK</Button> */}
        </li>
        {/* 
        => navigate("laptop"): khi click thì cụm từ "laptop" sẽ đc thêm vào cuối đường link 
        => khi đó trên đường link sẽ có /product/laptop và sẽ chuyển hướng tới layout laptop và render layout đó
        => /product ở nút phone sẽ quay lại product
        */}
      </ul>
      {/* <Phone />
      <Laptop />
      <Book /> */}
      <Outlet />
      {/* 
      <Outlet /> đại diện cho 3 component Phone, Laptop, Book 
      => nhờ outlet mới ẩn 3 thằng này đi ở trong layout product
      => khi cần thằng nào thì click button sẽ render ra thằng đó
      
    // outlet đại diện cho những thằng con
    // outlet là bộ điều hướng nằm ở thằng cha 

      */}
    </div>
  );
}
