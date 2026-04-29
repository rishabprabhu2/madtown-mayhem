import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import HomePage from "./pages/HomePage";
import LineupPage from "./pages/LineupPage";
import TicketsPage from "./pages/TicketsPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <main key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/lineup" element={<LineupPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className={`app-theme ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavigationBar theme={theme} onToggleTheme={toggleTheme} />
        <AnimatedRoutes />
        <Footer />
        <BackToTopButton />
      </BrowserRouter>
    </div>
  );
}

export default App;