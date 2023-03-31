// import required libs
import { Link, Routes, Route, useNavigate } from "react-router-dom";

//import bootstrap & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState, useEffect } from "react";

import { Button } from "react-bootstrap";

//import components
import PromptHolder from "./components/PromptHolder";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDash from "./components/UserDash";

function App() {
  const [prompts, setPrompts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/prompts")
      .then((res) => res.json())
      .then((data) => setPrompts(data));
  }, []);

  // check if token exists in localStorage
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        {isLoggedIn ? (
          <Button onClick={handleLogout} className="link">
            Log Out
          </Button>
        ) : (
          <Link to="/login" className="link">
            Log In
          </Link>
        )}
        <Link to="/register" className="link">
          Register
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<PromptHolder prompts={prompts} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />}
        />
        <Route path="/register" element={<Register navigate={navigate} />} />
        <Route path="/dashboard" element={<UserDash />} />
      </Routes>
    </div>
  );
}

export default App;
