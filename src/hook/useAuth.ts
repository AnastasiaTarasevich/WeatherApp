import { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch } from 'react-redux';

import googleConfig from '@googleApiConfig';
import { setEvents, signInSuccess } from '@store/actions/authActions';

const apiCalendar = new ApiCalendar(googleConfig);

export function useAuth() {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const fetchEvents = async () => {
    if (!apiCalendar.sign) return;
    const res = await apiCalendar.listUpcomingEvents(10);
    dispatch(setEvents(res.result.items));
  };

  const signIn = async () => {
    await apiCalendar.handleAuthClick();
    setIsSignedIn(apiCalendar.sign);
    dispatch(signInSuccess());
    await fetchEvents();
  };

  const signOut = async () => {
    await apiCalendar.handleSignoutClick();
    setIsSignedIn(false);
    dispatch(setEvents([]));
  };

  return { isSignedIn, signIn, signOut };
}
