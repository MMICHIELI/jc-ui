import { createSelector } from 'reselect';
import { ApplicationState } from './types';

export const appSelector = (state: ApplicationState) => state.application;

export const themeValueSelector = createSelector(
    appSelector,
    state => {
        return {
            theme: state.theme
        };
    }
);