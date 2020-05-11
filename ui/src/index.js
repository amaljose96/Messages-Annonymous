import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NomenNescio from "./NomenNescio";
import { Provider } from "./NomenNescio/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
      <NomenNescio /></Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
