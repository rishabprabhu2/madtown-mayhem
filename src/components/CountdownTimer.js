import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function CountdownTimer() {
  const targetDate = new Date("May 15, 2026 18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="section-title text-center mb-4">Countdown to Mayhem</h2>
      <Row className="g-3 text-center">
        <Col md={3} xs={6}>
          <Card className="count-card">
            <Card.Body>
              <h3>{timeLeft.days}</h3>
              <p>Days</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={6}>
          <Card className="count-card">
            <Card.Body>
              <h3>{timeLeft.hours}</h3>
              <p>Hours</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={6}>
          <Card className="count-card">
            <Card.Body>
              <h3>{timeLeft.minutes}</h3>
              <p>Minutes</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xs={6}>
          <Card className="count-card">
            <Card.Body>
              <h3>{timeLeft.seconds}</h3>
              <p>Seconds</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CountdownTimer;