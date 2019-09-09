const router = require("express").Router();
const shiftRoutes = require("./shifts");
const authRoutes = require("./auth");

// Book routes
router.use("/shifts", shiftRoutes);

router.use("/auth", authRoutes);

module.exports = router;
