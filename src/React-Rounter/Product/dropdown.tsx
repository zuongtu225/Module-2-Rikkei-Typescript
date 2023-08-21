import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import UseNavigate from "../useNagivate";

function DropdownMenu() {
  return (
    <Dropdown>
      <UseNavigate />
      <br />
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Category Of Store
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to={"./laptop"} style={{ display: "block" }}>
            Laptop
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={"./phone"} style={{ display: "block" }}>
            Phone
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;
