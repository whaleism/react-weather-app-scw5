import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="St Paul" />
        <footer>
          Project coded by{" "}
          <a
            href="https://github.com/whaleism"
            target="_blank"
            rel="noreferrer"
          >
            Jenny Lee
          </a>
          , opened sourced on{" "}
          <a
            href="https://github.com/whaleism/react-weather-app-scw5"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted by{" "}
          <a
            href="https://glittery-llama-df5134.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
