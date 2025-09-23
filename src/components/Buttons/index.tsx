import React from 'react';

import * as S from './styled';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
};
