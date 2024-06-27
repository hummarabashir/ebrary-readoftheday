import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import Visitor  from "./Visitor";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      {/* <Route path="/store/:storeId" component={App} /> */}
      {/* <Route path="/store/:storeId" component={storeId === 'Admin' ? App : Visitor} /> */}
      <Route path="/store/:storeId" component={props => props.match.params.storeId === 'Admin' ? <App /> : <Visitor />} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;