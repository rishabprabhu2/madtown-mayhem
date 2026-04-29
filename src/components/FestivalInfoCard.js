import { Card, Col, Row } from "react-bootstrap";

function FestivalInfoCard() {
  return (
    <section className="my-5">
      <h2 className="section-title text-center mb-4">Festival Details</h2>

      <Row className="g-4">
        <Col md={4}>
          <Card className="info-card h-100 text-center">
            <Card.Body>
              <Card.Title>Date</Card.Title>
              <Card.Text>May 15, 2026</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card h-100 text-center">
            <Card.Body>
              <Card.Title>Location</Card.Title>
              <Card.Text>Madison, Wisconsin</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="info-card h-100 text-center">
            <Card.Body>
              <Card.Title>Gates Open</Card.Title>
              <Card.Text>3:30 PM</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default FestivalInfoCard;