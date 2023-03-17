var express = require("express");
var router = express.Router();

const { User } = require("../models/user");

/* GET users listing. */
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// get user by id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

module.exports = router;
