import { RouteComponentProps } from 'react-router';

import { InternalErrorData, GlobalAppState, GlobalAppProps } from '../../app-redux/types';

// Container State
export interface ThemeContainerState {
    primaryMain?: string;
    secondaryMain?: string;
    type?: string;
    themeName?: string;
    internalErrorData: InternalErrorData;
    formTouched: boolean;
}

// Theme page Actions
export interface ThemeActions {
    primaryMainChange(value?: string): string;
    secondaryMainChange(value?: string): string;
    typeChange(value?: string): string;
    themeNameChange(value?: string): string;
}

// Theme page Props
export interface ThemeProps extends RouteComponentProps {
    actions: ThemeActions;
    themeState: ThemeState;
    application: GlobalAppState;
    globalAppProps: GlobalAppProps;
}

// Theme page State
export interface ThemeState {
    primaryMain?: string;
    secondaryMain?: string;
    type?: string;
    themeName?: string;
}

export const typesOptions: Array<string> = [
    'dark',
    'light'
];