import React from "react";
import "../index.css";

function Logic() {
  const users = [
    { name: "Iphone 14", price: 1000000 },
    { name: "Iphone 20", price: 1000000 },
    { name: "Iphone 13", price: 1000000 },
    { name: "Iphone 14", price: 1000000 },
  ];

  return (
    <div className="person-container">
      {users.map((user) => {
        //phép nội suy {  }
        return (
          <div className="item">
            <p>{user.name}</p>
            <p>{user.price}</p>
            <img
              src="https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/01/230123-GadgetMatch-Apple-iPhone-15-Series-Rumor-Roundup-Featured-Center-NewJeans-Hanni-1-560x600.jpg"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
export default Logic;
