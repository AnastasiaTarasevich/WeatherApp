import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

import { Banner } from '@components/Banner';

import { AppMain } from './styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppMain>
        <Banner />
      </AppMain>
    </ThemeProvider>
  );
}

export default App;
