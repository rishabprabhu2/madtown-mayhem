import { Container } from "react-bootstrap";
import TicketForm from "../components/TicketForm";

function TicketsPage() {
  return (
    <Container className="my-5">
      <h1 className="section-title text-center mb-4">Tickets</h1>
      <p className="text-center mb-4">
        Choose your ticket type and submit the form below to reserve your spot at Madtown Mayhem.
      </p>
      <TicketForm />
    </Container>
  );
}

export default TicketsPage;