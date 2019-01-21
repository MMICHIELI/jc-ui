import * as React from 'react';
import * as lod from 'lodash';
import { bindActionCreators, Dispatch } from 'redux';

import { Button, Fab, TextField, Grid, Paper, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { DashboardProps, DashboardContainerState } from './redux/types';
import { ApplicationState } from '../app-redux/types';
import { dashboardActions } from './redux/dashboardActions';
import { connect } from 'react-redux';
import { FormWrapper } from '../app-redux/GlobalStyled';
import { THEMES } from '../app-redux/constants';
import { appActions } from '../app-redux/appActions';
import { Link } from 'react-router-dom';

const initialDashboardState: DashboardContainerState = {
    word: '',
    internalErrorData: {
        hasInternalError: false,
        infoInternalError: {
            componentStack: ''
        }
    },
    formTouched: false
};

/**
 * DashboardContainer displays the Dashboard Page Components
 */
class DashboardContainer extends React.Component<DashboardProps, DashboardContainerState> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            ...initialDashboardState,
        };
        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    public componentWillMount() {
        this.setState({
            theme: this.props.application.theme
        }, () => {
            lod.forEach(THEMES, ({ label, muiTheme }) => {
                if (muiTheme === this.state.theme) {
                    this.setState({
                        currentTheme: label
                    });
                }
            });
        });

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
        const { word, currentTheme } = this.state;

        return (
            <Grid id="home_container" container spacing={8}>
                <Grid item lg={12} md={12} xs={12}>
                    <h1>Dashboard de Justine&CO !!!</h1>

                    <Paper>
                        <FormWrapper>
                            <TextField
                                id="field-name"
                                label="Nom"
                                placeholder="Nom"
                                value={word}
                                onChange={this.handleWordChange}
                                margin="normal"
                                variant="outlined"
                            />
                        </FormWrapper>
                        <RadioGroup
                            aria-label="theme-selector"
                            name="theme-selector"
                            onChange={this.handleThemeChange}
                        >
                            {lod.map(THEMES, ({ label }, id) => (
                                <FormControlLabel
                                    key={id}
                                    value={label}
                                    control={<Radio checked={currentTheme === label} />}
                                    label={label}
                                />
                            ))}
                        </RadioGroup>
                        <Button variant="contained" color="secondary">
                            <Link to="/theme">Theme</Link>
                        </Button>
                    </Paper>
                    {word &&
                        <Paper ><h3>Hello {word}</h3></Paper>
                    }
                </Grid>

                <Grid item lg={6} md={6} xs={12}>
                    <Paper>
                        <h3>Buttons Text</h3>
                        <FormWrapper>
                            <Button color="primary">
                                Primary
                            </Button>
                            <Button color="secondary">
                                Secondary
                            </Button>
                            <Button color="default">
                                Default
                            </Button>
                        </FormWrapper>
                    </Paper>
                    <Paper>
                        <h3>Buttons Contained</h3>
                        <FormWrapper>
                            <Button variant="contained" color="primary">
                                Primary
                            </Button>
                            <Button variant="contained" color="secondary">
                                Secondary
                            </Button>
                            <Button variant="contained" color="default">
                                Default
                            </Button>
                        </FormWrapper>
                    </Paper>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Paper>
                        <h3>Buttons Outlined</h3>
                        <FormWrapper>
                            <Button variant="outlined" color="primary">
                                Primary
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Secondary
                            </Button>
                            <Button variant="outlined" color="default">
                                Default
                            </Button>
                            <Button variant="outlined" color="secondary">
                                Telecharger
                                <CloudUploadIcon />
                            </Button>
                        </FormWrapper>
                    </Paper>
                    <Paper>
                        <h3>Buttons Floating</h3>
                        <FormWrapper>
                            <Fab color="secondary" aria-label="Add">
                                <AddIcon />
                            </Fab>
                        </FormWrapper>
                    </Paper>
                </Grid>
            </Grid >
        );
    }

    private handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            word: event.target.value
        }, () => {
            this.props.actions.wordChange(this.state.word);
        });
    }

    private handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        lod.map(THEMES, ({ muiTheme, label }) => {
            if (label === event.target.value) {
                this.setState({
                    currentTheme: label,
                    theme: muiTheme
                }, () => {
                    this.props.appActions.themeChange(muiTheme);
                });
            }
        });
    }
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        dashboard: state.dashboard,
        application: state.application
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // tslint:disable:no-any
        actions: bindActionCreators(lod.omit(dashboardActions, ['Type']) as any, dispatch),
        appActions: bindActionCreators(lod.omit(appActions, ['Type']) as any, dispatch)
        // tslint:enable:no-any
    };
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
export default Dashboard;