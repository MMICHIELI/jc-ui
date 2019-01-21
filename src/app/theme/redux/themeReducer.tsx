import { handleActions, Action } from 'redux-actions';

import { ThemeState } from './types';
import { themeActions } from './themeActions';

/**
 * Combine all reducers for ThemePage
 */
const INITIAL_STATE: ThemeState = {
    primaryMain: undefined,
    secondaryMain: undefined,
    type: undefined,
    themeName: undefined
};

const themeReducer = handleActions<ThemeState, string | boolean | undefined>(
    {
        [themeActions.Type.PRIMARY_MAIN_CHANGED]: (state: ThemeState, action: Action<string | undefined>): ThemeState => {
            return {
                ...state,
                primaryMain: action.payload
            };
        },
        [themeActions.Type.SECONDARY_MAIN_CHANGED]: (state: ThemeState, action: Action<string | undefined>): ThemeState => {
            return {
                ...state,
                secondaryMain: action.payload
            };
        },
        [themeActions.Type.TYPE_CHANGED]: (state: ThemeState, action: Action<string | undefined>): ThemeState => {
            return {
                ...state,
                type: action.payload
            };
        },
        [themeActions.Type.THEME_NAME_CHANGED]: (state: ThemeState, action: Action<string | undefined>): ThemeState => {
            return {
                ...state,
                themeName: action.payload
            };
        }
    },
    INITIAL_STATE
);

export default themeReducer;