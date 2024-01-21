const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const roomsRoutes = require("./routes/rooms-routes");
const searchRoutes = require("./routes/search-route");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/api/rooms", roomsRoutes);
app.use("/api/search", searchRoutes);

app.listen(5000);

mongoose
  .connect(
    "mongodb+srv://cgrg:jfXIGUlJSzd1U3Cf@places.bzkyloh.mongodb.net/hotelroombookingapp?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(7000);
  })
  .catch((err) => {
    console.log(err);
  });
