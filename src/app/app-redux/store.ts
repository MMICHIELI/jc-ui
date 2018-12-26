import { ApplicationState } from './types';
import { applyMiddleware, combineReducers, createStore, Middleware, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({

});

const logger: Middleware = (applicationStore) => (next) => (action) => {
  if (process.env.MODE_ENV !== 'production') {
    // tslint:disable no-console
    console.log('Action dispatched', action);
    // tslint:enable no-console

    const returnValue = next(action);

    // tslint:disable no-console
    console.log('New State', applicationStore.getState());
    // tslint:enable no-console

    return returnValue;
  }

  return next(action);
};

let middleWare;

if (process.env.MODE_ENV !== 'production') {
  middleWare = applyMiddleware(logger);
  middleWare = composeWithDevTools(middleWare);
}

const store: Store<ApplicationState> = createStore(reducers, {}, middleWare);

export default store;