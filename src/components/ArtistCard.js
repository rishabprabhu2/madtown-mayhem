import { Card, Button } from "react-bootstrap";

function ArtistCard(props) {
  return (
    <Card className={`artist-card h-100 ${props.isFavorited ? "favorited" : ""}`}>
      <Card.Img variant="top" src={props.image} alt={props.name} />
      <Card.Body>
        <Card.Title>{props.displayName || props.name}</Card.Title>
        <Card.Text>
          <strong>Set Time:</strong> {props.time}
        </Card.Text>

        <div className="artist-button-group">
          <Button
            variant={props.isFavorited ? "success" : "outline-danger"}
            onClick={() => props.onToggle(props.name)}
          >
            {props.isFavorited ? "Favorited" : "Favorite Artist"}
          </Button>

          <Button
            variant="outline-light"
            onClick={() => props.onSpotlight(props.name)}
          >
            Spotlight
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArtistCard;