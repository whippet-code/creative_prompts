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

  // save new prompt to db
  await newPrompt.save();

  // confirm prompt was added to db
  res.json({ message: `New prompt added to DB - ${newPrompt.title}` });
});

// Update a prompt in the database via PUT request and use req body JSON object
// middlewear checks not implemented as yet. auth & admin
router.put("/:id", async (req, res) => {
  // get prompt from db
  const prompt = await Prompt.findById(req.params.id);
  if (!prompt) return res.status(404).send("Prompt not found.");
  // update prompt
  prompt = {
    ...prompt,
    ...req.body,
  };

  // save updated prompt to db
  await prompt.save();

  // confirm prompt was updated in db
  res.json({ message: `Prompt updated in DB - ${prompt.title}` });
});

// Delete a prompt from the database via DELETE request and prompt _id
// middlewear checks not implemented as yet. auth & admin
router.delete("/:id", async (req, res) => {
  // get prompt from db
  const prompt = await Prompt.findById(req.params.id);
  if (!prompt) return res.status(404).send("Prompt not found.");
  // delete prompt from db
  await prompt.remove();

  // confirm prompt was deleted from db
  res.json({ message: `Prompt deleted from DB - ${prompt.title}` });
});

module.exports = router;
