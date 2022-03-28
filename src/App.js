import BlueDivider from "./components/BlueDivider";
import styles from "./App.module.css";
import WidgetContainer from "./components/WidgetContainer";
import WeatherCard from "./components/WeatherCard";
import CityForm from "./components/CityForm";
import { WeatherProvider } from "./contexts/WeatherContextProvider";
import SearchResultWeatherCard from "./components/SearchResultWeatherCard";

function App() {
  return (
    <div className={styles.container} data-testid="DEMO">
      <WeatherProvider>
        <BlueDivider />
        <div className={styles.contentContainer}>
          <div className={styles.upper}>
            <WidgetContainer />
            <div className={styles.verticalDivider}></div>
            <WeatherCard />
          </div>
          <div className={styles.lower}>
            <CityForm />
            <div className={styles.verticalDivider}></div>
            <SearchResultWeatherCard />
          </div>
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
