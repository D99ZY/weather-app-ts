import { useCallback, useEffect, useRef, useState } from 'react';
import Input from './components/Input/Input.tsx';
import Top from './components/Top/Top.tsx';
import Bottom from './components/Bottom/Bottom.tsx';
import type { GeoDataApiResponse, GeoData } from './types/geo.ts';
import type { WeatherDataApiResponse, WeatherData } from './types/weather.ts';
import type { HandleSearch } from './types/input.ts';
import styles from './App.module.css';

function App() {
  // Ref to the <input> DOM element
  const inputRef = useRef(null);

  // State variables
  const [city, setCity] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // API Key
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // Fetch coordinates based on city name
  const getCoords = useCallback(async () => {
    if (!city) return;
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&appid=${WEATHER_KEY}`;
      const response = await fetch(geoUrl);
      if (!response.ok) {
        throw new Error(`Error fetching geo data: ${response.status}`);
      }
      const dataRaw = (await response.json())[0] as GeoDataApiResponse;
      const data: GeoData = {
        name: dataRaw.name,
        country: dataRaw.country,
        lat: dataRaw.lat,
        lon: dataRaw.lon,
      };
      setGeoData(data);
    } catch (error) {
      console.error(`Failed to fetch coordinates: ${error}`);
      setGeoData(null);
    }
  }, [city, WEATHER_KEY]);

  // Fetch weather data from location coordinates
  const getWeather = useCallback(async () => {
    if (!geoData) return;
    try {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=${WEATHER_KEY}`;
      const response = await fetch(weatherUrl);
      if (!response.ok) {
        throw new Error(`Error fetching geo data: ${response.status}`);
      }
      const dataRaw = (await response.json()) as WeatherDataApiResponse;
      const data: WeatherData = {
        temperature: dataRaw.main.temp,
        description: dataRaw.weather[0].main,
        feels_like: dataRaw.main.feels_like,
        humidity: dataRaw.main.humidity,
        wind_speed: dataRaw.wind.speed,
      };
      setWeatherData(data);
    } catch (error) {
      console.error(`Failed to fetch weather: ${error}`);
      setWeatherData(null);
    }
  }, [geoData, WEATHER_KEY]);

  // Update city state variable with text input field value on enter key press
  const handleSearch: HandleSearch = (cityName) => {
    setCity(cityName);
  };

  // Get coordinates on city update
  useEffect(() => {
    getCoords();
  }, [city, getCoords]);

  // Get weather data on coordinates update
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
