const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: {
    type: String,
    enum: ["Do Now", "Schedule", "Delegate", "Eliminate"],
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
