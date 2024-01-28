const Booking = require("../models/booking");
const Room = require("../models/room");
const mongoose = require("mongoose");

const createBooking = async (req, res, next) => {
  const { userDetails, cartItems, total, cardDetails } = req.body;

  try {
    //Create booking
    const createdBooking = new Booking({
      userDetails,
      cartItems,
      total,
      cardDetails,
    });

    await createdBooking.save();

    //update rooms bookings
    cartItems.forEach(async (cartItem) => {
      const room = await Room.findOneAndUpdate(
        { roomNo: cartItem.roomNo },
        {
          $push: {
            bookedDates: {
              start: cartItem.checkInDate,
              end: cartItem.checkOutDate,
            },
          },
        },
        { new: true }
      );

      if (!room) {
        throw new Error(`Room ${cartItem.roomNo} not found`);
      }
    });
  } catch (error) {
    next(error); // Rethrow other errors
  }
  res.json({ message: "successfully booked" });
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
