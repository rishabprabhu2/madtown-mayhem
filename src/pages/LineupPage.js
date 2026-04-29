import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import FavoriteSummary from "../components/FavoriteSummary";
import PageHeader from "../components/PageHeader";

function LineupPage() {
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [spotlightArtist, setSpotlightArtist] = useState(null);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(name) {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((artist) => artist !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  }

  function getHighlightedName(name) {
    const trimmedSearch = searchTerm.trim();

    if (trimmedSearch === "") {
      return name;
    }

    const lowerName = name.toLowerCase();
    const lowerSearch = trimmedSearch.toLowerCase();

    if (!lowerName.startsWith(lowerSearch)) {
      return name;
    }

    return (
      <>
        <mark className="search-highlight">{name.slice(0, trimmedSearch.length)}</mark>
        {name.slice(trimmedSearch.length)}
      </>
    );
  }

  const artists = [
    {
      name: "Drake",
      time: "9:30 PM",
      stage: "Main Stage",
      image: process.env.PUBLIC_URL + "/images/drake.jpg",
      description: "A global superstar known for chart-topping hits, smooth vocals, and arena-level performances."
    },
    {
      name: "Travis Scott",
      time: "8:30 PM",
      stage: "Main Stage",
      image: process.env.PUBLIC_URL + "/images/travis-scott.jpg",
      description: "Known for explosive stage energy, immersive visuals, and massive festival crowds."
    },
    {
      name: "Don Toliver",
      time: "7:30 PM",
      stage: "Electric Stage",
      image: process.env.PUBLIC_URL + "/images/don-toliver.jpg",
      description: "Bringing melodic rap and a futuristic sound that fits the neon festival atmosphere."
    },
    {
      name: "Justin Bieber",
      time: "6:00 PM",
      stage: "Main Stage",
      image: process.env.PUBLIC_URL + "/images/justin-bieber.jpg",
      description: "A pop icon with a massive catalog of hits and crowd-friendly live performances."
    },
    {
      name: "Bruno Mars",
      time: "7:00 PM",
      stage: "Main Stage",
      image: process.env.PUBLIC_URL + "/images/bruno-mars.jpg",
      description: "A world-class performer known for vocals, dancing, and polished live production."
    },
    {
      name: "David Guetta",
      time: "5:00 PM",
      stage: "Electric Stage",
      image: process.env.PUBLIC_URL + "/images/david-guetta.jpg",
      description: "An EDM legend bringing high-energy dance music and festival-ready beats."
    },
    {
      name: "Katy Perry",
      time: "4:00 PM",
      stage: "Lake Stage",
      image: process.env.PUBLIC_URL + "/images/katy-perry.jpg",
      description: "A pop headliner known for colorful performances, singalong hits, and theatrical visuals."
    },
    {
      name: "Rihanna",
      time: "8:00 PM",
      stage: "Lake Stage",
      image: process.env.PUBLIC_URL + "/images/rihanna.jpg",
      description: "A superstar with iconic hits, powerful stage presence, and a true headliner feel."
    },
    {
      name: "The Weeknd",
      time: "10:30 PM",
      stage: "Main Stage",
      image: process.env.PUBLIC_URL + "/images/the-weeknd.jpg",
      description: "A cinematic performer whose vocals and late-night sound make for a perfect closing set."
    }
  ];

  const displayedArtists = artists
    .filter((artist) =>
      artist.name.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
    )
    .filter((artist) =>
      showFavoritesOnly ? favorites.includes(artist.name) : true
    );

  const selectedArtist = artists.find((artist) => artist.name === spotlightArtist);

  return (
    <Container className="my-5 page-fade">
      <PageHeader
        title="Artist Lineup"
        subtitle="Search for artists, favorite performers, and open spotlight details for each act."
      />

      <FavoriteSummary
        favorites={favorites}
        showFavoritesOnly={showFavoritesOnly}
        onToggleView={() => setShowFavoritesOnly(!showFavoritesOnly)}
      />

      <Form.Group className="mb-3" controlId="artistSearch">
        <Form.Label>Search Artists</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search for an artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      <div className="text-center mb-4">
        <Button variant="outline-danger" onClick={() => setSearchTerm("")}>
          Clear Search
        </Button>
      </div>

      <Row className="g-4">
        {displayedArtists.map((artist, index) => (
          <Col md={4} key={index}>
            <ArtistCard
              name={artist.name}
              displayName={getHighlightedName(artist.name)}
              time={artist.time}
              image={artist.image}
              isFavorited={favorites.includes(artist.name)}
              onToggle={toggleFavorite}
              onSpotlight={setSpotlightArtist}
            />
          </Col>
        ))}
      </Row>

      {displayedArtists.length === 0 && (
        <p className="text-center mt-4">No artists found.</p>
      )}

      <Modal
        show={selectedArtist !== undefined}
        onHide={() => setSpotlightArtist(null)}
        centered
      >
        {selectedArtist && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedArtist.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="spotlight-image"
              />
              <p className="mt-3">{selectedArtist.description}</p>
              <p><strong>Stage:</strong> {selectedArtist.stage}</p>
              <p><strong>Set Time:</strong> {selectedArtist.time}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setSpotlightArtist(null)}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default LineupPage;