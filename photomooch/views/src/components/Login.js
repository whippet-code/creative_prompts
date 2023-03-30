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

  //login fetch call
  const handleSubmit = (e) => {
    e.preventDefault();
    // take logInData and send to server
    try {
      fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logInData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(
            `Recieved login request. Server response ${data.message}`
          );
          // if data.token exists, store token in localStorage
          if (data.token) {
            localStorage.setItem("token", data.token);
          }
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
