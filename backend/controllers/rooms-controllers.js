const Room = require("../models/room");

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
exports.DeleteBookingById = DeleteBookingById;
