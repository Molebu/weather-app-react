import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bloemfontein" />
        <p>
          This app was created by{" "}
          <a href="https://github.com/Molebu">Moleboheng Molatuli</a> and it is
          open sourced on
          <a href="https://github.com/Molebu/weather-app-react">
            {" "}
            Github
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
