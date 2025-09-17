import { flexCenter } from '@styles/mixins';
import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const Time = styled.div`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  width: ${theme.sizes.s};
  height: ${theme.sizes.xxs};
  font-size: ${theme.fontSizes.s};
  border-radius: ${theme.borders.s};
  ${flexCenter};
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.xs};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xxs};
  }
`;
export const Description = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xl};
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.m};
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSizes.xs};
  }
`;
export const StyledItem = styled.li`
  display: flex;
  gap: ${theme.gaps.l};
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.gaps.xs};
  }
`;
