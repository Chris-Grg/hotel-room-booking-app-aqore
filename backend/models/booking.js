const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
  userDetails: {
    String,
  },
  cartItems: [
    {
      String,
    },
  ],
  total: Number,
  cardDetails: {
    cardNo: String,
    cardExpiry: String,
    cvv: String,
  },
});

module.exports = mongoose.model("Booking", bookingsSchema);
