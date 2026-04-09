import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container className="text-center">
        <h1 className="hero-title">Madtown Mayhem</h1>
        <p className="hero-subtitle">Madison’s biggest summer music festival</p>
        <p className="hero-date">May 15, 2026 • Madison, Wisconsin</p>
        <Button as={Link} to="/tickets" variant="danger" size="lg">
          Buy Tickets
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;