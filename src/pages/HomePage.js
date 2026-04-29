import { Container } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import CountdownTimer from "../components/CountdownTimer";
import ScheduleTable from "../components/ScheduleTable";
import FestivalInfoCard from "../components/FestivalInfoCard";
import FestivalMap from "../components/FestivalMap";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Container>
        <FestivalInfoCard />
      </Container>
      <CountdownTimer />
      <FestivalMap />
      <ScheduleTable />
    </>
  );
}

export default HomePage;