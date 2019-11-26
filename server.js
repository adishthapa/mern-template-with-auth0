// Dependencies
// ============================================================================
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Sets up the Express App
// ============================================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
// ============================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves up static assets
// ============================================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Adds the Routes to the app
// ============================================================================
app.use(routes);

// Connect to the MongoDB
// ============================================================================
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/your-database"
);

// Starts the Express app
// ============================================================================
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
