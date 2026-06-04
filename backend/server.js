require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Location = require("./models/Location");
const getNextLocation = require("./gps-simulator");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Bike GPS Tracker API Running");
});

app.get("/location", async (req, res) => {
  try {
    const gps = getNextLocation();

    const savedLocation =
      await Location.create({
        bikeId: "BIKE001",
        latitude: gps.latitude,
        longitude: gps.longitude,
        speed: gps.speed,
        battery: 90
      });

    res.json(savedLocation);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error saving location"
    });

  }
});

app.get("/history", async (req, res) => {

  try {

    const history =
      await Location.find()
      .sort({ timestamp: 1 });

    res.json(history);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error fetching history"
    });

  }

});

const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});