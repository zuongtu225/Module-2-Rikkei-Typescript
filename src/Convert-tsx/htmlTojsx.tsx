import React from "react";

class ToTsx extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="heading">Đây là COMPONENT HTML TO TSX</h1>
        </div>
        <form>
          <label htmlFor="name" className="form-lable">
            Tên đăng nhập
          </label>
          <br />
          <input className="form-input" id="name" />
          <br />
          <button className="form-submit" type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    );
  }
}
export default ToTsx;
