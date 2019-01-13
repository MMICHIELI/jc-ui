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

    constructor(props: ThemeProps) {
        super(props);
        this.state = {
            ...initialState
        };
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    public componentDidMount() {
        this.setState({
            theme: this.props.application.theme
        });
    }

    public render() {
        // const { theme } = this.state;
        // const radioGroupRef = React.useRef(null);

        // tslint:disable-next-line:no-console
        console.log('Props Actuel => ', this.props);
        return (
            <Grid id="theme-container" container spacing={8}>
                <Paper>
                    <h1>Themes Page</h1>
                    <h3>Actual Theme is </h3>
                </Paper>
            </Grid>
        );
    }

    private handleThemeChange = (event: React.ChangeEvent) => {
        this.setState({
            /* theme: event.target */
        }, () => {
            this.props.globalAppProps.actions.themeChange(this.state.theme);
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