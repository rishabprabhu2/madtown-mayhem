import { Container, Row, Col } from "react-bootstrap";
import ArtistCard from "../components/ArtistCard";

function LineupPage() {
  const artists = [
    {
      name: "Drake",
      description: "A global superstar known for chart-topping hits and arena-level performances.",
      time: "9:30 PM",
      image: process.env.PUBLIC_URL + "/images/drake.jpg"
    },
    {
      name: "Travis Scott",
      description: "Known for high-energy live shows, massive festival crowds, and unforgettable stage presence.",
      time: "8:30 PM",
      image: process.env.PUBLIC_URL + "/images/travis-scott.jpg"
    },
    {
      name: "Don Toliver",
      description: "Bringing melodic rap and a unique sound that fits perfectly into the late-night festival vibe.",
      time: "7:30 PM",
      image: process.env.PUBLIC_URL + "/images/don-toliver.jpg"
    },
    {
      name: "Justin Bieber",
      description: "A pop icon whose catalog of hits would bring a huge crowd to Madtown Mayhem.",
      time: "6:00 PM",
      image: process.env.PUBLIC_URL + "/images/justin-bieber.jpg"
    },
    {
      name: "Bruno Mars",
      description: "A world-class performer known for strong vocals, showmanship, and crowd favorites.",
      time: "7:00 PM",
      image: process.env.PUBLIC_URL + "/images/bruno-mars.jpg"
    },
    {
      name: "David Guetta",
      description: "An EDM legend who would bring an electrifying dance set to the festival atmosphere.",
      time: "5:00 PM",
      image: process.env.PUBLIC_URL + "/images/david-guetta.jpg"
    },
    {
      name: "Katy Perry",
      description: "A pop headliner known for colorful performances, huge singalong moments, and iconic hits.",
      time: "4:00 PM",
      image: process.env.PUBLIC_URL + "/images/katy-perry.jpg"
    },
    {
      name: "Rihanna",
      description: "A superstar with a strong catalog of hits and the presence of a true headlining act.",
      time: "8:00 PM",
      image: process.env.PUBLIC_URL + "/images/rihanna.jpg"
    },
    {
      name: "The Weeknd",
      description: "A major headliner whose cinematic sound and live vocals make for a perfect closing set.",
      time: "10:30 PM",
      image: process.env.PUBLIC_URL + "/images/the-weeknd.jpg"
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="section-title text-center mb-4">Artist Lineup</h1>
      <Row className="g-4">
        {artists.map((artist, index) => (
          <Col md={4} key={index}>
            <ArtistCard
              name={artist.name}
              description={artist.description}
              time={artist.time}
              image={artist.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LineupPage;