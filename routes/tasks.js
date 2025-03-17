const express = require("express");
const Task = require("../models/Task"); // Use require instead of import

const router = express.Router();

// Home Route - Display tasks
router.get("/", async (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/login"); // Ensure user is logged in
  }

  const tasks = await Task.find({ userId: req.session.userId }); // Fetch only user's tasks
  res.render("index", { tasks });
});

// Add New Task
router.post("/add", async (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/login"); // Ensure user is logged in
  }

  await Task.create({
    description: req.body.description,
    priority: req.body.priority,
    userId: req.session.userId, // Assign task to the logged-in user
  });

  res.redirect("/");
});

// Mark task as complete
router.post("/complete/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, { completed: true });
    res.redirect("/"); // Refresh the page after completion
  } catch (error) {
    console.error("Error completing task:", error);
    res.status(500).send("Server Error");
  }
});

// Delete task
router.post("/delete/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/"); // Refresh the page after deletion
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router; // Export the router with module.exports

router.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.send(`Welcome ${req.user.username}! <a href="/logout">Logout</a>`);
});
