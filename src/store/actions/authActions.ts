import {
  AUTH_SET_EVENTS,
  AUTH_SIGN_IN_SUCCESS,
} from '@constants/authActionTypes';

export const setEvents = (events: []) => ({
  type: AUTH_SET_EVENTS,
  payload: events,
});

export const signInSuccess = () => ({
  type: AUTH_SIGN_IN_SUCCESS,
});
