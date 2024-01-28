const Booking = require("../models/booking");
const Room = require("../models/room");
const mongoose = require("mongoose");

const createBooking = async (req, res, next) => {
  const { userDetails, cartItems, total, cardDetails } = req.body;

  try {
    // const existingBooking = await Booking.findOne({
    //   roomNo: cartItems.roomNo,
    //   startDate: cartItems.startDate,
    //   endDate: cartItems.endDate,
    // });
    // console.log(existingBooking);
    // if (existingBooking) {
    //   res.status(409).json({ error: "Booking already exists for these dates" }); // Send error response
    //   throw new Error("Booking already exists");
    // }
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
              $cond: {
                // Check if dates already exist
                if: {
                  $or: [
                    {
                      $elemMatch: {
                        start: cartItem.checkInDate,
                        end: cartItem.checkOutDate,
                      },
                    },
                    {
                      $elemMatch: {
                        start: { $lte: cartItem.checkInDate },
                        end: { $gte: cartItem.checkInDate },
                      },
                    },
                    {
                      $elemMatch: {
                        start: { $lte: cartItem.checkOutDate },
                        end: { $gte: cartItem.checkOutDate },
                      },
                    },
                  ],
                },
                then: { $exists: false }, // No Update Date exists
                else: {
                  start: cartItem.checkInDate,
                  end: cartItem.checkOutDate,
                },
              },
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
    if (error.code === 11000 || error.code === 16837) {
      // Duplicate key or conflict error codes
      throw new Error("Dates already exist for this room");
    } else {
      next(error); // Rethrow other errors
    }
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
