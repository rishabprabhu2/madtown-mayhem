import { Container } from "react-bootstrap";

function PageHeader(props) {
  return (
    <Container className="text-center my-5">
      <h1 className="section-title">{props.title}</h1>
      <p className="page-subtitle">{props.subtitle}</p>
    </Container>
  );
}

export default PageHeader;