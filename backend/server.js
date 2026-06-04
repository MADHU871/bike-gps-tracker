const express = require("express");
const cors = require("cors");

const getNextLocation =
require("./gps-simulator");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

  res.send(
    "Bike GPS Tracker Simulator Running"
  );

});

app.get("/location", (req, res) => {

  const location = getNextLocation();

  res.json({
    bikeId: "BIKE001",
    ...location,
    battery: 90
  });

});

const PORT = 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});