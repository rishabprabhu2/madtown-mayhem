import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LineupPage from "./pages/LineupPage";
import TicketsPage from "./pages/TicketsPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lineup" element={<LineupPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;