const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");

// MongoDB Connection
mongoose
.connect(process.env.MONGO_URI)  
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));
// Routes
app.use("/", taskRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})