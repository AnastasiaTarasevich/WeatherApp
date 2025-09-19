import { AuthButtons } from '@components/AuthButton';
import { Button } from '@components/Buttons';
import { TaskList } from '@components/TaskList';

import {
  MainWrapperList,
  StyledButtons,
  StyledDailyBtn,
  StyledMobileButtons,
} from './styled';

export function MainWrapper() {
  return (
    <>
      <StyledButtons>
        <AuthButtons />
      </StyledButtons>

      <MainWrapperList>
        <TaskList />
        <StyledDailyBtn>
          <Button>Daily</Button>
          <Button>Hourly</Button>
        </StyledDailyBtn>
        <StyledMobileButtons>
          <AuthButtons />
        </StyledMobileButtons>
      </MainWrapperList>
    </>
  );
}
