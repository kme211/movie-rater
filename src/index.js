import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

setTimeout(() => {
  store.dispatch({
    type: "ADD_MOVIE",
    movie: {
      id: 5,
      name: "Midnight Meat Train",
      rating: 4
    }
  });
}, 1000);

registerServiceWorker();
