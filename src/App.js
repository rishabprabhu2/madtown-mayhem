import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <h1 className="title">Madtown Mayhem</h1>

      <button 
        className="ticketButton"
        onClick={() => setCount(count + 1)}
      >
        Tickets Sold: {count}
      </button>

    </div>
  );
}

export default App;