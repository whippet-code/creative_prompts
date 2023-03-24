var express = require("express");
var router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const Joi = require("joi");

const { User } = require("../models/user");
const { validateUser } = require("../models/user");

const auth = require("../middlewear/auth");
const admin = require("../middlewear/admin");
const loggedIn = require("../middlewear/loggedIn");
const { getUsers } = require("../middlewear/middlewear");

// log in route
router.post("/login", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // get users from db
  const users = await getUsers();

  // check if user exists
  const user = users.find((u) => u.username === req.body.username);
  if (!user) return res.status(400).send("Invalid username or password.");

  // check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid username or password.");
  }

  // create jwt token
  const token = jwt.sign(
    { _id: user._id, isAdmin: user.isAdmin, username: user.username }, 'jwtPrivateKey', { expiresIn: '12h' }
  );

  // send token to client
  res.send(token);
});

module.exports = router;
