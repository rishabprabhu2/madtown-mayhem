import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function TicketForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState("General Admission");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setTicketType("General Admission");
  }

  return (
    <Container className="my-4">
      <h2 className="section-title mb-4">Purchase Tickets</h2>

      {submitted && (
        <Alert variant="success">
          Your ticket request has been submitted successfully!
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="ticketName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Enter your full name"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ticketEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ticketType">
          <Form.Label>Ticket Type</Form.Label>
          <Form.Select
            value={ticketType}
            onChange={(event) => setTicketType(event.target.value)}
          >
            <option>General Admission</option>
            <option>VIP</option>
            <option>Backstage Pass</option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default TicketForm;