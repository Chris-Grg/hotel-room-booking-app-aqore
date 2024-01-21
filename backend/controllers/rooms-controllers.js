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
  const { roomId, type, description, price, bookedDates } = req.body;

  const createdRoom = new Room({
    type,
    description,
    price,
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
exports.createRoom = createRoom;
exports.getAllRooms = getAllRooms;
