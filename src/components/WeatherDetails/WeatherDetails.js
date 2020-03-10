import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { fetchWeather } from "../../services/requests";

import "./WeatherDetails.scss";

function WeatherDetails({ pet: { name, location, latitude, longitude } }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { currently } = await fetchWeather(latitude, longitude);
      setWeather(currently);
    };
    fetchData();
  }, [latitude, longitude]);

  const umbrella = () => {
    const regex = /\s?rain-/gi;
    return !!weather && regex.test(weather.summary);
  };

  return (
    <article className="weather-details">
      <h1 className="weather-details--header">{umbrella() ? "Yep!" : "Nope!"}</h1>
      <p className="weather-details--text">
        It looks like {name} is{!umbrella() && "n't"} going to need one in{" "}
        {location}
      </p>
    </article>
  );
}

export default withRouter(WeatherDetails);
