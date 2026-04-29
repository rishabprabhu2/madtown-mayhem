import { Button } from "react-bootstrap";

function ThemeToggle(props) {
  return (
    <Button
      variant="outline-light"
      size="sm"
      onClick={props.onToggleTheme}
      aria-label="Toggle color theme"
      className="theme-toggle-btn"
    >
      {props.theme === "dark" ? "☀️ Light" : "🌙 Neon"}
    </Button>
  );
}

export default ThemeToggle;