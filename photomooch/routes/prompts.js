var express = require("express");
var router = express.Router();

const { Prompt } = require("../models/prompt");
const admin = require("../middlewear/admin");
const auth = require("../middlewear/auth");
const getPrompts = require("../middlewear/middlewear");

/* GET all prompts listing. */ // TEST TO ENSURE DB CONNECTION // call getPrompts() to get all prompts from db
router.get("/", async (req, res) => {
  const prompts = await getPrompts();
  res.send(prompts);
});

// Add a prompt to the database via POST request and use req body JSON object // NEEDS JWT AUTH to confirm user isAdmin
// verify user is admin
router.post("/", [auth, admin], async (req, res) => {
  // create new prompt // does  newPrompt = new Prompt({...req.newPrompt}) work?
  const newPrompt = new Prompt({
    title: req.body.title,
    prompt: req.body.prompt,
    image: req.body.image,
    category: req.body.category,
    tags: req.body.tags,
    author: req.body.author,
  });

  // save new prompt to db
  await newPrompt.save();

  // confirm prompt was added to db
  res.send(newPrompt);
});

module.exports = router;
