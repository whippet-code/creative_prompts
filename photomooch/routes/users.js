var express = require("express");
var router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const { User } = require("../models/user");

const { getUsers, authUser, authAdmin } = require("../middlewear/middlewear");

// log in route
router.post("/login", async (req, res) => {
  // get users from db
  const users = await getUsers();

  // check if user exists
  const user = users.find((u) => u.username === req.body.username);
  if (!user) return res.status(400).json({ message: "Invalid username." });

  // check if password is correct
  if (user.password !== req.body.password) {
    return res.status(400).json({ message: "Invalid password." });
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
    process.env.JWT_PASS,
    { expiresIn: "12h" }
  );

  // confirm login
  console.log(`User ${user.username} logged in.`);
  // send user data & token to client
  res.json({
    token: token,
    user: {
      id: user._id,
      username: user.username,
      isAdmin: user.isAdmin,
      savedPrompts: user.savedPrompts,
      completedPrompts: user.completedPrompts,
    },
    message: "User logged in.",
  });
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
  // server confirmation
  console.log("New user registered: " + newUser.username);

  // confirm to client
  res.json({ message: "User registered. Please log in." });
});

// edit user's saved promtps array by id
router.put("/save/:id", authUser, async (req, res) => {
  console.log(`User ${req.params.id} requesting update to saved prompts.`);
  // find user by id (use mongoose method findById)
  const id = req.params.id;
  const update = req.body;
  const user = await User.findById(id);
  if (!user) return res.status(400).json({ message: "User not found." });

  // update user's saved prompts array
  user.savedPrompts = update.savedPrompts;

  // save updated user to db
  await user.save();

  // confirm to client
  res.json({ message: "Users saved prompts updated." });
});

// edit user's completed promtps array by id
router.put("/complete/:id", authUser, async (req, res) => {
  console.log(`User ${req.params.id} requesting update to completed prompts.`);

  // find user by id
  const id = req.params.id;
  const update = req.body;
  const user = await User.findById(id);
  if (!user) return res.status(400).json({ message: "User not found." });

  // update user's completed prompts array
  user.completedPrompts = update.completedPrompts;

  // save updated user to db
  await user.save();

  // confirm to client
  res.json({ message: "User completed prompts updated." });
});

module.exports = router;
