const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  bikeId: String,
  latitude: Number,
  longitude: Number,
  speed: Number,
  battery: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  "Location",
  LocationSchema
);