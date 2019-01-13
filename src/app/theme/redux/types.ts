import { InternalErrorData, GlobalAppState, GlobalAppProps } from '../../app-redux/types';
import { RouteComponentProps } from 'react-router';
import { Theme } from '@material-ui/core';

// Container State
export interface ThemeContainerState {
    theme?: Theme;
    internalErrorData: InternalErrorData;
}

export interface ThemeProps extends RouteComponentProps {
    globalAppState: GlobalAppState;
    globalAppProps: GlobalAppProps;
}