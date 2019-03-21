import * as React from 'react';
import * as lod from 'lodash';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ApplicationState } from '../app-redux/types';
import { ThemeContainerState, ThemeProps } from './redux/types';
import { themeActions } from './redux/themeActions';

import { Grid, Paper } from '@material-ui/core';

import ThemeMaker from './components/ThemeMaker';

// Initial State
const initialState: ThemeContainerState = {
    internalErrorData: {
        hasInternalError: false,
        infoInternalError: {
            componentStack: ''
        }
    },
    formTouched: false
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

    public componentWillMount() {
        const { theme } = this.props.application;
        if (!lod.isNil(theme)) {
            this.setState({
                primaryMain: theme.palette.primary.main,
                secondaryMain: theme.palette.secondary.main,
                type: theme.palette.type || ''
            });
        }
    }

    public componentDidCatch(error: Error, info: React.ErrorInfo) {
        if (JSON.stringify(error)) {
            this.setState({
                internalErrorData: {
                    hasInternalError: true,
                    infoInternalError: info
                }
            });
        }
    }

    public render() {
        // tslint:disable-next-line:no-console
        console.log('Props Actuel => ', this.props);

        const { primaryMain, secondaryMain, type, themeName } = this.state;
        const { actions } = this.props;

        return (
            <Grid id="theme-container" container spacing={8}>
                <Grid item lg={12} md={12} xs={12}>
                    <h1>Themes Page</h1>
                    <Paper>
                        <ThemeMaker
                            primaryColor={primaryMain}
                            secondaryColor={secondaryMain}
                            type={type}
                            themeName={themeName}
                            primaryColorChange={actions.primaryMainChange}
                            secondaryColorChange={actions.secondaryMainChange}
                            typeChange={actions.typeChange}
                            themeNameChange={actions.themeNameChange}
                            internalErrorData={this.state.internalErrorData}
                        />
                    </Paper>
                </Grid>
            </Grid>
        );
    }

    private handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        /*         this.setState({
                    /* theme: event.target */
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
        actions: bindActionCreators(lod.omit(themeActions, ['Type']) as any, dispatch)
    };
};

const Theme = connect(mapStateToProps, mapDispatchToProps)(ThemeComponent);
export default Theme;