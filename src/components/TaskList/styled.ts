import { flexColumn } from '@styles/mixins';
import { theme } from '@styles/theme';
import { styled } from 'styled-components';

export const ListStyle = styled.ul`
  ${flexColumn};
  gap: ${theme.gaps.m};
  max-width: ${theme.sizes.xxxxl};
`;
