import ApiCalendar from 'react-google-calendar-api';

import { setEvents, signInSuccess } from '@store/actions/authActions';
import { call, put, takeLatest } from 'redux-saga/effects';

import googleConfig from '../../../googleApiConfig';

const apiCalendar = new ApiCalendar(googleConfig) as any;

function* loadEventsSaga() {
  try {
    const response = yield call(() => apiCalendar.listUpcomingEvents(10));
    const events = response.result?.items || response.items || [];
    yield put(setEvents(events));
  } catch (e) {
    console.error('Error loading Google Calendar events:', e);
  }
}

export function* authWatcherSaga() {
  yield takeLatest(signInSuccess().type, loadEventsSaga);
}
