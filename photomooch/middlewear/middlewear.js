// helper functions and custom middlewear

// import dependencies
const jwt = require("jsonwebtoken");

// func to check jwt token if user is logged in or not and if they have access to the route
function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  jwt.verify(token, "jwtPrivateKey", (err, decoded) => {
    if (err) return res.status(400).send("Invalid token.");
    req.user = decoded;
    next();
  });
}

// func to check if user is admin or not
function admin(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("Access denied.");
  next();
}

// func to check if user is logged in or not
function loggedIn(req, res, next) {
  if (!req.user) return res.status(403).send("Access denied.");
  next();
}

// func to get all users from db
async function getUsers() {
  const users = await User.find();
  return users;
}

// func to get all prompts from db
async function getPrompts() {
  const prompts = await Prompt.find();
  return prompts;
}