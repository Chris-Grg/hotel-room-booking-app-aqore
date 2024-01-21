const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: String,
  type: String,
  description: String,
  price: Number,
  bookedDates: [String],
});

module.exports = mongoose.model("Room", roomSchema);
