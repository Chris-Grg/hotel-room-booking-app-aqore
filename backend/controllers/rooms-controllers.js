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
  const { bookingDate } = req.body;
  const roomNo = req.params.pid;

  let room;
  try {
    room = await Room.find({ roomNo: roomNo });
  } catch (err) {
    return next(error);
  }

  room.bookingDate.push(bookingDate);

  try {
    await Room.save();
  } catch (err) {
    return next(error);
  }

  res.status(200).json({ room: room.toObject({ getters: true }) });
};

exports.createRoom = createRoom;
exports.getAllRooms = getAllRooms;
exports.getRoomByRoomNo = getRoomByRoomNo;
exports.AddBookingsById = AddBookingsById;
