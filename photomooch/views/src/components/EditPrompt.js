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

  const handleClose = () => {
    props.handleClose();
  };

  // make fetch call to server to update prompt
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch(
        `https://photo-mooch-api.onrender.com/prompts/${props.prompt._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify(editPromptData),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data.message));

      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        show={props.show}
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Prompt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* THINK THIS SHOULD WORK, AND IT'S CLEANER */}
            {/* {Object.entries(editPromptData).map(([key, value]) => {
              return (
                <Form.Group className="mb-3" controlId={`form${key}`}>
                  <Form.Label>{key}</Form.Label>
                  <Form.Control
                    name={key}
                    type="text"
                    placeholder={`Enter ${key}`}
                    onChange={handleChange}
                    value={value}
                  />
                </Form.Group>
              )}
            )} */}

            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter title"
                onChange={handleChange}
                value={editPromptData.title}
              />
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="url"
                placeholder="Enter image URL"
                onChange={handleChange}
                value={editPromptData.image}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                type="text"
                placeholder="Enter category"
                onChange={handleChange}
                value={editPromptData.category}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="author"
                type="text"
                placeholder="Enter author"
                onChange={handleChange}
                value={editPromptData.author}
              />
            </Form.Group>

            {/* HELD BACK FOR NOW, IMPLEMENT STRING TO ARRAY */}
            {/* <Form.Group className="mb-3" controlId="formTags">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                name="tags"
                type="text"
                placeholder="Enter tags"
                onChange={handleChange}
                value={editPromptData.tags}
              />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditPrompt;
