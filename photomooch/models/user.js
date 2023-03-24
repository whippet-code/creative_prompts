// user schema model
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedPrompts: {
    type: Array,
    required: false,
  },
  completedPrompts: {
    type: Array,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

// validate user input
function validateUser(user) {
  const schema = {
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  };

  return Joi.validate(user, schema);
}

module.exports = { User };
