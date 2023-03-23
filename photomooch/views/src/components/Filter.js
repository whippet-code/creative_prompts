// filter form componenet for selection prompts
// componennt renders a modal with two options for prompt length and location
// component then passes the selected settings to the parent component via filter state.

import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"; // import bootstrap components

const Filter = (props) => {
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    // function passed via props
    if (e.target.value !== "any") props.handleChange(e);
  };

  const handleClose = () => {
    setShow(false);
    console.log(`Filters are ${props.filter}`);
  };

  return (
    <div className="filter">
      {props.filter.length > 0 ? (
        <button
          onClick={() => {
            setShow(true);
            props.handleChange(null);
          }}
        >
          Reset Filter
        </button>
      ) : (
        <button
          onClick={() => {
            setShow(true);
            props.handleChange(null);
          }}
        >
          Set Filter
        </button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter Prompts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Length</Form.Label>
              <Form.Control as="select" name="length" onChange={handleChange}>
                <option value="any">Any</option>
                <option value="short">Short</option>
                <option value="long">Long</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Location</Form.Label>
              <Form.Control as="select" name="location" onChange={handleChange}>
                <option value="any">Any</option>
                <option value="indoors">Indoors</option>
                <option value="outdoors">Outdoors</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button variant="primary" onClick={handleClose}>
            Set Filters
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Filter;
