import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { locationReducer } from './reducers/geoPosition';
import { locationWatcherSaga } from './sagas/geoPosition';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  location: locationReducer,
});

function* rootSaga() {
  yield all([locationWatcherSaga()]);
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
