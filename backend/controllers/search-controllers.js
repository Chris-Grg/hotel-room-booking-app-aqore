const mongoose = require("mongoose");
const Room = require("../models/room");

const getAvailableRooms = async (req, res, next) => {
  const { typeId, startDate, endDate } = req.body;

  let availableRooms;
  try {
    availableRooms = await Room.find({
      typeId: typeId,
      $and: [
        {
          bookedDates: {
            $not: {
              $elemMatch: {
                $or: [
                  {
                    $and: [
                      { start: { $gte: startDate } },
                      { start: { $lte: endDate } },
                    ],
                  },
                  {
                    $and: [
                      { end: { $gte: startDate } },
                      { end: { $lte: endDate } },
                    ],
                  },
                ],
              },
            },
          },
        },
      ],
    });
  } catch (error) {
    next(error);
  }
  res.json(availableRooms);
};
exports.getAvailableRooms = getAvailableRooms;
