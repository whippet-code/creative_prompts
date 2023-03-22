var express = require("express");
var router = express.Router();

const { Prompt } = require("../models/prompt");

/* GET all prompts listing. */ // TEST TO ENSURE DB CONNECTION
router.get("/", async (req, res) => {
  const prompts = await Prompt.find();
  res.json(prompts);
});

// Add a prompt to the database via POST request and use req body JSON object // NEEDS JWT AUTH FOR ADMIN ONLY
router.post("/", async (req, res) => {
  const prompt = new Prompt({ ...req.body });
  insertedPrompt = await prompt.save();
  res.json(insertedPrompt);
});

module.exports = router;
