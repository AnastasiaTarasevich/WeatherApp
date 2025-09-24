import ApiCalendar from 'react-google-calendar-api';

import googleConfig from '@googleApiConfig';
import { setEvents, signInSuccess } from '@store/actions/authActions';
import { call, put, takeLatest } from 'redux-saga/effects';

interface IApiCalendar {
  sign: boolean;
  listUpcomingEvents(maxResults?: number): Promise<{ result: { items: [] } }>;
  handleAuthClick(): void;
  handleSignoutClick(): void;
}
const apiCalendar: IApiCalendar = new ApiCalendar(googleConfig);

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
