require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");
const path = require("path"); // Import path module

const connectDB = require("./config/db");
const auth = require("./middlewares/auth");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")());

// Routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));

// Serve static files
app.use(express.static(path.join(__dirname, "frontend", "build")));

// For all other requests, serve the built frontend file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// Server configurations
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on port: ${PORT}`);
});
