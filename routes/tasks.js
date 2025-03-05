const express = require("express");
const Task = require("../models/Task");  // Use require instead of import

const router = express.Router();

// Home Route - Display tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render("index", { tasks });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// Add New Task
router.post("/add", async (req, res) => {
    const { description, priority } = req.body;
    
    try {
        const newTask = new Task({ description, priority, completed: false });
        await newTask.save();
        res.redirect("/");
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).send("Server Error");
    }
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


module.exports = router;  // Export the router with module.exports

router.get("/dashboard", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    res.send(`Welcome ${req.user.username}! <a href="/logout">Logout</a>`);
});
