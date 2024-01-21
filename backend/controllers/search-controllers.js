const mongoose = require("mongoose");
const Room = require("../models/room");

const getAvailableRooms = async () => {
  const { type, startDate, endDate } = req.body;

  let availableRooms;
  try {
    // availableRooms = await Room.aggregate([
    //   {
    //     $match: {
    //       bookedDates: {
    //         $not: {
    //           $elemMatch: {
    //             $gte: startDate,
    //             $lte: endDate,
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: "$type",
    //       firstAvailable: { $first: "$$ROOT" },
    //     },
    //   },
    // ]);
    availableRooms = await Room.find({ type: type });
  } catch (error) {
    console.log(error);
  }
  res.json({ availableRooms });
};
exports.getAvailableRooms = getAvailableRooms;
