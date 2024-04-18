/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { ExpandButton } from "./ExpandButton";

export const CurrentlyTimer = () => {
  const LOCATION_REQUEST_URL = "http://ip-api.com/json/";
  const [countryName, setCountryName] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [greeting, setGreeting] = useState("");
  let [Hours, setHours] = useState(0);
  let [Minutes, setMinutes] = useState(0);
  const [amToPm, setAmToPm] = useState("");

  const getTime = () => {
    let currentTime = new Date();

    let TimezoneOffset = currentTime.getTimezoneOffset();
    let localTime = new Date(currentTime.getTime() + TimezoneOffset * 60000);

    Hours = localTime.getHours();
    Minutes = localTime.getMinutes();

    // Setting time for 12 Hours Format
    if (Hours >= 12) {
      if (Hours > 12) Hours = Hours - 12;
      setAmToPm("PM");
    } else if (Hours == 0) {
      Hours = 12;
      setAmToPm("AM");
    }

    setHours(Hours < 10 ? "0" + Hours : Hours);
    setMinutes(Minutes < 10 ? "0" + Minutes : Minutes);
  };

  // Location Request
  const getLocation = () => {
    axios({
      method: "get",
      url: LOCATION_REQUEST_URL,
      responseType: "json",
    })
      .then(function (response) {
        const location = response.data;

        setCountryName(location.city);
        setCountryCode(location.countryCode);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGreeting = () => {
    if (Hours >= 5 && Hours <= 11) {
      setGreeting("Good morning");
    } else if (Hours >= 12 && Hours <= 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  };

  useEffect(() => {
    let onMounted = true;

    let interval = setInterval(() => {
      getTime();
    }, 1000);

    if (onMounted) {
      getLocation();
      handleGreeting();
    }

    return () => {
      onMounted = false;
      clearInterval(interval);
    };
  }, [handleGreeting, getTime]);

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

        <span className="greeting__text"> {greeting} ,</span>
        <span className="greeting__currently">it&apos;s Currently</span>
      </div>

      <div className="currently-timer__timers">
        <h1 className="timers__text">
          {Hours} : {Minutes}
        </h1>
        <span> {amToPm} </span>
      </div>

      <div className="currently-timer__location">
        <p className="location__text">
          In {countryName}, {countryCode}
        </p>
      </div>

      <ExpandButton />
    </section>
  );
};
