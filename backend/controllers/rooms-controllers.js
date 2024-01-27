const Room = require("../models/room");

const DUMMY_ROOMS = [
  {
    roomtype: "deluxe",
    roomno: "1",
    bookedstatus: {
      booked: true,
      bookeddate: "21/2/2023",
      checkoutdate: "24/2/2023",
    },
  },
  {
    roomtype: "deluxe",
    roomno: "2",
    bookedstatus: {
      booked: false,
      bookeddate: "",
      checkoutdate: "",
    },
  },
  {
    roomtype: "deluxe",
    roomno: "2",
    bookedstatus: {
      booked: false,
      bookeddate: "",
      checkoutdate: "",
    },
  },
];

const createRoom = async (req, res, next) => {
  const {
    roomNo,
    title,
    typeId,
    description,
    price,
    image,
    amenities,
    bookedDates,
  } = req.body;

  const createdRoom = new Room({
    roomNo,
    title,
    typeId,
    description,
    price,
    image,
    amenities,
    bookedDates,
  });

  try {
    await createdRoom.save();
  } catch (err) {
    return next(err);
  }
  res.status(201).json(createdRoom);
};

const getAllRooms = async (req, res, next) => {
  let rooms;
  try {
    rooms = await Room.find();
  } catch (err) {
    return next(err);
  }
  res.json(rooms);
};

const getRoomByRoomNo = async (req, res, next) => {
  const roomNo = req.params.pid;
  let room;
  try {
    room = await Room.findOne({ roomNo: roomNo });
  } catch (error) {
    return next(error);
  }
  res.json(room);
};

const AddBookingsById = async (req, res, next) => {
  const { roomNo, startDate, endDate } = req.body;

  try {
    const updatedRoom = await Room.findOneAndUpdate(
      {
        roomNo: roomNo,
        bookingDate: {
          $not: {
            $elemMatch: {
              start: { $gte: startDate, $lte: endDate },
              end: { $gte: startDate, $lte: endDate },
            },
          },
        },
      },
      { $push: { bookedDates: { start: startDate, end: endDate } } },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(409).json({
        message: "Booking conflict! Dates overlap with existing bookings.",
      });
    }

    res.status(200).json(updatedRoom);
  } catch (err) {
    return next(err);
  }
};

const DeleteBookingById = async (req, res, next) => {
  const { roomNo, startDate, endDate } = req.body;

  try {
    const updatedRoom = await Room.findOneAndUpdate(
      { roomNo: roomNo },
      { $pull: { bookedDates: { start: startDate, end: endDate } } },
      { new: true }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(204).json({ message: "Deleted" }); // 204 No Content for successful deletion
  } catch (err) {
    return next(err);
  }
};

exports.createRoom = createRoom;
exports.getAllRooms = getAllRooms;
exports.getRoomByRoomNo = getRoomByRoomNo;
exports.AddBookingsById = AddBookingsById;
exports.DeleteBookingById = DeleteBookingById;
