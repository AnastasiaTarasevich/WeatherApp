import { useSelector } from 'react-redux';

import { RootState } from '@store/store';

import { Task } from '@components/Task';
import { formatDate } from '@utils/formatDate';

export function TaskList() {
  const events = useSelector((state: RootState) => state.auth.events);

  if (!events.length) return <p>No events loaded.</p>;

  return (
    <ul>
      {events.map(({ id, start, summary }) => (
        <Task
          key={id}
          time={formatDate(start.dateTime || start.date)}
          description={summary || 'No description'}
        />
      ))}
    </ul>
  );
}
