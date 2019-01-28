import { ErrorInfo } from 'react';
import { DashboardState } from '../dashboard/redux/types';
import { Theme } from '@material-ui/core';
import { ThemeState } from '../theme/redux/types';

/**
 * The top-level state object
 */
export interface ApplicationState {
  application: GlobalAppState;
  dashboard: DashboardState;
  theme: ThemeState;
}

// Global App Actions
export interface GlobalAppActions {
  themeChange(theme: Theme): Theme;
}

// Global App State
export interface GlobalAppState {
  theme: Theme;
}

// Global App Props
export interface GlobalAppProps {
  actions: GlobalAppActions;
  application: GlobalAppState;
}

export interface HandleErrorProps {
  internalErrorData: InternalErrorData;
}

export interface InternalErrorData {
  hasInternalError: boolean;
  infoInternalError: ErrorInfo;
}

export interface RadioOption {
  id: number;
  label: string;
  value: string;
  checked?: boolean;
}