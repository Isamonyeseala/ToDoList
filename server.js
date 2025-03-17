const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");
const taskRoutes = require("./routes/tasks");

// Load environment variables
dotenv.config();

const app = express(); // Initialize 'app' once
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Session setup
app.use(
  session({
    secret: "random-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

// Assign a temporary user ID if not set
const { ObjectId } = mongoose.Types;

app.use((req, res, next) => {
  if (!req.session.userId) {
    req.session.userId = new ObjectId(); // Generate a valid MongoDB ObjectId
  }
  next();
});
// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/", taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
