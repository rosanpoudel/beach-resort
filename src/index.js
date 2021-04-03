import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/scss/main.scss";

import App from "./App";
import { RoomProvider } from "./Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  rootElement
);
