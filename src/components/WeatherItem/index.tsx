import Cloud from '@assets/icons/cloudDefault.svg';

import { StyledItem, WeatherImage } from './styled';

export function WeatherItem() {
  return (
    <StyledItem>
      <p>Sunday</p>
      <WeatherImage src={Cloud} />
      <p>2°</p>
    </StyledItem>
  );
}
