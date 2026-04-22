import { Card, Button } from "react-bootstrap";

function ArtistCard(props) {
  return (
    <Card className="artist-card h-100">
      <Card.Img variant="top" src={props.image} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <strong>Set Time:</strong> {props.time}
        </Card.Text>
        <Button
          variant={props.isFavorited ? "success" : "outline-danger"}
          onClick={() => props.onToggle(props.name)}
        >
          {props.isFavorited ? "Favorited" : "Favorite Artist"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArtistCard;