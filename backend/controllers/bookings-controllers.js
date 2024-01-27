const Booking = require("../models/booking");
const Room = require("../models/room");

const createBooking = async (req, res, next) => {
  const { paymentDetails, rooms, total, cardDetails } = req.body;

  try {
    const createdBooking = new Booking({
      paymentDetails,
      rooms,
      total,
      cardDetails,
    });

    await createdBooking.save();

    res.status(201).json(createdBooking);
  } catch (err) {
    return next(err);
  }
};

const getAllBookings = async (req, res, next) => {
  let bookings;
  try {
    bookings = await Booking.find();
  } catch (err) {
    return next(err);
  }
  res.json(bookings);
};

const DeleteBookingById = async (req, res, next) => {
  const { id } = req.body;

  try {
    await Booking.findByIdAndDelete(id);
    res.status(204).json({ message: "Deleted" });
  } catch (err) {
    return next(err);
  }
};

exports.createBooking = createBooking;
exports.getAllBookings = getAllBookings;
exports.DeleteBookingById = DeleteBookingById;
