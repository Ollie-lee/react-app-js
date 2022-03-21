import BlueDivider from "./components/BlueDivider";
import styles from "./App.module.css";
import WidgetContainer from "./components/WidgetContainer";
import WeatherCard from "./components/WeatherCard";
import { WeatherProvider } from "./contexts/WeatherContextProvider";

function App() {
  return (
    <div className={styles.container} data-testid="DEMO">
      <WeatherProvider>
        <BlueDivider />
        <div className={styles.contentContainer}>
          <WidgetContainer />
          <div className={styles.verticalDivider}></div>
          <WeatherCard />
        </div>
      </WeatherProvider>
    </div>
  );
}

export default App;
