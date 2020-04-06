import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from '../CreateTripPage/CreateTripPage'
import ListTripsPage from '../ListTripsPage/ListTripsPage'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage'
import HomePage from '../HomePage/HomePage'
import CandidatePage from '../CreateCandidatePage/CreateCandidatePage'
import AfterLogin from "../AfterLogin";



export const routes = {
  root: "/",
  login: "/login",
  aplicationForm: "/application-form",
  createTripPage: "/trips/create",
  tripDetailsPage: "/trips/details",
  listTripsPage: "/trips/list",
  createCandidatePage:"/trips/candidate",
  afterLogin:'/adminPage'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.aplicationForm} component={LoginPage} />
        <Route exact path={routes.createTripPage} component={CreateTripPage} />
        <Route exact path={routes.listTripsPage} component={ListTripsPage} />
        <Route exact path={routes.tripDetailsPage} component={TripDetailsPage} />
        <Route exact path={routes.createCandidatePage} component={CandidatePage}/>
        <Route exact path={routes.afterLogin} component={AfterLogin}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
