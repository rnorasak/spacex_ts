import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import PastLaunches from './pastLaunches';
import Home from './home';
import AboutUs from './aboutUs';
import Rockets from './rockets';
import Launchpads from './launchpads';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pastLaunches" component={PastLaunches} />
        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/launchpads" component={Launchpads} />
        <Route exact path="/aboutUs" component={AboutUs} />
      </Switch>
    </div>
  );
};

export default Routes;
