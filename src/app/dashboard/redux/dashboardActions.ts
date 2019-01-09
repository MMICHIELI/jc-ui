import { createAction } from 'redux-actions';

/**
 * All Dashboard Actions
 */
export namespace dashboardActions {

  export enum Type {
    WORD_CHANGED = 'WORD_CHANGED'
  }

  export const wordChange = createAction(Type.WORD_CHANGED, (word: string | undefined) => word);
}