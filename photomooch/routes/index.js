var express = require("express");
var router = express.Router();

// Serve static files from the public directory
app.use(express.static("public"));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
