import React,{useEffect,useState} from "react";
import axios from "axios";

function App(){

const [location,setLocation]=useState({});

useEffect(()=>{
 axios.get("http://localhost:3000/location")
 .then(res=>{
  setLocation(res.data);
 });
},[]);

return(
<div>
<h1>Bike GPS Tracker</h1>

<p>Latitude : {location.latitude}</p>
<p>Longitude : {location.longitude}</p>

</div>
);
}

export default App;