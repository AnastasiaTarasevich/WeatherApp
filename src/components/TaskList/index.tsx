import { Task } from '@components/Task';

import { ListStyle } from './styled';

export function TaskList() {
  return (
    <ListStyle>
      <Task />
      <Task />
      <Task />
    </ListStyle>
  );
}
