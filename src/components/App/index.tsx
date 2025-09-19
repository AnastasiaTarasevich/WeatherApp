import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchLocationRequest } from '@store/actions/geoPosition';
import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

import { Banner } from '@components/Banner';

import * as S from './styled';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationRequest());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <S.AppMain>
        <Banner />
      </S.AppMain>
    </ThemeProvider>
  );
}

export default App;
