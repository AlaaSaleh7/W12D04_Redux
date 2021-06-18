import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//context providers
import { Provider } from "react-redux";
import store from "./reducer/index";


//Create a provider and pass to it the store value
ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
