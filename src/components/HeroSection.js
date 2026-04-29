import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section">
      <Container className="text-center hero-content">
        <p className="hero-kicker">MAY 15, 2026 • MADISON, WI</p>
        <h1 className="hero-title">Madtown Mayhem</h1>
        <p className="hero-subtitle">
          A futuristic one-night music festival featuring global headliners,
          neon visuals, and nonstop energy.
        </p>

        <div className="hero-actions">
          <Button as={Link} to="/tickets" variant="danger" size="lg">
            Get Tickets
          </Button>
          <Button as={Link} to="/lineup" variant="outline-light" size="lg">
            View Lineup
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;