import { Container, Row, Col, Alert, Button, Form } from "react-bootstrap";
import { useState } from "react";
import ArtistCard from "../components/ArtistCard";

function LineupPage() {

  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function toggleFavorite(name) {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((artist) => artist !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  }

  const artists = [
    { name: "Drake", time: "9:30 PM", image: process.env.PUBLIC_URL + "/images/drake.jpg" },
    { name: "Travis Scott", time: "8:30 PM", image: process.env.PUBLIC_URL + "/images/travis-scott.jpg" },
    { name: "Don Toliver", time: "7:30 PM", image: process.env.PUBLIC_URL + "/images/don-toliver.jpg" },
    { name: "Justin Bieber", time: "6:00 PM", image: process.env.PUBLIC_URL + "/images/justin-bieber.jpg" },
    { name: "Bruno Mars", time: "7:00 PM", image: process.env.PUBLIC_URL + "/images/bruno-mars.jpg" },
    { name: "David Guetta", time: "5:00 PM", image: process.env.PUBLIC_URL + "/images/david-guetta.jpg" },
    { name: "Katy Perry", time: "4:00 PM", image: process.env.PUBLIC_URL + "/images/katy-perry.jpg" },
    { name: "Rihanna", time: "8:00 PM", image: process.env.PUBLIC_URL + "/images/rihanna.jpg" },
    { name: "The Weeknd", time: "10:30 PM", image: process.env.PUBLIC_URL + "/images/the-weeknd.jpg" }
  ];

  const displayedArtists = artists
    .filter((artist) =>
      artist.name.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
    )
    .filter((artist) =>
      showFavoritesOnly ? favorites.includes(artist.name) : true
    );

  return (
    <Container className="my-5">

      <h1 className="section-title text-center mb-3">Artist Lineup</h1>

      <Alert variant="dark" className="text-center">
        ⭐ Favorites Selected: {favorites.length}
      </Alert>

      <div className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for an artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="text-center mb-4">
        <Button
          variant={showFavoritesOnly ? "success" : "outline-light"}
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
        >
          {showFavoritesOnly ? "Show All Artists" : "View Favorites"}
        </Button>
      </div>

      {favorites.length > 0 && (
        <p className="text-center mb-4">
          Your Favorites: {favorites.join(", ")}
        </p>
      )}

      <Row className="g-4">
        {displayedArtists.map((artist, index) => (
          <Col md={4} key={index}>
            <ArtistCard
              name={artist.name}
              time={artist.time}
              image={artist.image}
              isFavorited={favorites.includes(artist.name)}
              onToggle={toggleFavorite}
            />
          </Col>
        ))}
      </Row>

      {displayedArtists.length === 0 && (
        <p className="text-center mt-4">
          No artists found.
        </p>
      )}

    </Container>
  );
}

export default LineupPage;