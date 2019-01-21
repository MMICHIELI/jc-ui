import { RouteComponentProps } from 'react-router-dom';
import { Theme } from '@material-ui/core';

import { InternalErrorData, GlobalAppState, GlobalAppActions } from '../../app-redux/types';

// Actions
export interface DashboardActions {
  wordChange(word?: string): string;
}

// State
export interface DashboardState {
  word?: string;
  theme?: Theme;
}

// Container State
export interface DashboardContainerState {
  word?: string;
  theme?: Theme;
  currentTheme?: string;
  internalErrorData: InternalErrorData;
  formTouched: boolean;
}

// Props (Action + State + Validation + Language )
export interface DashboardProps extends RouteComponentProps {
  actions: DashboardActions;
  dashboardState: DashboardState;
  application: GlobalAppState;
  appActions: GlobalAppActions;
  isValid: boolean;
  language: string;
}
