import { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";

function TicketForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState("General Admission");
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowConfirmation(true);
  }

  function handleClose() {
    setShowConfirmation(false);
    setName("");
    setEmail("");
    setTicketType("General Admission");
  }

  return (
    <Container className="my-4">
      <h2 className="section-title mb-4">Purchase Tickets</h2>

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
          Reserve Ticket
        </Button>
      </Form>

      <Modal show={showConfirmation} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Reserved!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          🎉 Thanks, {name}! Your {ticketType} ticket request for Madtown Mayhem has been submitted.
          A confirmation would be sent to {email}.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TicketForm;