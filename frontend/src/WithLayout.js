import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';

import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './Theme/shadows';
import palette from './Theme/palette';

import palettes from './common/paletteTypes';
import AOS from 'aos';
const getTheme = (mode, paletteType) =>
  responsiveFontSizes(
    createTheme({
      palette: palette(mode, paletteType),
      layout: {
        contentWidth: 1236,
      },
      shadows: shadows(mode),
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            label: {
              fontWeight: 600,
            },
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
      },
    }),
  );
export const useDarkMode = () => {
  const [themeMode, setTheme] = useState('light');
  const [paletteType, setPalette] = useState(palettes[0]);
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(mode);
  };

  const setThemePalette = (type = 'orange') => {
    const palette = palettes.indexOf(type) === -1 ? 'orange' : type;
    window.localStorage.setItem('themePalette', palette);
    setPalette(palette);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    const localPalette = window.localStorage.getItem('themePalette');
    localPalette ? setPalette(localPalette) : setThemePalette('green');
    setMountedComponent(true);
  }, []);

  return [
    themeMode,
    themeToggler,
    paletteType,
    setThemePalette,
    mountedComponent,
  ];
};

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [
    themeMode,
    themeToggler,
    paletteType,
    setThemePalette,
    mountedComponent,
  ] = useDarkMode();

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode, paletteType]);

  return (
    <ThemeProvider theme={getTheme(themeMode, paletteType)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>
        <Layout
          themeMode={themeMode}
          themeToggler={themeToggler}
          paletteType={paletteType}
          setThemePalette={setThemePalette}
        >
          <Component
            themeMode={themeMode}
            paletteType={paletteType}
            {...rest}
          />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}

WithLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};
