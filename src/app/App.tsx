import * as React from 'react';
import * as lod from 'lodash';
import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalAppProps } from './app-redux/types';
import routes from './app-redux/routes';
import store from './app-redux/store';
import { THEMES } from './app-redux/constants';

/**
 * Root Component for Justine & Co
 */
export default class App extends React.Component<GlobalAppProps> {
  public render() {
    // tslint:disable no-unsafe-any
    const containers = lod.map(routes, ({ path, component }, key) => (
      // tslint:enable no-unsafe-any
      <Route exact={true} path={path} component={component} key={key} />)
    );

    return (

      <Provider store={store}>
        <MuiThemeProvider theme={THEMES.SAND}>
          <Router>
            <Switch>{containers}</Switch>
          </Router>
        </MuiThemeProvider>
      </Provider >

    );
  }
}