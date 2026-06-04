const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bike GPS Tracker API Running");
});

app.get("/location", (req, res) => {
    res.json({
        bikeId: "BIKE001",
        latitude: 16.3067,
        longitude: 80.4365,
        speed: 45,
        battery: 92
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});