import { Card, Button } from "react-bootstrap";
import { useState } from "react";

function ArtistCard(props) {
  const [favorited, setFavorited] = useState(false);

  return (
    <Card className="artist-card h-100">
      <Card.Img variant="top" src={props.image} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          <strong>Set Time:</strong> {props.time}
        </Card.Text>
        <Button
          variant={favorited ? "success" : "outline-danger"}
          onClick={() => setFavorited(!favorited)}
        >
          {favorited ? "Favorited" : "Favorite Artist"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArtistCard;