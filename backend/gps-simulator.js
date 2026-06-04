const locations = [
  {
    latitude: 16.3067,
    longitude: 80.4365,
    speed: 20
  },
  {
    latitude: 16.3070,
    longitude: 80.4370,
    speed: 25
  },
  {
    latitude: 16.3075,
    longitude: 80.4375,
    speed: 30
  },
  {
    latitude: 16.3080,
    longitude: 80.4380,
    speed: 35
  },
  {
    latitude: 16.3085,
    longitude: 80.4385,
    speed: 40
  }
];

let currentIndex = 0;

function getNextLocation() {

  const location = locations[currentIndex];

  currentIndex =
    (currentIndex + 1) % locations.length;

  return location;
}

module.exports = getNextLocation;