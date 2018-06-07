import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import App from './components/app';
import Home from './components/views/home';
import Discover from './components/views/discover';
import DiscoverEvents from './components/views/discover-filter-events';
import DiscoverCompetition from './components/views/discover-filter-competition';
import DiscoverInternship from './components/views/discover-filter-internship';
const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/discover' component={Discover} />
    <Route path='/discover-filter-events' component={DiscoverEvents} />
    <Route path='/discover-filter-competition' component={DiscoverCompetition} />
    <Route path='/discover-filter-internship' component={DiscoverInternship} />
    <Route path='*' render={() => <Redirect to='/' />} />
  </Switch>
);

export default Routes;
