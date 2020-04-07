import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Login from "../src/components/Login";
import Register from "../src/components/Register"
import Home from "./components/Home";
import { ProtectedRoute } from "./protected.route";
import { Route, Switch } from "react-router-dom";

export default () =>
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Register" component={Register} />
      <ProtectedRoute exact path="/Home" component={Home} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  </Provider>;