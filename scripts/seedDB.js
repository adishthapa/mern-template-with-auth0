// Dependencies
// ============================================================================
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the Users below
// ============================================================================
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/your-database"
);

const userSeed = [{}];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
