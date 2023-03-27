import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"; // import bootstrap components

const AddPrompt = () => {
  const [show, setShow] = useState(false);

  const [newPrompt, setNewPrompt] = useState({
    title: "",
    prompt: "",
    image: "",
    category: "",
    tags: [],
    author: "",
  });

  const handleChange = (e) => {
    setNewPrompt({ ...newPrompt, [e.target.name]: e.target.value });
  };

  // Cose (hide) modal
  const handleClose = () => {
    setShow(false);
  };

  // submit newPrompt to DB to add, clear inputs ready for next prompt
  const handleSubmit = () => {
    // send newPrompt to DB
    // verify form is completed
    if (
      newPrompt.title !== "" ||
      newPrompt.prompt !== "" ||
      newPrompt.image !== "" ||
      newPrompt.category !== ""
    ) {
      return alert(
        "Please ensure new prompt has a title, prompt, category and image link url"
      );
    }
    //make fetch call to server to add new prompt
    fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // token: ADD TOKEN HERE FROM LOCAL STORAGE
      },
      body: JSON.stringify(newPrompt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    // Clear inputs
    // create empty prompt obj
    const emptyPrompt = {
      title: "",
      prompt: "",
      image: "",
      category: "",
      author: "",
    };
    // set newPrompt state to emptyState
    setNewPrompt((prev) => emptyPrompt);
  };

  return (
    <div className="add-prompt">
      <button onClick={() => setShow(true)}>Add Prompt</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Prompt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlPrompt">
              <Form.Label>Prompt</Form.Label>
              <Form.Control name="prompt" type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlURL">
              <Form.Label>Image URL</Form.Label>
              <Form.Control name="image" type="text" onChange={handleChange} />
            </Form.Group>
            {/* Needs to be a selection dropdown */}
            <Form.Group className="mb-3" controlId="ControlCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                name="category"
                type="text"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control name="author" type="text" onChange={handleChange} />
            </Form.Group>
            {/* // needs to be a selection list then build array from selected*/}
            {/* <Form.Group className="mb-3" controlId="ControlTags">
              <Form.Label>Tags</Form.Label>
              <Form.Control name="tags" type="text" onChange={handleChange} />
            </Form.Group> */}
          </Form>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
          <Button varient="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddPrompt;
