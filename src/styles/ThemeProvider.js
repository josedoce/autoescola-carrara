import React from 'react';
import {amarelo} from './Cor';
import {ThemeProvider as StyledProvider} from 'styled-components';
//sera usado como global

//usando theme no storybook

export const ThemeNames = {
  light: 'light',
  ocean: 'ocean',
}
const light = { //definindo uma variação de cores
  colors: {
    primary: {
      main: amarelo,
      dark: '#c79100',
      light: '#fff350',
      text: '#212121'
    },
    danger: {
      main: '#ff3d00',
      dark: '#b22a00',
      text: '#212121',
    },
    border: "rgba(0,0,0,0.125)",
  }
}

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: '#2196f3',
        dark: '#1769aa',
        light: '#4dabf5',
        text: '#fff'
      }
    }
  }
}

const ThemeProvider = ( {theme, children} ) => (
  <StyledProvider theme={allThemes[theme]}>
    {children}
  </StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: 'light'
}

export default ThemeProvider;
