import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function CountdownTimer() {
  const targetDate = new Date("May 15, 2026 18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <Container className="my-5">
      <h2 className="section-title text-center mb-4">Countdown to Mayhem</h2>

      <Row className="g-3 text-center">
        {countdownItems.map((item) => (
          <Col md={3} xs={6} key={item.label}>
            <Card className="count-card animated-count-card">
              <Card.Body>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CountdownTimer;