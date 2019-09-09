const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");
const userController = require("../../controllers/userController");

// Matches with "/employee"  get all avaliavle shifts
router.route("/employee").get(shiftController.findAll);

// Matches with "/employee/:id" find all emplyee's shift
router.route("/employee/shift/:id").get(shiftController.findById);

// Matches with "/manager"  get all shifts
router.route("/manager").get(shiftController.findAll);

// Matches with "/manager/addshift"  create a shift
router.route("/manager/addshift").post(shiftController.create);

// Matches with "/manager/addemployee"  create a employee
router.route("/manager/addemployee").post(userController.create);

// Matches with "/manager/:id" update the capacity of on shift
router.route("/manager/shift/:id").put(shiftController.findById);

// Matches with "/manager/:id" delete user
router.route("/manager/deleteuser/:id").delete(userController.findById);

// Matches with "/manager/:id" delete shift
router.route("/manager/deleteshift/:id").delete(shiftController.findById);

module.exports = router;
