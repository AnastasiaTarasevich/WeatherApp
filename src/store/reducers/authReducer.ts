import { AUTH_SET_EVENTS } from '@constants/authActionTypes';

export interface AuthState {
  events: any[];
}

const initialState: AuthState = {
  events: [],
};

export const authReducer = (state = initialState, action): AuthState => {
  switch (action.type) {
    case AUTH_SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
