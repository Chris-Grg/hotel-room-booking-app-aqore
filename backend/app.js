const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const roomsRoutes = require("./routes/rooms-routes");
const searchRoutes = require("./routes/search-route");
const bookingsRoutes = require("./routes/bookings-routes");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/api/rooms", roomsRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/bookings", bookingsRoutes);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    app.listen(process.env.PORT || 7000);
  })
  .catch((err) => {
    console.log(err);
  });
