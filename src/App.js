import Weather from "./Weather";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charleston" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://eclectic-pie-9d7f2a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Silvia Lee
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/ishilbi/weather-react-app2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
