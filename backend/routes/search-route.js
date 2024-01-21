const express = require("express");

const router = express.Router();

const searchControllers = require("../controllers/search-controllers");

router.post("/", searchControllers.getAvailableRooms);

module.exports = router;
