import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function NavigationBar(props) {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Madtown Mayhem
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="festival-navbar" />

        <Navbar.Collapse id="festival-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/lineup">Lineup</Nav.Link>
            <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
            <ThemeToggle
              theme={props.theme}
              onToggleTheme={props.onToggleTheme}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;