import { MainWrapper } from '@components/MainWrapper';
import { SearchBar } from '@components/SearchBar';
import { WeatherList } from '@components/WeatherList';

import * as S from './styled';

export function Banner() {
  return (
    <S.StyledBanner>
      <S.StyledContainer>
        <S.StyledWrapper>
          <S.BannerTitle>
            12:20 PM
            <br />
            Monday, 2 February 2023
          </S.BannerTitle>
          <SearchBar />
        </S.StyledWrapper>
        <MainWrapper />
      </S.StyledContainer>

      <WeatherList />
    </S.StyledBanner>
  );
}
//добавить конструктор для запросов
//вынести апи в файлы
//сагу разделить на воркеры и вотчеры
//добавить колбек на тему
//env вынести в обьект
//расширение для styled-component
