// user dashboard.
// makes a fetch call to server to get user info
// save user info in state
// shows username, email, and prompts they have completed and saved (from user info in JWT) using the UserPrompt component

import React from "react";
import { useState, useEffect } from "react";

import { Card } from "react-bootstrap";

import UserPrompt from "./UserPrompt";

// passed full prompt list as props
function UserDash(props) {

  // user info pulled from JWT? // SAMPLE USER DATA FOR TESTING
  const [user, setUser] = useState({
    username: "testUser",
    email: "test@gmail.com",
    completedPrompts: ["641b20e428b6e81cba48ea34", "641b24d528b6e81cba48ea38"],
    savedPrompts: ["641b1edf28b6e81cba48ea2e", "641b1dba28b6e81cba48ea2a"],
    isAdmin: false,
  });

  // useEffect(() => {
  //   fetch("http://localhost:8080/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUser(data);
  //       setCompletedPrompts(data.completedPrompts);
  //       setSavedPrompts(data.savedPrompts);
  //     });
  // }, []);

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
        {props.prompts.map((prompt) => {
          if (user.completedPrompts.includes(prompt._id)) {
            return <UserPrompt prompt={prompt} key={prompt._id} />;
          } else return null;
        })}
      </div>

      <div className="savedPrompts">
        <h2>Saved Prompts</h2>
        {props.prompts.map((prompt) => {
          if (user.savedPrompts.includes(prompt._id)) {
            return <UserPrompt prompt={prompt} key={prompt._id} />;
          } else return null;
        })}
      </div>
    </div>
  );
}

export default UserDash;
