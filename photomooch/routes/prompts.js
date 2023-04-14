var express = require("express");
var router = express.Router();

const { Prompt } = require("../models/prompt");
const { getPrompts, authAdmin } = require("../middlewear/middlewear");

/* GET all prompts listing. */ // TEST TO ENSURE DB CONNECTION // call getPrompts() to get all prompts from db
router.get("/", async (req, res) => {
  const prompts = await getPrompts();
  res.send(prompts);
});

// Add a prompt to the database via POST request and use req body JSON object
router.post("/", authAdmin, async (req, res) => {
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
router.put("/:id", authAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const result = await Prompt.findByIdAndUpdate(id, update);

    res.json({ message: `Prompt updated in DB - ${result.title}` });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Delete a prompt from the database via DELETE request and prompt _id
router.delete("/:id", authAdmin, async (req, res) => {
  // using findByIdAndDelete() to delete prompt from db
  try {
    console.log(`Delete request for prompt with id: ${req.params.id}`);
    const id = req.params.id;
    const result = await Prompt.findByIdAndDelete(id);

    res.json({ message: `Prompt deleted from DB - ${result.title}` });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
