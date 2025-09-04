import useFetch from './hooks/useFetch.ts';
import Input from './components/Input/Input.tsx';
import Top from './components/Top/Top.tsx';
import Bottom from './components/Bottom/Bottom.tsx';
import styles from './App.module.css';

function App() {
  const { handleSearch, geoData, weatherData } = useFetch();

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.content}>
        <Input handleSearch={handleSearch} />
        <Top geoData={geoData} weatherData={weatherData} />
        <Bottom weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
