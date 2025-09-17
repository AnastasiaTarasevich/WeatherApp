import { flexCenter } from '@styles/mixins';
import { css, styled } from 'styled-components';

export const AppMain = styled.section`
  ${({ theme }) => css`
    ${flexCenter};
    min-height: ${theme.sizes.full};
    margin: ${theme.margins.null} auto;
    flex-direction: column;
    padding: ${theme.paddings.s};
    text-align: center;
  `}
`;
