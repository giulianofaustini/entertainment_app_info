import { useState, useEffect } from "react";
import Axios from "axios";


export const WheaterFetch = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
  }, [city]);

  const getWeather = () => {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => {
        console.log(res.data);
        const weatherInfo = res.data;
        setWeatherData(weatherInfo);
        setCity('')
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      });
  };
 

  return (
    <div>
      <h1>WHAT IS THE WEATHER LIKE IN ...</h1>
      
        <div className="input-container">
          <label htmlFor="cityInput"> </label>
          <input
            type="text"
            id="cityInput"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="input-with-icon"
          />
          <button style={{ height: "38px" }} onClick={getWeather} className="search" > search </button>
        </div>
      
        {weatherData && (
          <><p className="description"> {weatherData.weather[0].description} </p><div className="info">
          <div className="temp"> Temperature </div>
          <p className="tempInfo">  {weatherData.main.temp} </p>
          <div className="feelsLike"> Feels like </div>
          <p className="feelsLikeInfo"> {weatherData.main.feels_like} </p>

          <div className="wind"> Wind speed in km/h</div>
          <p>{weatherData.wind.speed}</p>
        </div></>
      )}
    </div>
  );
};
