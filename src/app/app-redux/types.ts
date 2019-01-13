import { ErrorInfo } from 'react';
import { DashboardState } from '../dashboard/redux/types';
import { Theme } from '@material-ui/core';

/**
 * The top-level state object
 */
export interface ApplicationState {
  application: GlobalAppState;
  dashboard: DashboardState;
}

// Global App Actions
export interface GlobalAppActions {
  themeChange(theme?: Theme): Theme;
}

// Global App State
export interface GlobalAppState {
  theme?: Theme;
}

// Global App Props
export interface GlobalAppProps {
  actions: GlobalAppActions;
  appState: GlobalAppState;
}

export interface HandleErrorProps {
  internalErrorData: InternalErrorData;
}

export interface InternalErrorData {
  hasInternalError: boolean;
  infoInternalError: ErrorInfo;
}