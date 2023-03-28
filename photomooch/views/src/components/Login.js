// Login Component

import React from "react";
import { useState } from "react";

// bootstrap comps
import { Form, Button } from "react-bootstrap";

function Login() {
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // HOLDING FUNCTION FOR SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logInData);
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default Login;
