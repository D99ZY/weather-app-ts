import type { GeoDataApiResponseItem } from '../../types/geo.ts';
import type { WeatherDataApiResponse } from '../../types/weather.ts';
import styles from './Top.module.css';

interface TopProps {
  geoData: GeoDataApiResponseItem | null;
  weatherData: WeatherDataApiResponse | null;
}

const Top = ({ geoData, weatherData }: TopProps) => {
  return (
    <div className={styles.top}>
      <div className={styles.location}>
        <h2>{geoData ? `${geoData.name}, ${geoData.country}` : 'Loc'}</h2>
      </div>
      <div className={styles.temperature}>
        <h1>{weatherData ? `${Math.round(weatherData.main.temp - 273.15)}°C` : 'Temp'}</h1>
      </div>
      <div className={styles.description}>
        <h3>{weatherData?.weather[0].description ?? 'Desc'}</h3>
      </div>
    </div>
  );
};

export default Top;
