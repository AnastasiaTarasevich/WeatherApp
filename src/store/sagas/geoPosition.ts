import { OPENWEATHER_API } from '@constants/api';
import { FETCH_LOCATION_REQUEST } from '@constants/locationFetch';
import {
  fetchLocationFailure,
  fetchLocationSuccess,
} from '@store/actions/geoPosition';
import { call, put, takeLatest } from 'redux-saga/effects';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function* fetchLocationSaga() {
  try {
    const position= yield call(getCurrentPosition);
    const coords = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };

    const res: Response = yield call(
      fetch,
      `${OPENWEATHER_API}?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=ru`
    );
    const data = yield call([res, res.json]);

    yield put(fetchLocationSuccess(data.name, coords.lat, coords.lon));
  } catch (err) {
    yield put(fetchLocationFailure(err.message));
  }
}

export function* locationWatcherSaga() {
  yield takeLatest(FETCH_LOCATION_REQUEST, fetchLocationSaga);
}
