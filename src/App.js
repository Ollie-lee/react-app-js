import BlueDivider from "./components/BlueDivider";
import styles from "./App.module.css";
import WidgetContainer from "./components/WidgetContainer";
import WeatherCard from "./components/WeatherCard";
import CityForm from "./components/CityForm";
import { WeatherProvider } from "./contexts/WeatherContextProvider";
import SearchResultWeatherCard from "./components/SearchResultWeatherCard";
import withGrayDividerMiddle from "./components/withGrayDividerMiddle";

function App() {
  const Upper = withGrayDividerMiddle(WidgetContainer, WeatherCard);
  const Lower = withGrayDividerMiddle(CityForm, SearchResultWeatherCard);
  return (
    <div className={styles.container} data-testid="DEMO">
      <WeatherProvider>
        <BlueDivider />
        <div className={styles.contentContainer}>
          <div className={styles.upper}>
            <Upper />
          </div>
          <div className={styles.lower}>
            <Lower />
          </div>
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
