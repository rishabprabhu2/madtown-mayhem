import { Container } from "react-bootstrap";
import TicketForm from "../components/TicketForm";
import PageHeader from "../components/PageHeader";

function TicketsPage() {
  return (
    <Container className="my-5">
      <PageHeader
        title="Tickets"
        subtitle="Choose a ticket type and submit the form to reserve your spot at Madtown Mayhem."
      />
      <TicketForm />
    </Container>
  );
}

export default TicketsPage;