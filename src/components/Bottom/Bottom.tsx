import type { WeatherData } from '../../types/weather.ts';
import styles from './Bottom.module.css';

interface BottomProps {
  weatherData: WeatherData | null;
}

const Bottom = ({ weatherData }: BottomProps) => {
  return (
    <div className={weatherData ? styles.bottom : styles.hidden}>
      <div>
        <p className={styles.bold}>
          {weatherData ? `${Math.round(weatherData.feels_like - 273.15)}°C` : ''}
        </p>
        <p>Feels Like</p>
      </div>
      <div>
        <p className={styles.bold}>{weatherData ? `${Math.round(weatherData.humidity)}%` : ''}</p>
        <p>Humididy</p>
      </div>
      <div>
        <p className={styles.bold}>
          {weatherData ? `${Math.round(weatherData.wind_speed)}mph` : ''}
        </p>
        <p>Wind Speed</p>
      </div>
    </div>
  );
};
export default Bottom;
