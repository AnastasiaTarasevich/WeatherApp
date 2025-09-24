import { ReactNode } from 'react';

import * as S from './styled';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
export function Button({ children }: ButtonProps) {
  return <S.StyledButton>{children}</S.StyledButton>;
}
