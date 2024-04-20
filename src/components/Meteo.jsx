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
          console.log(wData);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getWeatherData();
  }, [latitude, longitude]);

  return (
    <div>
      <div>
        <img
          src={`${weatherData.weatherCode}_clear_small.png`}
          alt="Powered by Tomorrow.io"
        />
      </div>
      <div>
        Temperature: {weatherData.temperature} <sup>&deg;C</sup>{" "}
      </div>
      <div>
        Wind Speed: {weatherData.windSpeed} <span>mph</span>{" "}
      </div>
      <div>
        Humidity: {weatherData.humidity} <span>%</span>{" "}
      </div>
      <div>
        Feelings: {weatherData.temperatureApparent} <sup>&deg;C</sup>{" "}
      </div>
    </div>
  );
};
