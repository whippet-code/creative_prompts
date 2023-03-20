// filter form componenet for selection prompts
// componennt renders a modal with two toggle switches
// first toggle has shorter, any and longer settings
// second toggle has indoors, and and outdoors settings
// component then passes the selected settings to the parent component

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"; // import bootstrap components

const Filter = ({ show, handleClose, handleFilter }) => {
  const [filter, setFilter] = useState([]);

  const handleChange = (e) => {
    // handle change of filter settings
    if (e.target.value !== "any") setFilter((prev) => prev + e.target.value);
  };

  const handleSubmit = (e) => {
    // handle submit of filter settings
    e.preventDefault();
    handleFilter(filter);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Filter Prompts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Length</Form.Label>
            <Form.Control
              as="select"
              name="length"
              value={filter.length}
              onChange={handleChange}
            >
              <option value="any">Any</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Location</Form.Label>
            <Form.Control
              as="select"
              name="location"
              value={filter.location}
              onChange={handleChange}
            >
              <option value="any">Any</option>
              <option value="indoors">Indoors</option>
              <option value="outdoors">Outdoors</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Filter;
