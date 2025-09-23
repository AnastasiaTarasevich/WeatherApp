import { useSelector } from 'react-redux';

import { RootState } from '@store/store';

import { Task } from '@components/Task';

import { formatDate } from '../../../utils/formatDate';

export function TaskList() {
  const events = useSelector((state: RootState) => state.auth.events);

  if (!events.length) return <p>No events loaded.</p>;

  return (
    <ul>
      {events.map((event: any) => (
        <Task
          key={event.id}
          time={formatDate(event.start.dateTime || event.start.date)}
          description={event.summary || 'No description'}
        />
      ))}
    </ul>
  );
}
