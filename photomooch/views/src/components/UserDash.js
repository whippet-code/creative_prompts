// user dashboard.
// makes a fetch call to server to get user info
// save user info in state
// shows username, email, and prompts they have completed and saved (from user info in JWT) using the UserPrompt component

import React from "react";
import { useState, useEffect } from "react";

import { Card } from "react-bootstrap";

import UserPrompt from "./UserPrompt";

function UserDash() {
  const [user, setUser] = useState({});
  const [completedPrompts, setCompletedPrompts] = useState([]);
  const [savedPrompts, setSavedPrompts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setCompletedPrompts(data.completedPrompts);
        setSavedPrompts(data.savedPrompts);
      });
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>

      <div className="completedPrompts">
        <h2>Completed Prompts</h2>
        {completedPrompts.map((prompt) => (
          <UserPrompt title={prompt.title} prompt={prompt.prompt} />
        ))}
      </div>

      <div className="savedPrompts">
        <h2>Saved Prompts</h2>
        {savedPrompts.map((prompt) => (
          <UserPrompt title={prompt.title} prompt={prompt.prompt} />
        ))}
      </div>
    </div>
  );
}

export default UserDash;
