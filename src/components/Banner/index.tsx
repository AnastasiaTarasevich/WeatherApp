import { MainWrapper } from '@components/MainWrapper';
import { SearchBar } from '@components/SearchBar';
import { WeatherList } from '@components/WeatherList';

import {
  BannerTitle,
  StyledBanner,
  StyledContainer,
  StyledWrapper,
} from './styled';

export function Banner() {
  return (
    <StyledBanner>
      <StyledContainer>
        <StyledWrapper>
          <BannerTitle>
            12:20 PM
            <br />
            Monday, 2 February 2023
          </BannerTitle>
          <SearchBar />
        </StyledWrapper>
        <MainWrapper />
      </StyledContainer>

      <WeatherList />
    </StyledBanner>
  );
}
