import axios from "axios";
import { useState, useEffect } from "react";

export const MoreDetails = () => {
  const DETAILS_REQUEST_URL = "https://worldtimeapi.org/api/ip";
  const [timezone, setTimezone] = useState("");
  const [dayOfTheYear, setDayOfTheYear] = useState("");
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [weekNumber, setWeekNumber] = useState("");

  const getDetails = () => {
    axios({
      method: "get",
      url: DETAILS_REQUEST_URL,
      responseType: "json",
    })
      .then(function (response) {
        const details = response.data;

        setTimezone(details.timezone);
        setDayOfTheYear(details.day_of_year);
        setDayOfTheWeek(details.day_of_week);
        setWeekNumber(details.week_number);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    let onMounted = true;

    if (onMounted) {
      getDetails();
    }

    return () => {
      onMounted = false;
    };
  }, []);

  return (
    <section className="more-details">
      <div className="more-details__cells">
        <p className="more-details__title">Current Timezone</p>
        <h2 className="more-details__content">{timezone}</h2>
      </div>

      <div className="more-details__cells">
        <p className="more-details__title">Day of the year</p>
        <h2 className="more-details__content">{dayOfTheYear}</h2>
      </div>

      <div className="more-details__cells">
        <p className="more-details__title">Day of the week</p>
        <h2 className="more-details__content">{dayOfTheWeek}</h2>
      </div>

      <div className="more-details__cells">
        <p className="more-details__title">Week Number</p>
        <h2 className="more-details__content">{weekNumber}</h2>
      </div>
    </section>
  );
};
