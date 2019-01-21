import * as React from 'react';
import * as lod from 'lodash';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';

import routes from './app-redux/routes';
import { GlobalAppProps, ApplicationState, GlobalAppState } from './app-redux/types';
import { appActions } from './app-redux/appActions';
import { AppWrapper, MainContainer } from './app-redux/GlobalStyled';

/**
 * Root Component for Justine & Co
 */
class AppContainer extends React.Component<GlobalAppProps, GlobalAppState> {
    constructor(props: GlobalAppProps) {
        super(props);
    }

    public render() {

        const containers = lod.map(routes, ({ path, component }, key) => (
            <Route exact={true} path={path} component={component} key={key} />)
        );

        // tslint:disable-next-line:no-console
        console.log('App Props =>', this.props.application);

        const { theme } = this.props.application;

        return (
            <AppWrapper id="jcui-root-wrapper">
                <MainContainer id="main-container">
                    <MuiThemeProvider theme={theme}>
                        <Router>
                            <Switch>{containers}</Switch>
                        </Router>
                    </MuiThemeProvider>
                </MainContainer>
            </AppWrapper>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        application: state.application
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // tslint:disable-next-line:no-any
        actions: bindActionCreators(lod.omit(appActions, ['Type']) as any, dispatch)
    };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default App;