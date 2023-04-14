// admin dashboard
// accepts props for all prompts
// used add prompt comp
// shows all prompts using admin prompt comp

import React from "react";
import { Navigate } from "react-router";

import { Card } from "react-bootstrap";

import AdminPrompt from "./AdminPrompt";
import AddPrompt from "./AddPrompt";

// props are user & prompts
function AdminDash(props) {
  if (!props.user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="dash">
      <Card className="dash-title-card">
        <Card.Body className="dash-title">
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
