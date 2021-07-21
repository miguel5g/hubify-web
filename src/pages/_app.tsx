import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/Global';
import Light from '../styles/themes/Light';
import Typography from '../styles/Typography';
import Elevations from '../styles/Elevations';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      theme={{ ...Light, typography: Typography, elevations: Elevations }}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
