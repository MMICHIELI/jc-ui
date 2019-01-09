import { InternalErrorData } from '../../app-redux/types';
import { RouteComponentProps } from 'react-router-dom';

// Actions
export interface DashboardActions {
  wordChange(word?: string): string;
}

// State
export interface DashboardState {
  word?: string;
}

// Container State
export interface DashboardContainerState {
  word?: string;
  internalErrorData: InternalErrorData;
  formTouched: boolean;
}

// Props (Action + State + Validation + Language )
export interface DashboardProps extends RouteComponentProps {
  actions: DashboardActions;
  dashboardState: DashboardState;
  isValid: boolean;
  language: string;
}
