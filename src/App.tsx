import useFetch from './hooks/useFetch.ts';
import Input from './components/Input/Input.tsx';
import Top from './components/Top/Top.tsx';
import Bottom from './components/Bottom/Bottom.tsx';
import styles from './App.module.css';

function App() {
  const { loading, geoData, weatherData, handleSearch } = useFetch();

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={loading ? styles.loading : styles.content}>
        {loading ? (
          <i className="fa-solid fa-gear" />
        ) : (
          <>
            <Input handleSearch={handleSearch} />
            <Top geoData={geoData} weatherData={weatherData} />
            <Bottom weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
