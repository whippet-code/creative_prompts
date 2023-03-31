// import required libs
import { Link, Routes, Route } from "react-router-dom";

//import bootstrap & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState, useEffect } from "react";

//import components
import PromptHolder from "./components/PromptHolder";
// import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDash from "./components/UserDash";

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/prompts")
      .then((res) => res.json())
      .then((data) => setPrompts(data));
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/login" className="link">
          Log In
        </Link>
        <Link to="/register" className="link">
          Register
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<PromptHolder prompts={prompts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDash />} />
      </Routes>
    </div>
  );
}

export default App;
