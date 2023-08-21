import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useNavigate } from "react-router-dom";

function UseNavigate() {
  const nagivate = useNavigate();
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button onClick={() => nagivate(-1)}>Back 1 page</Button>
        <Button>Back 2 page</Button>
        <Button>Next 1 page</Button>
        <Button>Next 2 page</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default UseNavigate;
