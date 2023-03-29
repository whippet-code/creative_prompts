// Comp to show prompt data on user dash
// user card will show prompt title & prompt for completed & saved prompt

import React from "react";
import { Card } from "react-bootstrap";

//props are prompt data
function UserPrompt(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.prompt.title}</Card.Title>
          <Card.Text>{props.prompt.prompt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserPrompt;
