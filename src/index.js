import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import $  from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from "./App";
import "./index.css";

// REDUX
// import { Provider } from 'react-redux';
// import store from './redux/store';

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,

  document.getElementById("root")
);
