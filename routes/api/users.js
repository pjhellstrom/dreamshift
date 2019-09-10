const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// Matches with "/manager" display all employee
router.route("/manager/all").get(userController.findAll);

// Matches with "/manager/:id" update employee
router.route("/manager/employee/:id").put(userController.update);

// Matches with "/manager/:id" delete user
router.route("/manager/deleteuser/:id").delete(userController.remove);

module.exports = router;