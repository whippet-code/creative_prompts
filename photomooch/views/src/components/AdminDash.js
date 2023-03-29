// admin dashboard
// accepts props for all prompts
// used add prompt comp
// shows all prompts using admin prompt comp

import React from "react";

import { Card } from "react-bootstrap";

import AdminPrompt from "./AdminPrompt";
import AddPrompt from "./AddPrompt";

function AdminDash(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Admin Dashboard</Card.Title>
        </Card.Body>
      </Card>

      <AddPrompt />

      <div className="allPrompts">
        {props.prompts.map((prompt) => (
          <AdminPrompt prompt={prompt} key={prompt._id} />
        ))}
      </div>
    </div>
  );
}

export default AdminDash;
