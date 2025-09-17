import { flexBetween } from '@styles/mixins';
import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const StyledBanner = styled.div`
  backdrop-filter: blur(${theme.blur.xs});
  color: ${theme.colors.white};
  max-width: ${theme.sizes.xxxxxl};
  text-align: center;
  background-color: ${theme.colors.gray};
`;
export const BannerTitle = styled.h1`
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeight.xs};
  text-align: left;
  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
    margin-bottom: ${theme.margins.s};
    font-size: ${theme.fontSizes.xl};
  }
`;
export const StyledWrapper = styled.div`
  ${flexBetween};
  margin-bottom: ${theme.margins.m};
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledContainer = styled.main`
  padding: ${theme.paddings.l} ${theme.paddings.xxl};
  @media (max-width: ${theme.breakpoints.tabletL}) {
    padding: ${theme.paddings.l};
  }
  @media (max-width: ${theme.breakpoints.mobileL}) {
    padding: ${theme.paddings.xs};
  }
`;
