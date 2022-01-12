import React from 'react';
import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES_PATH } from './constants/routesPath';
import Main from './pages/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={ROUTES_PATH.MAIN} component={Main}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
