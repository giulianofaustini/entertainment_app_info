import { useState, useEffect } from "react";
import Axios from "axios";
import { FeatherIcons } from "../support/FeatherIcons";

export const WheaterFetch = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const apiKey = "e752728474b54c1023084d2fb696497d";

  useEffect(() => {
    if (city) {
      getWeather();
    }
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
      <h1>The Weather Page</h1>
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
        <FeatherIcons className="search" />
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

      <div></div>
    </div>
  );
};
