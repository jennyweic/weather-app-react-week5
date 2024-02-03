import "./App.css";
import { Weather } from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App using React</h1>
        <Weather />
        <footer>
          This Weather App coded with React project is created by Jennifer and
          is opened-sourced.
          <a
            href="https://github.com/jennyweic/weather-app-react-week5"
            target="_blank"
          >
            Github profile.
          </a>
        </footer>
      </div>
    </div>
  );
}
