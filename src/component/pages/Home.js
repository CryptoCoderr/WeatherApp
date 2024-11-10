import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTemperatureHigh } from "react-icons/fa";

function Home() {
  const [serach_data, setserach_data] = useState([]);
  const [search, setsearch] = useState("bahrain");
  const [loading, setLoading] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState(null);

  const fetchWeatherData = async (query, id = null) => {
    if (!query && !id) return;

    setLoading(true);

    try {
      const apiUrl = id
        ? `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`
        : `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=5796abbde9106b7da4febfae8c44c232&units=metric`;

      const response = await axios.get(apiUrl);

      if (id) {
        setWeatherDetails(response.data);
      } else {
        setserach_data(response.data.list);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = () => {
    fetchWeatherData(search);
  };

  useEffect(() => {
    if (search.length > 2) {
      const timer = setTimeout(() => {
        fetchWeatherData(search);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [search]);

  useEffect(() => {
    fetchWeatherData("bahrain", "290291");
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-600 text-white py-10">
        <div className="containerkws">
          <div className="flex justify-between">
            <div className="font-bold">GoHighLevel</div>
          </div>
        </div>
      </div>

      <div className="bgimage h-80">
        <div className="bg-[rgba(0,0,0,0.3)] h-full ">
          <div className="containerkws h-full">
            <div className="text-white flex items-center justify-center h-full text-5xl font-bold ">
              GoHighLevel Weather app
            </div>
          </div>
        </div>
      </div>

      {/* Search box */}
      <div className="bg-gray-300 py-4">
        <div className="containerkws">
          <div className="relative flex">
            <div className="flex rounded overflow-hidden w-full">
              <input
                type="text"
                className="bg-white w-80 p-2 focus:outline-none"
                placeholder="e.g. london"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <div
                className="bg-black p-2 text-white cursor-pointer"
                onClick={handleSearchSubmit}
              >
                Search
              </div>
            </div>

            {/* Search results */}
            {serach_data.length > 0 && (
              <div className="absolute w-80 bg-white shadow-lg rounded mt-5 z-10">
                {serach_data.map((res, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      fetchWeatherData("", res.id);
                      setserach_data([]);
                    }}
                  >
                    <div className="p-3 flex justify-between items-center cursor-pointer">
                      <div>
                        {res.name}, {res.sys.country}
                      </div>
                      <div>{Math.round(res.main.temp)}°C</div>
                    </div>
                    {index !== serach_data.length - 1 && <hr />}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Weather details */}
      {weatherDetails && (
        <div className="mt-5">
          <div className="containerkws">
            <div className="text-red-500">
              {new Date(weatherDetails.dt * 1000).toLocaleString()}
            </div>
            <div className="font-bold text-2xl flex gap-2">
              {weatherDetails.name}, {weatherDetails.sys.country}
            </div>
            <div className="text-4xl flex gap-2 mt-3 items-center">
              <FaTemperatureHigh className="text-2xl" />
              {Math.round(weatherDetails.main.temp)}°C
            </div>
            <div>
              Feels like {Math.round(weatherDetails.main.feels_like)}°C.{" "}
              {weatherDetails.weather[0].description}.
            </div>
            <div className="flex gap-3 mt-2">
              <div>
                <div>Wind: {Math.round(weatherDetails.wind.speed)} m/s</div>
                <div>Humidity: {weatherDetails.main.humidity}%</div>
                <div>
                  Dew point: {Math.round(weatherDetails.main.temp_min)}°C
                </div>
              </div>
              <div>
                <div>Pressure: {weatherDetails.main.pressure} hPa</div>
                <div>Visibility: {weatherDetails.visibility / 1000} km</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
