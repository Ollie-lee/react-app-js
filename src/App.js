import BlueDivider from "./components/BlueDivider";
import styles from "./App.module.css";
import WidgetContainer from "./components/WidgetContainer";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react/cjs/react.development";

function App() {
  const [title, setTitle] = useState();
  const [temperatureMode, setTemperatureMode] = useState(true);
  const [windMode, setWindMode] = useState(true);

  return (
    <div className={styles.container} data-testid="DEMO">
      <BlueDivider />
      <div className={styles.contentContainer}>
        <WidgetContainer
          title={title}
          setTitle={setTitle}
          temperatureMode={temperatureMode}
          setTemperatureMode={setTemperatureMode}
          windMode={windMode}
          setWindMode={setWindMode}
        />
        <div className={styles.verticalDivider}></div>
        <WeatherCard
          title={title}
          windMode={windMode}
          temperatureMode={temperatureMode}
        />
      </div>
    </div>
  );
}

export default App;
