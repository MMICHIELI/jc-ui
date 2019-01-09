import { ErrorInfo } from 'react';
import { DashboardState } from '../dashboard/redux/types';

/**
 * The top-level state object
 */
export interface ApplicationState {
  dashboard: DashboardState;
}
// tslint:disable-next-line no-empty-interface
export interface GlobalAppState { }
export interface GlobalAppActions { }
export interface GlobalAppProps { }

export interface HandleErrorProps {
  internalErrorData: InternalErrorData;
}

export interface InternalErrorData {
  hasInternalError: boolean;
  infoInternalError: ErrorInfo;
}