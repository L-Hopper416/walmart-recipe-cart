const router = require("express").Router();
const walmartRoutes = require("./walmart");

// Walmart routes
router.use("/walmart", walmartRoutes);

module.exports = router;
