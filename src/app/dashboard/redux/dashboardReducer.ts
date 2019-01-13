import { handleActions, Action } from 'redux-actions';

import { DashboardState } from './types';
import { dashboardActions } from './dashboardActions';

/**
 * Combine all reducers for HomePage
 */
const INITIAL_STATE: DashboardState = {
    word: undefined
};

const dashboardReducer = handleActions<DashboardState, string | undefined>(
    {
        [dashboardActions.Type.WORD_CHANGED]: (state: DashboardState, action: Action<string | undefined>): DashboardState => {
            return {
                ...state,
                word: action.payload
            };
        }
    },
    INITIAL_STATE
);

export default dashboardReducer;