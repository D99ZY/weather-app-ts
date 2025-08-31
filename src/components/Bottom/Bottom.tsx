import type { WeatherDataApiResponse } from '../../types/weather.ts';
import styles from './Bottom.module.css';

interface BottomProps {
  weatherData: WeatherDataApiResponse | null;
}

const Bottom = ({ weatherData }: BottomProps) => {
  return (
    <div className={styles.bottom}>
      <div className={styles.feels}>
        <p>{weatherData ? `${Math.round(weatherData.main.feels_like - 273.15)}°C` : '25°C'}</p>
        <p>Feels Like</p>
      </div>
      <div className={styles.humidity}>
        <p>{weatherData ? `${Math.round(weatherData.main.humidity)}%` : '50%'}</p>
        <p>Humididy</p>
      </div>
      <div className={styles.wind}>
        <p>{weatherData ? `${Math.round(weatherData.wind.speed)}mph` : '12mph'}</p>
        <p>Wind Speed</p>
      </div>
    </div>
  );
};
export default Bottom;
