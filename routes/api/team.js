const express = require("express");
const router = express.Router();
const team = require("../../controllers/teamController");

// route for adding a new team
router.post("/addteam", team.addTeam);

// route to deleting a team
router.delete("/removeteam", team.removeTeam);

//route to display all teams
router.get("/team", team.displayTeam);

module.exports = router;
