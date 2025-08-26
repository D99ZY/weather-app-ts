import { useState } from 'react';
import Input from './components/Input/Input.tsx';
import Top from './components/Top/Top.tsx';
import Bottom from './components/Bottom/Bottom.tsx';
import styles from './App.module.css';

function App() {
  // State variables
  const [city, setCity] = useState('London');
  // const [geoData, setGeoData] = useState('');
  // const [weatherData, setWeatherData] = useState('');

  // const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <Input city={city} />
        <Top city={city} />
        <Bottom city={city} />
      </div>
    </div>
  );
}

export default App;
