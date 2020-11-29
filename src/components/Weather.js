import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [country, setCountry] = useState(""); //is used to maintain how variables change,
  //useeffect is used to maintain how components is displayed,how you interact with a component
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  
  
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const getWeather = (e) => {
    e.preventDefault();
    if (country && city)
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4b21e6813d1917cb07687708589f6171&q=${city},${country}`
        )
        .then((res) => {
          setWeather({ ...res.data });
          console.log(res);
          
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <div className="weather">
     
      <form>
        <label>Country</label>
        <input type="text" placeholder="Search..." onChange={handleCountry} />
       <label>City</label>
        <input type="text" placeholder="Search..." onChange={handleCity} />
        <br></br>
        <button onClick={getWeather}>Search</button>
      </form>
      <h1>{new Date().toLocaleString()}</h1>
      
      {
          weather&&(
          <h2>{weather.city.name}</h2>
          )
}
         { weather&&(
          <h2>{weather.list[0].main.temp -273.15} °C</h2> 
          ) 
         }
          
      
    </div>
  );
}
export default Weather;
