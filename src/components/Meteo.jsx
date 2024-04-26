/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

export const Meteo = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const getWeatherData = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      axios
        .get(
          `${
            import.meta.env.VITE_WEATHER_REQUEST_URL
          }?location=${latitude},${longitude}&apikey=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        )
        .then(function (response) {
          const wData = response.data;

          setWeatherData(wData.data.values);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getWeatherData();
  }, [latitude, longitude]);

  return (
    <div className="meteo">
      <div className="meteo-top">
        <p className="meteo__temperature">
          {Math.round(weatherData.temperature)}&deg;
        </p>
      </div>

      <div className="meteo-bottom">
        <div className="meteo__items">
          <i className="fa-solid fa-wind"></i>
          <p className="meteo__text">Wind</p>
          <p className="meteo__text__value">
            {Math.round(weatherData.windSpeed)} <span>m/h</span>
          </p>
        </div>

        <div className="meteo__items">
          <i className="fa-solid fa-droplet"></i>
          <p className="meteo__text">Humidity</p>
          <p className="meteo__text__value">
            {weatherData.humidity} <span>%</span>
          </p>
        </div>

        <div className="meteo__items">
          <i className="fa-solid fa-temperature-empty"></i>
          <p className="meteo__text">Feeling</p>
          <p className="meteo__text__value">
            {Math.round(weatherData.temperatureApparent)} &deg;C
          </p>
        </div>
      </div>
    </div>
  );
};
