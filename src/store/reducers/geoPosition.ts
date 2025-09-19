import { FETCH_LOCATION_FAILURE, FETCH_LOCATION_REQUEST, FETCH_LOCATION_SUCCESS } from "@constants/locationFetch";


const initialState = {
  city: '',
  lat: null,
  lon: null,
  loading: false,
  error: null,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATION_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        city: action.payload.city,
        lat: action.payload.lat,
        lon: action.payload.lon,
      };
    case FETCH_LOCATION_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
