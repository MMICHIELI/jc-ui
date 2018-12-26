import * as React from 'react';
import * as lod from 'lodash';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppProps } from './app-redux/types';
import routes from './app-redux/routes';
import store from './app-redux/store';

/**
 * Root Component for Justine & Co
 */
export default class App extends React.Component<AppProps> {
  public render() {
    // tslint:disable no-unsafe-any
    const containers = lod.map(routes, ({ path, component }, key) => (
      // tslint:enable no-unsafe-any
      <Route exact={true} path={path} component={component} key={key} />)
    );

    return (
      <Provider store={store}>
        <div>
          <Router>
            <Switch>{containers}</Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}