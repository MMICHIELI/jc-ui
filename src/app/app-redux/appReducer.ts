import { handleActions, Action } from 'redux-actions';
import { Theme } from '@material-ui/core';

import { GlobalAppState } from './types';
import { THEMES } from './constants';
import { appActions } from './appActions';

/**
 * Combine All reducers for Global App
 */
const INITIAL_STATE: GlobalAppState = {
    theme: THEMES.DUCK.muiTheme
};

const appReducer = handleActions<GlobalAppState, Theme>(
    {
        [appActions.Type.THEME_CHANGED]: (state: GlobalAppState, action: Action<Theme>): GlobalAppState => {
            return {
                ...state,
                theme: action.payload || INITIAL_STATE.theme
            };
        }
    },
    INITIAL_STATE
);

export default appReducer;