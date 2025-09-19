import Cloudly from '@assets/icons/cloudlySun.svg';

import { WeatherItem } from '@components/WeatherItem';

import * as S from './styled';

export function WeatherList() {
  return (
    <S.StyledWrapper>
      <S.ImageStyled src={Cloudly} />
      <S.Description>
        Today
        <span>2°</span>
      </S.Description>
      <S.StyledList>
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
      </S.StyledList>
    </S.StyledWrapper>
  );
}
