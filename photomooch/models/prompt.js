// prompt schema model
const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  tags: {
    type: Array,
    required: true,
  },
  completedBy: {
    type: Array,
    required: false,
  },
});

const Prompt = mongoose.model("Prompt", PromptSchema);

module.exports = { Prompt };
