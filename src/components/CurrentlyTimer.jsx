import axios from "axios";
import { useState, useEffect } from "react";

export const CurrentlyTimer = () => {
  const LOCATION_REQUEST_URL = "https://api.ipbase.com/v1/json/";
  const [countryName, setCountryName] = useState(null);
  const [countryCode, setCountryCode] = useState(null);

  let currentTime = new Date();

  let TimezoneOffset = currentTime.getTimezoneOffset();
  let localTime = new Date(currentTime.getTime() + TimezoneOffset * 60000);

  let Hours = localTime.getHours();
  let Minutes = localTime.getMinutes();

  // Location Request
  const getLocation = () => {
    axios({
      method: "get",
      url: LOCATION_REQUEST_URL,
      responseType: "json",
    })
      .then(function (response) {
        const location = response.data;

        setCountryName(location.country_name);
        setCountryCode(location.country_code);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    let onMounted = true;

    if (onMounted) {
      getLocation();
    }

    return () => {
      onMounted = false;
    };
  }, []);

  return (
    <section className="currently-timer">
      <div className="currently-timer__greeting">
        <span className="greeting__icons">
          {Hours >= 5 && Hours <= 17 ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </span>

        <span className="greeting__text"> Good Morning , </span>
        <span className="greeting__currently">it&apos;s Currently</span>
      </div>

      <div className="currently-timer__timers">
        <h1 className="timers__text">
          {Hours} : {Minutes}
        </h1>
      </div>

      <div className="currently-timer__location">
        <p className="location__text">
          In {countryName}, {countryCode}
        </p>
      </div>
    </section>
  );
};
