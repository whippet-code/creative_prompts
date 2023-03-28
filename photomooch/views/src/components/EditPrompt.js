// Edit Prompt Component
// Bootstrap modal for editing prompt
// accepts props from the selected prompt to edit
// pre-fill the form with the prompt's data
// allow user to edit the prompt
// send the updated prompt to the server

// EditPrompt Component

import React from "react";
import { useState } from "react";

// bootstrap comps
import { Form, Button, Modal } from "react-bootstrap";

// props: prompt, show, handleClose
function EditPrompt(props) {
  const [editPromptData, setEditPromptData] = useState({
    title: props.prompt.title,
    prompt: props.prompt.prompt,
    image: props.prompt.image,
    category: props.prompt.category,
    author: props.prompt.author,
    tags: props.prompt.tags,
    completedBy: props.prompt.completedBy,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPromptData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // HOLDING FUNCTION FOR SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editPromptData);
  };

  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Prompt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formPrompt">
              <Form.Label>Prompt</Form.Label>
              <Form.Control
                name="prompt"
                type="text"
                placeholder="Enter prompt"
                onChange={handleChange}
                value={editPromptData.prompt}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter description"
                onChange={handleChange}
                value={editPromptData.description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditPrompt;
