import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./React-Rounter/homePage";
import Product from "./React-Rounter/Product/product";
import Laptop from "./React-Rounter/Product/Laptop";
import Phone from "./React-Rounter/Product/Phone";
import Book from "./React-Rounter/Product/book";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/product" element={<Product />}>
          <Route index element={<Phone />}></Route>
          <Route path="laptop" element={<Laptop />}></Route>
          <Route path="book" element={<Book />}></Route>
          {/* các route con bên trong một route cha, bạn không cần sử dụng dấu / ở đầu của path trong các route con.  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// import Product from "./React-Rounter/Product/product";
// import NavMenu from "./Layouts/Nav";
// import HomePage from "./React-Rounter/homePage";
// import Phone from "./React-Rounter/Product/Phone";
// import Laptop from "./React-Rounter/Product/Laptop";
// import NotFound from "./React-Rounter/NotFound";
// import DropdownMenu from "./React-Rounter/Product/dropdown";
// import PhoneDetail from "./React-Rounter/Product/phoneDetail";
// function App() {
//   return (
//     // Routes để định nghĩa các route khác nhau.
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<HomePage />} />
//         <Route path="/" element={<NavMenu />} />
//         <Route path="/product" element={<Product />}>
//           <Route index element={<DropdownMenu />}></Route>
//           <Route path="laptop" element={<Laptop />}></Route>
//           <Route path="phone" element={<Phone />}></Route>
//           <Route path="phone/:phoneId" element={<PhoneDetail />}></Route>
//           {/*
//           :phoneId là một tham số động, và bất kỳ giá trị nào được cung cấp trong đoạn URL sau /phone/ sẽ được chụp lại
//                như tham số phoneId và sau đó có thể truy cập trong thành phần PhoneDetail.
//           => trong một URL như /product/phone/123, giá trị 123 sẽ được chụp lại như tham số phoneId

//           */}
//         </Route>
//         <Route path="*" element={<NotFound />} />
//         {/* check từ dưới lên trên */}
//       </Routes>
//     </BrowserRouter>
//     // Route path="/":Đây là route gốc or route mặc định..Khi đường dẫn URL của ứng dụng khớp với "/" ,nội dung của Layout sẽ được hiển thị
//     // Route path="blogs" element={<Blogs />}: Đây là route con khác. Khi đường dẫn URL khớp với "/blogs"
//     // nội dung của Blogs sẽ được hiển thị.
//   );
// }

// export default App;
