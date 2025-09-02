import type { GeoData } from '../../types/geo.ts';
import type { WeatherData } from '../../types/weather.ts';
import styles from './Top.module.css';

interface TopProps {
  geoData: GeoData | null;
  weatherData: WeatherData | null;
}

const Top = ({ geoData, weatherData }: TopProps) => {
  return (
    <div className={weatherData ? styles.top : styles.hidden}>
      <div className={styles.location}>
        {geoData && weatherData ? `${geoData.name}, ${geoData.country}` : ''}
      </div>
      <div className={styles.temperature}>
        {weatherData ? `${Math.round(weatherData.temperature - 273.15)}°C` : ''}
      </div>
      <div className={styles.description}>{weatherData?.description ?? ''}</div>
    </div>
  );
};

export default Top;
