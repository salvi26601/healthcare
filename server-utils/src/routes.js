import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import IndexComponent from "./index-component";
import { loadUserData } from "./utils/auth-util";
import { verify_token, logout } from "./actions/auth";
import store from "./utils/store";

loadUserData();

const getConfirmation = (message, callback) => {
  verify_token();
  callback(true);
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      logout()(store.dispatch);
      window.location.href = "/login";
    }
  }
);

const Route_path = () => {
  return (
    <BrowserRouter getUserConfirmation={getConfirmation}>
      <Routes>
        <Route path="/" component={IndexComponent} />
      </Routes>
    </BrowserRouter>
  );
};

export default Route_path;
