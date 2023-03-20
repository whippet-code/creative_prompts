//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useState, useEffect } from "react";

//import components
import PromptHolder from "./components/Prompt";

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
      <PromptHolder {...prompts} />
      <h3>Stuff</h3>
    </div>
  );
}

export default App;
