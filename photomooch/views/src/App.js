import "./App.css";
import { useState, useEffect } from "react";

//import components
import Prompt from "./components/Prompt";

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/prompts")
      .then((res) => res.json())
      .then((data) => setPrompts(data));
  }, []);

  return (
    <div className="App">
      <h1>Photomooch</h1>
      {prompts.map((prompt) => (
        <Prompt key={new Date()} {...prompt} />
      ))}
    </div>
  );
}

export default App;
