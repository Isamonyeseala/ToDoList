const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  priority: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: String, required: true }, // Change from ObjectId to String
});

module.exports = mongoose.model("Task", taskSchema);
