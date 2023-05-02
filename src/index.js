import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
//import {Router, browserHistory} from "react-router";
import store from "./utils/store";
import Routers from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Routers/>
  </Provider>,
  document.getElementById('root')
);

//<App />,