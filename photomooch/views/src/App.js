//import bootstrap & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState, useEffect } from "react";

//import components
import PromptHolder from "./components/PromptHolder";

//test imports
import AddPrompt from "./components/AddPrompt";
import Register from "./components/Register";

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/prompts")
      .then((res) => res.json())
      .then((data) => setPrompts(data));
  }, []);

  return (
    <div className="App">
      <PromptHolder prompts={prompts} />
      <AddPrompt />
      <Register />
    </div>
  );
}

export default App;
