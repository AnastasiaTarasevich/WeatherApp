import { AuthButtons } from '@components/AuthButton';
import { Button } from '@components/Buttons';
import { TaskList } from '@components/TaskList';

import * as S from './styled';

export function MainWrapper() {
  return (
    <>
      <S.StyledButtons>
        <AuthButtons />
      </S.StyledButtons>

      <S.MainWrapperList>
        <TaskList />
        <S.StyledDailyBtn>
          <Button>Daily</Button>
          <Button>Hourly</Button>
        </S.StyledDailyBtn>
        <S.StyledMobileButtons>
          <AuthButtons />
        </S.StyledMobileButtons>
      </S.MainWrapperList>
    </>
  );
}
