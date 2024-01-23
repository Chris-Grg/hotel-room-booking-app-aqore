const express = require("express");

const router = express.Router();

const roomsControllers = require("../controllers/rooms-controllers");

router.post("/", roomsControllers.createRoom);
router.get("/", roomsControllers.getAllRooms);
router.get("/:pid", roomsControllers.getRoomByRoomNo);

module.exports = router;
