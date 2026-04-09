import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Madtown Mayhem
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="festival-navbar" />
        <Navbar.Collapse id="festival-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/lineup">
              Lineup
            </Nav.Link>
            <Nav.Link as={Link} to="/tickets">
              Tickets
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;