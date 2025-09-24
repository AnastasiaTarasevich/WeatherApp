import * as S from './styled';

interface TaskProps {
  time: string;
  description: string;
}

export function Task({ time, description }: TaskProps) {
  return (
    <S.StyledItem>
      <S.Time>{time}</S.Time>
      <S.Description>{description}</S.Description>
    </S.StyledItem>
  );
}
