import "./App.css";
import { Weather } from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My Local Weather</h1>
        <Weather />
        <footer>
          <a
            href="https://github.com/jennyweic/weather-app-react-week5"
            target="_blank"
          >
            My Local Weather App
          </a>{" "}
          project is opened-sourced on Github & was coded by Jennifer.
        </footer>
      </div>
    </div>
  );
}
