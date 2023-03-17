var express = require("express");
var router = express.Router();

const { Prompt } = require("../models/prompt");

/* GET all prompts listing. */ // TEST TO ENSURE DB CONNECTION
router.get("/", async (req, res) => {
  const prompts = await Prompt.find();
  res.json(prompts);
});

module.exports = router;
