// import required libs
import { Link, Routes, Route, useNavigate } from "react-router-dom";

//import bootstrap & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState, useEffect } from "react";

//import components
import PromptHolder from "./components/PromptHolder";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDash from "./components/UserDash";
import AdminDash from "./components/AdminDash";

function App() {
  const [prompts, setPrompts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
    if (localStorage.getItem("user")) {
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
          user.isAdmin ? (
            <Link to="/admin" className="link">
              Admin
            </Link>
          ) : (
            <Link to="/dashboard" className="link">
              Dashboard
            </Link>
          )
        ) : (
          <Link to="/login" className="link">
            Log In
          </Link>
        )}

        {isLoggedIn ? (
          <Link className="link" onClick={handleLogout}>
            Log Out
          </Link>
        ) : (
          <Link to="/register" className="link">
            Register
          </Link>
        )}
      </nav>
      <Routes>
        <Route exact path="/" element={<PromptHolder prompts={prompts} />} />
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              navigate={navigate}
              user={user}
              setUser={setUser}
            />
          }
        />
        <Route path="/register" element={<Register navigate={navigate} />} />
        <Route
          path="/dashboard"
          element={
            <UserDash
              prompts={prompts}
              user={JSON.parse(localStorage.getItem("user"))}
            />
          }
        />
        <Route path="/admin" element={<AdminDash prompts={prompts} />} />
      </Routes>
    </div>
  );
}

export default App;
