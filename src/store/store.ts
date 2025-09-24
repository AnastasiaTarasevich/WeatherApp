import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { authReducer } from './reducers/authReducer';
import { locationReducer } from './reducers/geoPosition';
import { authWatcherSaga } from './sagas/authSaga';
import { locationWatcherSaga } from './sagas/geoPosition';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  location: locationReducer,
  auth: authReducer,
});

function* rootSaga() {
  yield all([locationWatcherSaga(), authWatcherSaga()]);
}

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
