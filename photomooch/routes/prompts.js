var express = require("express");
var router = express.Router();

const { Prompt } = require("../models/prompt");
const { getPrompts, admin, auth } = require("../middlewear/middlewear");

/* GET all prompts listing. */ // TEST TO ENSURE DB CONNECTION // call getPrompts() to get all prompts from db
router.get("/", async (req, res) => {
  const prompts = await getPrompts();
  res.send(prompts);
});

// Add a prompt to the database via POST request and use req body JSON object
// middlewear checks not implemented as yet. auth & admin
router.post("/", async (req, res) => {
  console.log(req.body);
  // create new prompt // does  newPrompt = new Prompt({...req.body}) work?
  const newPrompt = new Prompt({
    title: req.body.title,
    prompt: req.body.prompt,
    image: req.body.image,
    category: req.body.category,
    tags: [],
    author: req.body.author,
    completedBy: [],
  });
  console.log("New Prompt - " + newPrompt);
  // save new prompt to db
  await newPrompt.save();

  // confirm prompt was added to db
  res.send(newPrompt);
});

module.exports = router;
