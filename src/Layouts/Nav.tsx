import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function NavMenu() {
  const nagivate = useNavigate();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>HOME</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>User</Nav.Link>
            {/* khi click thì về trang chủ */}
            <Nav.Link>
              <Link to={"/product"}>Product</Link>
            </Nav.Link>
            {/* khi click thì sẽ thêm /product vào cuối đường link */}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavMenu;
