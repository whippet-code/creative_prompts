// helper functions and custom middlewear
require("dotenv").config();

//import models
const { User } = require("../models/user");
const { Prompt } = require("../models/prompt");

// import dependencies
const jwt = require("jsonwebtoken");

// func to check jwt token if user is logged in or not and if they have access to the route
function authAdmin(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  jwt.verify(token, process.env.JWT_PASS, (err, decoded) => {
    if (err) return res.status(400).send("Invalid token.");
    if (decoded.isAdmin === false)
      return res.status(403).send("Access denied.");
    req.user = decoded;
    console.log("Admin verified");
    next();
  });
}

// // func to check jwt token if user is logged in or not and if they have access to the route
function authUser(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  jwt.verify(token, "jwtPrivateKey", (err, decoded) => {
    if (err) return res.status(400).send("Invalid token.");
    req.user = decoded;
    console.log("User verified");
    next();
  });
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

module.exports = {
  getPrompts,
  getUsers,
  authAdmin,
  authUser,
};
