const router = require("express").Router();
const shiftRoutes = require("./shifts");
const userRoutes = require("./users");
const authRoutes = require("./auth");

// Book routes
router.use("/shifts", shiftRoutes);

router.use("/auth", authRoutes);

router.use("/user", userRoutes);

router.use("/team", teamRoutes);

module.exports = router;
