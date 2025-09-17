import { flexCenter } from '@styles/mixins';
import { theme } from '@styles/theme';
import styled from 'styled-components';

export const StyledItem = styled.li`
  ${flexCenter};
  flex-direction: column;
  @media (max-width: ${theme.breakpoints.tabletL}) {
    font-size: ${theme.fontSizes.xs};
  }
`;
export const WeatherImage = styled.img`
  @media (max-width: ${theme.breakpoints.tabletL}) {
    width: ${theme.sizes.s};
    heigth: ${theme.sizes.s};
  }
`;
