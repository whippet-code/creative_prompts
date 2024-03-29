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
    try {
      fetch(
        `https://photo-mooch-api.onrender.com/prompts/${props.prompt._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data.message));
      // alert user of success via modal pop up
      alert("Prompt deleted");
      // update prompts styling to hide from view
      document.getElementById(props.prompt._id).style.display = "none";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-prompt" id={props.prompt._id}>
      <Card style={{ width: "36rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={props.prompt.image} />
          <Card.Title style={{ color: "black" }}>
            {props.prompt.title}
          </Card.Title>
          <Card.Text>{props.prompt.prompt}</Card.Text>
          <Card.Text>{props.prompt.category}</Card.Text>
          <Card.Text>{props.prompt.author}</Card.Text>
          <div className="editButtons">
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
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminPrompt;
