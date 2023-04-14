var express = require("express");
var router = express.Router();

// protect routes by redirecting if user isn't logged in
const { authUser } = require("../middlewear/middlewear");

// get user profile
router.get("/profile", authUser, async (req, res) => {
  // get user from db
  const user = await User.findById(req.user._id).select("-password");
  // send user data to client
  res.json(user);
});

module.exports = router;
