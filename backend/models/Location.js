app.get("/location", async (req, res) => {

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

});