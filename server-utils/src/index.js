import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
//import {Router, browserHistory} from "react-router";
import store from "./utils/store";
import RoutePath from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <RoutePath/>
  </Provider>,
  document.getElementById('root')
);

//<App />,