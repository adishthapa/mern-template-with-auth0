// Dependencies
// ============================================================================
const router = require("express").Router();
const userRoutes = require("./users");

// User routes
// ============================================================================
router.use("/users", userRoutes);

module.exports = router;
