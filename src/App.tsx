import { useCallback, useEffect, useRef, useState } from 'react';
import Input from './components/Input/Input.tsx';
import Top from './components/Top/Top.tsx';
import Bottom from './components/Bottom/Bottom.tsx';
import type { GeoDataApiResponseItem, GeoDataApiResponse } from './types/geo.ts';
import type { WeatherDataApiResponse } from './types/weather.ts';
import type { HandleSearch } from './types/input.ts';
import styles from './App.module.css';

function App() {
  // Ref to the <input> DOM element
  const inputRef = useRef(null);

  // State variables
  const [city, setCity] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<GeoDataApiResponseItem | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherDataApiResponse | null>(null);

  // API Key
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getCoords = useCallback(async () => {
    if (!city) return;

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&appid=${WEATHER_KEY}`;
      // Fetch data
      const response = await fetch(geoUrl);

      if (!response.ok) {
        throw new Error(`Error fetching geo data: ${response.status}`);
      }

      // const data: GeoDataApiResponse = (await response.json()) as GeoDataApiResponse;
      // const data: GeoDataApiResponse = await response.json();
      const data = (await response.json()) as GeoDataApiResponse;
      setGeoData(data[0] ?? null);
      console.log(`Geo data: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error(`Failed to fetch coordinates: ${error}`);
      setGeoData(null);
    }
  }, [city, WEATHER_KEY]);

  const getWeather = useCallback(async () => {
    if (!geoData) return;

    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=${WEATHER_KEY}`;

      const response = await fetch(weatherUrl);

      if (!response.ok) {
        throw new Error(`Error fetching geo data: ${response.status}`);
      }

      const data: WeatherDataApiResponse = await response.json();
      setWeatherData(data);
      console.log(`Weather data: ${JSON.stringify(data)}`);
    } catch (error) {
      console.error(`Failed to fetch weather: ${error}`);
      setWeatherData(null);
    }
  }, [geoData, WEATHER_KEY]);

  const handleSearch: HandleSearch = (cityName) => {
    setCity(cityName);
  };

  useEffect(() => {
    getCoords();
  }, [city, getCoords]);

  useEffect(() => {
    getWeather();
  }, [geoData, getWeather]);

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content}>
        <Input ref={inputRef} handleSearch={handleSearch} />
        <Top geoData={geoData} weatherData={weatherData} />
        <Bottom weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
