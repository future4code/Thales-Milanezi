import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import ListTripsPage from '../ListTripsPage'
import TripDetailsPage from '../TripDetailsPage'
import Login from '../Login'





const routes = {
  root: "/",
  aplicationForm:"/application-form",
  login:"/login",
  createTripPage:"/trips/create",
  tripDetailsPage:"/trips/details",
  listTripsPage:"/trips/list"

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} />
        <Route path={routes.createTripPage} component={CreateTripPage} />
        <Route path={routes.root} component={HomePage} />
        <Route path={routes.listTripsPage} component={ListTripsPage} />
        <Route path={routes.tripDetailsPage} component={TripDetailsPage} />
        <Route path={routes.root} component={Login} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
