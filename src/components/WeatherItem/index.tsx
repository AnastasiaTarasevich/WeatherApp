import Cloud from '@assets/icons/cloudDefault.svg';

import * as S from './styled';

export function WeatherItem() {
  return (
    <S.StyledItem>
      <p>Monday</p>
      <S.WeatherImage src={Cloud} />
      <p>2°</p>
    </S.StyledItem>
  );
}
