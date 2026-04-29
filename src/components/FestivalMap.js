import { Container, Row, Col, Card } from "react-bootstrap";

function FestivalMap() {
  return (
    <Container className="my-5">
      <h2 className="section-title text-center mb-4">Festival Map</h2>

      <Row className="g-4">
        <Col md={4}>
          <Card className="map-card h-100 text-center">
            <Card.Body>
              <Card.Title>Main Stage</Card.Title>
              <Card.Text>Major headline performances and closing sets.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="map-card h-100 text-center">
            <Card.Body>
              <Card.Title>Electric Stage</Card.Title>
              <Card.Text>High-energy EDM and late-night performances.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="map-card h-100 text-center">
            <Card.Body>
              <Card.Title>VIP Lounge</Card.Title>
              <Card.Text>Premium seating, food vendors, and festival merch.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FestivalMap;