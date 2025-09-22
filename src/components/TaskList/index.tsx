import { Task } from '@components/Task';

import * as S from './styled';

export function TaskList() {
  return (
    <S.ListStyle>
      <Task />
      <Task />
      <Task />
    </S.ListStyle>
  );
}
