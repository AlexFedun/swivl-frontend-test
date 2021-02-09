import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const configureStore = preloadedState => {
  const enhancers = compose(
    applyMiddleware(thunk, sagaMiddleware),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose, // eslint-disable-line
    // DevTools.instrument()
  );
  return createStore(
    rootReducer,
    preloadedState,
    enhancers,
  );
}

const store =  configureStore({});
sagaMiddleware.run(rootSaga);

export default store;
