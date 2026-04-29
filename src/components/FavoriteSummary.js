import { Alert, Button } from "react-bootstrap";

function FavoriteSummary(props) {
  return (
    <>
      <Alert variant="dark" className="text-center">
        ⭐ Favorites Selected: {props.favorites.length}
      </Alert>

      <div className="text-center mb-4">
        <Button
          variant={props.showFavoritesOnly ? "success" : "outline-light"}
          onClick={props.onToggleView}
        >
          {props.showFavoritesOnly ? "Show All Artists" : "View Favorites"}
        </Button>
      </div>

      {props.favorites.length > 0 && (
        <p className="text-center mb-4">
          Your Favorites: {props.favorites.join(", ")}
        </p>
      )}
    </>
  );
}

export default FavoriteSummary;