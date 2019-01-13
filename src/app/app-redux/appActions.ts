import { createAction } from 'redux-actions';
import { Theme } from '@material-ui/core';

/**
 * All Global Apps Actions
 */
export namespace appActions {
    export enum Type {
        THEME_CHANGED = 'THEME_CHANGED'
    }

    export const themeChange = createAction(Type.THEME_CHANGED, (theme: Theme) => theme);
}