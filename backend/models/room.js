const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNo: String,
  title: String,
  typeId: String,
  description: String,
  price: Number,
  image: String,
  amenities: [String],
  bookedDates: [
    {
      start: String,
      end: String,
    },
  ],
});

module.exports = mongoose.model("Room", roomSchema);
