import * as React from 'react';
import * as lod from 'lodash';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import InputMask from 'react-input-mask';

import { ApplicationState } from '../app-redux/types';
import { ThemeContainerState, ThemeProps } from './redux/types';
import { themeActions } from './redux/themeActions';

import { Grid, Paper, TextField } from '@material-ui/core';

import { FormWrapper } from '../app-redux/GlobalStyled';

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
        this.handlePrimaryChange = this.handlePrimaryChange.bind(this);
    }

    public componentWillMount() {
        const { theme } = this.props.application;
        const { primaryMain } = this.state;
        if (lod.isNil(primaryMain)) {
            this.setState({
                primaryMain: theme.palette.primary.main
            });
        }
    }

    public componentDidMount() {
        /*         const { theme } = this.props.application;
                const { primaryMain } = this.state;
                if (lod.isNil(primaryMain)) {
                    this.setState({
                        primaryMain: theme.palette.primary.mains
                    });
                } */
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

        const { primaryMain } = this.state;

        return (
            <Grid id="theme-container" container spacing={8}>
                <Grid item lg={12} md={12} xs={12}>
                    <h1>Themes Page</h1>
                    <Paper>
                        <FormWrapper>
                            <InputMask
                                mask="#******"
                                value={primaryMain}
                                onChange={this.handlePrimaryChange}
                            >
                                {() =>
                                    <TextField
                                        id="primary"
                                        label="Primary Color"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                }
                            </InputMask>
                        </FormWrapper>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

    private handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        /*         this.setState({
                    /* theme: event.target */
    }
    private handlePrimaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            primaryMain: event.target.value
        }, () => {
            this.props.actions.primaryMainChange(this.state.primaryMain);
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
        actions: bindActionCreators(lod.omit(themeActions, ['Type']) as any, dispatch)
    };
};

const Theme = connect(mapStateToProps, mapDispatchToProps)(ThemeComponent);
export default Theme;