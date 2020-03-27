import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, exact } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import ListTripsPage from '../ListTripsPage/ListTripsPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'
import HomePage from '../HomePage/HomePage'




export const routes = {
  root: "/",
  aplicationForm: "/application-form",
  createTripPage: "/CreateTripPage",
  tripDetailsPage: "/TripDetaisPage",
  listTripsPage: "/ListTripPage",
  homePage: "/HomePage"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.aplicationForm} component={LoginPage} />
        <Route exact path={routes.createTripPage} component={CreateTripPage} />
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.listTripsPage} component={ListTripsPage} />
        <Route exact path={routes.tripDetailsPage} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

/* - lista antiga que não estou conseguindo fazer funcionar
export const routes = {
  root: "/",
  login: "/login",
  aplicationForm: "/application-form",
  createTripPage: "/trips/create",
  tripDetailsPage: "/trips/details",
  listTripsPage: "/trips/list",
  homePage: "/HomePage"
};
 */