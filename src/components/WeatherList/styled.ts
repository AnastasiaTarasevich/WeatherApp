import { blurBackground, flexColumn, responsiveTitle } from '@styles/mixins';
import { theme } from '@styles/theme';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  ${blurBackground};
  padding: ${theme.paddings.m} ${theme.paddings.l} ${theme.paddings.xl}
    ${theme.paddings.l};
  color: ${theme.colors.white};
  width: ${theme.sizes.full};
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${theme.gaps.xll};
  @media (max-width: ${theme.breakpoints.desktop}) {
    padding: ${theme.paddings.m} ${theme.paddings.m} ${theme.paddings.xl}
      ${theme.paddings.m};
    gap: ${theme.gaps.l};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    background-color: transparent;
    backdrop-filter: none;
    padding: ${theme.paddings.xxxxl} ${theme.paddings.xxxl} ${theme.paddings.xl}
      ${theme.paddings.xxxl};
  }
`;
export const StyledList = styled.ul`
  display: flex;
  gap: ${theme.gaps.xl};
  @media (max-width: ${theme.breakpoints.desktop}) {
    gap: ${theme.gaps.s};
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Description = styled.h2`
    ${flexColumn};
    gap: ${theme.gaps.s};
    ${responsiveTitle};
    @media (max-width: ${theme.breakpoints.tablet}) {
display:none;
}
}
`;
export const ImageStyled = styled.img`
  width: ${theme.sizes.xl};
  height: ${theme.sizes.xl};
  @media (max-width: ${theme.breakpoints.tabletL}) {
    width: ${theme.sizes.m};
    height: ${theme.sizes.m};
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;
