import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '58ccab1ec38bae4e715ed2f9d19dff85';

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    setData(null);

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setData(res.data);
    } catch (error) {
      setError('City not found. Please try again.',error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="p-3 rounded w-full max-w-md text-black mb-4"
      />
      <button
        onClick={fetchWeather}
        className="bg-white text-blue-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
      >
        Search
      </button>

      {loading && <p className="mt-6 text-lg">Loading...</p>}
      {error && <p className="mt-6 text-red-300">{error}</p>}

      {data && (
        <div className="bg-white text-blue-800 mt-6 p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">
            {data.name}, {data.sys?.country}
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`}
              alt="weather icon"
              className="w-16 h-16"
            />
            <div>
              <p className="text-lg">
                <strong>{data.weather[0]?.main}</strong> – {data.weather[0]?.description}
              </p>
              <p>Temperature: {data.main?.temp}°C</p>
              <p>Feels Like: {data.main?.feels_like}°C</p>
              <p>Humidity: {data.main?.humidity}%</p>
              <p>Wind: {data.wind?.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
