// Admin prompt comp to generate prompt data for admin dash
// will render a card from the prompt passed in as props
// return prompt title, prompt, image, category, tags and author along with edit & delete buttons

import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

import EditPrompt from "./EditPrompt";

// props are prompt data
function AdminPrompt(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // fetch call to server to delete prompt from db using id
  const handleDelete = () => {
    fetch(`http://localhost:8080/prompts/${props._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.prompt.title}</Card.Title>
          <Card.Text>{props.prompt.prompt}</Card.Text>
          <Card.Text>{props.prompt.image}</Card.Text>
          <Card.Text>{props.prompt.category}</Card.Text>
          <Card.Text>{props.prompt.tags}</Card.Text>
          <Card.Text>{props.prompt.author}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Edit
          </Button>
          <EditPrompt
            prompt={props.prompt}
            show={show}
            handleClose={handleClose}
          />
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminPrompt;
