import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: ${theme.sizes.xxl};
  height: ${theme.sizes.xs};
  font-size: ${theme.fontSizes.l};
  border-radius: ${theme.borders.xs};
  color: ${theme.colors.white};
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: ${theme.sizes.l};
    font-size: ${theme.fontSizes.s};
  }
`;
