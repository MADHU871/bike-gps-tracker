async function loadLocation() {

    const response =
    await fetch("http://localhost:3000/location");

    const data = await response.json();

    document.getElementById("result").innerHTML = `
        <h3>${data.bikeId}</h3>
        <p>Latitude: ${data.latitude}</p>
        <p>Longitude: ${data.longitude}</p>
        <p>Speed: ${data.speed}</p>
        <p>Battery: ${data.battery}%</p>
    `;
}