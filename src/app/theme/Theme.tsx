import * as React from 'react';
import * as lod from 'lodash';
import { Dispatch, bindActionCreators } from 'redux';

import { ApplicationState } from '../app-redux/types';
import { ThemeContainerState, ThemeProps } from './redux/types';
import { appActions } from '../app-redux/appActions';
import { connect } from 'react-redux';
import { Theme, Grid, Paper } from '@material-ui/core';

// Initial State
const initialState: ThemeContainerState = {
    internalErrorData: {
        hasInternalError: false,
        infoInternalError: {
            componentStack: ''
        }
    }
};
/**
 * Theme Component
 */
class ThemeComponent extends React.Component<ThemeProps, ThemeContainerState> {
    public static getDerivedStateFromProps(props: ThemeProps) {
        return {
            theme: props.globalAppProps.appState.theme || props.globalAppState.theme
        };
    }

    constructor(props: ThemeProps) {
        super(props);
        this.state = {
            ...initialState
        };
        this.handleThemeChange = this.handleThemeChange.bind(this);
        // tslint:disable-next-line:no-console
        console.log('Theme Value => ', this.state.theme);
    }

    public render() {
        const { theme } = this.state;

        return (
            <Grid id="theme-container" container spacing={8}>
                <Paper>
                    <h1>Themes Page</h1>
                    <h3>Actual Theme is `${theme}`</h3>
                </Paper>
            </Grid>
        );
    }

    private handleThemeChange = (event: React.ChangeEvent) => {
        this.setState({
            /* theme: event.target */
        }, () => {
            this.props.globalAppProps.actions.themeChange(this.props.globalAppState.theme);
        });
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

const Theme = connect(mapStateToProps, mapDispatchToProps)(ThemeComponent);
export default Theme;