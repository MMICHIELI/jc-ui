import * as React from 'react';
import * as lod from 'lodash';
import { bindActionCreators, Dispatch } from 'redux';

import { Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { DashboardProps, DashboardContainerState } from './redux/types';
import { ApplicationState } from '../app-redux/types';
import { dashboardActions } from './redux/dashboardActions';
import { connect } from 'react-redux';

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
    this.state = { ...initialDashboardState };
    this.handleWordChange = this.handleWordChange.bind(this);
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
    const { word } = this.state;

    return (
      <div id="home_container">
        <h1>Justine&CO !!!</h1>
        <div id="form-improvement">
          <form id="home-form">
            <label id="labelName">Nom</label>
            <input
              type="text"
              value={word}
              onChange={this.handleWordChange}
            />

            <div>
              <h3>Buttons Example</h3>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="default">
                Default
              </Button>
            </div>

            <div>
              <Fab color="secondary" aria-label="Add">
                <AddIcon />
              </Fab>
            </div>

          </form>
        </div>
        {word &&
          <div>
            Hello {word}
          </div>
        }
      </div>
    );
  }

  private handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      word: event.target.value
    }, () => {
      this.props.actions.wordChange(this.state.word);
    });
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // tslint:disable no-any
    actions: bindActionCreators(lod.omit(dashboardActions, ['Type']) as any, dispatch)
    // tslint:disable no-any
  };
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
export default Dashboard;