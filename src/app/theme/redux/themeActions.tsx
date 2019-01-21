import { createAction } from 'redux-actions';

/**
 * All Theme Page Actions
 */
export namespace themeActions {
    export enum Type {
        PRIMARY_MAIN_CHANGED = 'PRIMARY_MAIN_CHANGED',
        SECONDARY_MAIN_CHANGED = 'SECONDARY_MAIN_CHANGED',
        TYPE_CHANGED = 'TYPE_CHANGED',
        THEME_NAME_CHANGED = 'THEME_NAME_CHANGED'
    }

    export const primaryMainChange = createAction(Type.PRIMARY_MAIN_CHANGED, (color: string | undefined) => color);
    export const secondaryMainChange = createAction(Type.SECONDARY_MAIN_CHANGED, (color: string | undefined) => color);
    export const typeChange = createAction(Type.TYPE_CHANGED, (type: boolean) => type ? '' : 'dark');
    export const themeNameChange = createAction(Type.THEME_NAME_CHANGED, (name: string) => name);
}