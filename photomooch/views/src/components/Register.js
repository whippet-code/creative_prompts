// Register Component

import React from "react";
import { useState } from "react";

// bootstrap comps
import { Form, Button } from "react-bootstrap";

function Register() {
  const [logInData, setLogInData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
    savedPrompt: [],
    completedPrompts: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Register user
  const handleSubmit = (e) => {
    e.preventDefault();
    // confirm complete
    if (
      !logInData.username ||
      !logInData.email ||
      !logInData.password ||
      !logInData.passwordConfirm
    ) {
      alert("Please complete all fields");
      return;
    }
    // confirm passwords match
    if (logInData.password !== logInData.passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    // make fetch call to server to register user
    try {
      fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logInData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(`Recieved register request. ${data.message}`);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Register;
