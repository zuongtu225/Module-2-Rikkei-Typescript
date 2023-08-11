import React from "react";
interface MyProps {
  // Định nghĩa các props của component ở đây
}

interface MyState {
  // Định nghĩa state của component ở đây
}

class Body extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    // Khởi tạo state và thực hiện các công việc khởi tạo khác.
  }

  render() {
    return (
      <div>
        <h1>Body được extends</h1>
      </div>
    );
  }
}

export default Body;
