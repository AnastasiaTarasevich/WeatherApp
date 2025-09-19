import { flexBetween, flexColumn } from '@styles/mixins';
import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const StyledButtons = styled.div`
  display: flex;
  gap: ${theme.gaps.xxl};
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MainWrapperList = styled.div`
  ${flexBetween};
  align-items: end;
  margin-top: ${theme.margins.xs};
  @media (max-width: ${theme.breakpoints.tablet}) {
    align-items: start;
  }
`;
export const StyledDailyBtn = styled.div`
  display: flex;
  gap: ${theme.gaps.xxl};
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
export const StyledMobileButtons = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    ${flexColumn};
    gap: ${theme.gaps.xl};
  }
`;
