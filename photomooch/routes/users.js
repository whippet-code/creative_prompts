var express = require("express");
var router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models/user");
const { validateUser } = require("../models/user");

const { getUsers, auth, admin, loggedIn } = require("../middlewear/middlewear");

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
    "jwtPrivateKey",
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
router.put("/save/:id", async (req, res) => {
  console.log("save route hit");

  // find user by id (use mongoose method findById)
  const id = req.params.id;
  const update = req.body;
  const user = await User.findById(id);
  if (!user) return res.status(400).json({ message: "User not found." });

  // update user's saved prompts array
  user.savedPrompts = update;

  // save updated user to db
  await user.save();

  // server confirmation
  console.log(`User ${user.username} saved prompt ${req.body.savedPrompts}`);

  // confirm to client
  res.json({ message: "User saved prompt." });
});

// edit user's completed promtps array by id
router.put("/complete/:id", async (req, res) => {
  // get users from db
  const users = await getUsers();

  // find user by id
  const user = users.find((u) => u._id === req.params.id);
  if (!user) return res.status(400).json({ message: "User not found." });

  // update user's completed prompts array
  user.completedPrompts = req.body.completedPrompts;

  // save updated user to db
  await user.save();

  // server confirmation
  console.log(
    `User ${user.username} completed prompt ${req.body.completedPrompts}`
  );

  // confirm to client
  res.json({ message: "User completed prompt." });
});

module.exports = router;
