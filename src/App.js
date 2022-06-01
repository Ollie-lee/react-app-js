import BlueDivider from "./components/BlueDivider";
import styles from "./App.module.css";
import WidgetContainer from "./components/WidgetContainer";
import WeatherCard from "./components/WeatherCard";
import CityForm from "./components/CityForm";
import { WeatherProvider } from "./contexts/WeatherContextProvider";
import SearchResultWeatherCard from "./components/SearchResultWeatherCard";
import withGrayDividerMiddle from "./components/withGrayDividerMiddle";

function App() {
  const upper = withGrayDividerMiddle(WidgetContainer, WeatherCard);
  const lower = withGrayDividerMiddle(CityForm, SearchResultWeatherCard);
  return (
    <div className={styles.container} data-testid="DEMO">
      <WeatherProvider>
        <BlueDivider />
        <div className={styles.contentContainer}>
          <div className={styles.upper}>{upper({ a: 1 }, { b: 2 })}</div>
          <div className={styles.lower}>{lower({ c: 3 }, { d: 4 })}</div>
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
