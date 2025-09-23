import { useCallback, useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';
import { useDispatch } from 'react-redux';

import { setEvents, signInSuccess } from '@store/actions/authActions';

import googleConfig from '../../googleApiConfig';

const apiCalendar = new ApiCalendar(googleConfig);

export function useAuth() {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const fetchEvents = useCallback(async () => {
    try {
      if (!apiCalendar.sign) {
        console.log('User not signed in yet');
        return;
      }

      const res: any = await apiCalendar.listUpcomingEvents(10);
      const events = res.result?.items || res.items || [];
      dispatch(setEvents(events));
    } catch (e) {
      console.error('Error loading Google Calendar events:', e);
    }
  }, [dispatch]);

  const signIn = useCallback(async () => {
    try {
      await apiCalendar.handleAuthClick();

      await new Promise((resolve) => setTimeout(resolve, 700));

      setIsSignedIn(apiCalendar.sign);
      dispatch(signInSuccess());
      await fetchEvents();
    } catch (e) {
      console.error('Google Sign In error:', e);
    }
  }, [dispatch, fetchEvents]);

  const signOut = useCallback(async () => {
    try {
      await apiCalendar.handleSignoutClick();
      setIsSignedIn(false);
      dispatch(setEvents([]));
    } catch (e) {
      console.error('Google Sign Out error:', e);
    }
  }, [dispatch]);

  return { isSignedIn, signIn, signOut };
}
