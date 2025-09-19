import { flexColumn } from '@styles/mixins';
import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const StyledInput = styled.input`
  border-radius: ${theme.borders.xxs};
  border: none;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  padding: ${theme.paddings.xxxs} ${theme.paddings.xxs};
  width: ${theme.sizes.xxxl};
  height: ${theme.sizes.xs};
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: ${theme.sizes.xxl};
    height: ${theme.sizes.xxs};
  }
`;
export const StyledWrapper = styled.div`
  ${flexColumn};
  gap: ${theme.gaps.s};
  align-items: center;
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
