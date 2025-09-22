import { FETCH_LOCATION_REQUEST } from '@constants/locationFetch';
import {
  fetchLocationFailure,
  fetchLocationSuccess,
} from '@store/actions/geoPosition';
import { call, put, takeLatest } from 'redux-saga/effects';

const OPENWEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function* fetchLocationSaga() {
  try {
    const ipRes = yield call(fetch, 'https://ipapi.co/json/');
    const ipData = yield call([ipRes, ipRes.json]);
    const coords = { lat: ipData.latitude, lon: ipData.longitude };

    const res = yield call(
      fetch,
      `${OPENWEATHER_API}?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=ru`
    );
    const data = yield call([res, res.json]);

    yield put(fetchLocationSuccess(data.name, coords.lat, coords.lon));
  } catch {
    yield put(fetchLocationFailure('Error for geo'));
  }
}

export function* locationWatcherSaga() {
  yield takeLatest(FETCH_LOCATION_REQUEST, fetchLocationSaga);
}
