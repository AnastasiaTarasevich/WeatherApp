import Cloudly from '@assets/icons/cloudlySun.svg';

import { WeatherItem } from '@components/WeatherItem';

import { Description, ImageStyled, StyledList, StyledWrapper } from './sytled';
export function WeatherList() {
  return (
    <StyledWrapper>
      <ImageStyled src={Cloudly} />
      <Description>
        Today
        <span>2°</span>
      </Description>
      <StyledList>
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
      </StyledList>
    </StyledWrapper>
  );
}
