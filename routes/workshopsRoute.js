// Importing express to use routing
const express = require("express");
const router = express.Router();

//Controller of action to de depending on endpoint
const workshopsController = require("../controllers/workshopsController");

//Action to do when get is executed on /api/workshops
router.get("/", workshopsController.getCurrentWorkshops);
//Get past workshops if endpoint is /api/workshops/past
router.get("/past", workshopsController.getPastWorkshops);
//Get upcoming workshops if endpoint is /api/workshops/upcoming
router.get("/upcoming", workshopsController.getUpcomingWorkshops);

module.exports = router;
