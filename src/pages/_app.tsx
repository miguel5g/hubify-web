import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';

import { ProjectContextProvider } from '../contexts/ProjectContext';

import { GlobalStyles } from '../styles/Global';
import Light from '../styles/themes/Light';
import Typography from '../styles/Typography';
import Elevations from '../styles/Elevations';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      theme={{ ...Light, typography: Typography, elevations: Elevations }}
    >
      <ProjectContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <Toaster />
      </ProjectContextProvider>
    </ThemeProvider>
  );
};

export default App;
