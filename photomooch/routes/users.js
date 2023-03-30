var express = require("express");
var router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const { validateUser } = require("../models/user");

const { getUsers, auth, admin, loggedIn } = require("../middlewear/middlewear");

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
    {
      _id: user._id,
      isAdmin: user.isAdmin,
      username: user.username,
      email: user.email,
      completedPrompts: user.completedPrompts,
      savedPrompts: user.savedPrompts,
    },
    "jwtPrivateKey",
    { expiresIn: "12h" }
  );

  // send token to client
  res.send(token);
});

// register new user route
router.post("/register", async (req, res) => {
  // const { error } = validateUser(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  // get users from db
  const users = await getUsers();

  // check if user already exists
  const user = users.find((u) => u.username === req.body.username);
  if (user) return res.status(400).send("User already registered.");

  // create new user
  const newUser = new User({
    id: new Date(),
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isAdmin: false,
    savedPrompts: [],
    completedPrompts: [],
  });

  // add newUser to db, don't encypt password at this point (later builds)
  await newUser.save();

  // confirm
  res.send("User registered. Please log in.");
});

module.exports = router;
