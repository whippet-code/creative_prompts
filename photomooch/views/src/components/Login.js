// Login Component

import React from "react";
import { useState } from "react";

// bootstrap comps
import { Form, Button } from "react-bootstrap";

function Login(props) {
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
    //ensure form is complete
    if (!logInData.username || !logInData.password) {
      alert("Please complete all fields");
      return;
    }

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
          //verify if server response is a successful log in (data.token exists)
          if (data.message !== "User logged in.") {
            alert("Invalid username or password");
            return;
          }
          // if data.token exists, store token in localStorage
          if (data.token) {
            localStorage.setItem("token", data.token);
          }
          // if data.user exists, store user in localStorage - this is userinfo
          if (data.user) {
            localStorage.setItem("user", data.user);
            props.setUser(data.user);
          }
          props.setIsLoggedIn(true);
          // send to route path "/"
          props.navigate("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <Form className="mx-auto w-50 m-10 p-5">
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
