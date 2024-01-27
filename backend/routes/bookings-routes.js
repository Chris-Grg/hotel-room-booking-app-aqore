const express = require("express");

const router = express.Router();

const bookingsControllers = require("../controllers/bookings-controllers");

router.get("/", bookingsControllers.getAllBookings);
router.post("/", bookingsControllers.createBooking);
router.delete("/", bookingsControllers.DeleteBookingById);

module.exports = router;
