const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema({
  userDetails: {
    name: { type: String, required: true, maxlength: 50 },
    phone: { type: String, required: true },
  },
  cartItems: {
    type: [
      {
        id: Number,
        roomType: String,
        price: Number,
        roomNo: String,
        checkInDate: String,
        checkOutDate: String,
      },
    ],

    required: true,
  },

  total: {
    type: Number,
    required: true,
    min: 0,
  },
  cardDetails: {
    cardNo: {
      type: String,
      required: true,
      maxlength: 16,
    },
    cardExpiry: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
      maxlength: 3,
    },
  },
});

module.exports = mongoose.model("Booking", bookingsSchema);
