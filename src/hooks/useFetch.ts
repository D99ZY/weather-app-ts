import { useCallback, useEffect, useRef, useState } from 'react';
import type { GeoData, GeoDataApiResponse } from '../types/geo.ts';
import type { WeatherData, WeatherDataApiResponse } from '../types/weather.ts';
import type { HandleSearch } from '../types/input.ts';

const useFetch = () => {
  // State variables
  const [city, setCity] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  // API Key
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // API Base URL
  const BASE_URL = 'https://api.openweathermap.org/';

  // Fetch coordinates based on city name
  const getCoords = useCallback(async () => {
    if (!city) return;

    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    setLoading(true);

    try {
      const GEO_URL = `${BASE_URL}geo/1.0/direct?q=${encodeURIComponent(city)}&appid=${WEATHER_KEY}`;
      const response = await fetch(GEO_URL, {
        signal: abortControllerRef.current?.signal,
      });
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
    } catch (e: any) {
      setError(e);
      setCity(null);
      setGeoData(null);
      setLoading(false);
    }
  }, [city, WEATHER_KEY]);

  // Fetch weather data from location coordinates
  const getWeather = useCallback(async () => {
    if (!geoData) return;
    try {
      const WEATHER_URL = `${BASE_URL}data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=${WEATHER_KEY}`;
      const response = await fetch(WEATHER_URL);
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
    } catch (e: any) {
      setError(e);
      setWeatherData(null);
    } finally {
      setLoading(false);
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

  // Console error
  useEffect(() => {
    console.error(error);
  }, [error]);

  return {
    loading,
    geoData,
    weatherData,
    handleSearch,
  };
};

export default useFetch;
