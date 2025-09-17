import { css } from 'styled-components';

import { theme } from './theme';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;
export const flexBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const blurBackground = css`
  backdrop-filter: blur(${theme.blur.s});
  background-color: ${theme.colors.pale};
`;

export const responsiveTitle = css`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.xs};

  @media (max-width: ${theme.breakpoints.tabletL}) {
    font-size: ${theme.fontSizes.m};
  }
`;
