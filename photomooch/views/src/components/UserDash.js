// user dashboard.
// makes a fetch call to server to get user info
// save user info in state
// shows username, email, and prompts they have completed and saved (from user info in JWT) using the UserPrompt component

import React from "react";

import { Card } from "react-bootstrap";

import UserPrompt from "./UserPrompt";

// passed full prompt list & userInfo as props
function UserDash(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.user.username}</Card.Title>
          <Card.Text>User Stats</Card.Text>
        </Card.Body>
      </Card>

      <div className="completedPrompts">
        <h2>Completed Prompts</h2>
        {props.prompts.map((prompt) => {
          if (props.user.completedPrompts.includes(prompt._id)) {
            return <UserPrompt prompt={prompt} key={prompt._id} />;
          } else return null;
        })}
      </div>

      <div className="savedPrompts">
        <h2>Saved Prompts</h2>
        {props.prompts.map((prompt) => {
          if (props.user.savedPrompts.includes(prompt._id)) {
            return <UserPrompt prompt={prompt} key={prompt._id} />;
          } else return null;
        })}
      </div>
    </div>
  );
}

export default UserDash;
