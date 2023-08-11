import React from "react";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import ToTsx from "./Convert-tsx/htmlTojsx";
import Logic from "./Convert-tsx/theory";
import Sum from "./Component/baitap4";
import Table from "./Component/crudThead";
import Vinhome from "./Component/vinhome";
/* 
- Trong React có Component và nhiều thành phần khác. 
- React.Component là tạo 1 Component từ thư viện React.
*/
function App() {
  return (
    <div>
      <Vinhome />
      <Header />
      <Table />
      <Body />
      <Footer />
      <ToTsx />
      <Logic />
      {/* <ReactFunction /> */}
      <Sum />
    </div>
  );
}
export default App;

/* 
  Có 2 cách export:
  - export : export được nhiều component.
  - export default : trong 1 file chỉ có thể export default 1 component.
  - khác nhau là chỗ import nhanh hơn và gọn hơn
*/
