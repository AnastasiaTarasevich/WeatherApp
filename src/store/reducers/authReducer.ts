import { AUTH_SET_EVENTS } from '@constants/authActionTypes';

export interface AuthState {
  events: {
    id: string;
    summary: string;
    start: { dateTime?: string; date?: string };
    end: { dateTime?: string; date?: string };
  }[];
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
