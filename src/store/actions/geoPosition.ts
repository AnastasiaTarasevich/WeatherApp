import {
  FETCH_LOCATION_FAILURE,
  FETCH_LOCATION_REQUEST,
  FETCH_LOCATION_SUCCESS,
} from '@constants/locationFetch';

export const fetchLocationRequest = () => ({
  type: FETCH_LOCATION_REQUEST,
});

export const fetchLocationSuccess = (city, lat, lon) => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: { city, lat, lon },
});

export const fetchLocationFailure = (error) => ({
  type: FETCH_LOCATION_FAILURE,
  payload: error,
});
