import { createGlobalStyle } from 'styled-components'

function getRandomColor() {
  return '#' + ((1 << 24) * Math.random() | 0).toString(16)
}

export const theme = {
  primary: '#0082ff',
  secondary: '#50c8a8',
  danger: '#c0392b',
  backgroundDark: '#212032',
  backgroundMedium: '#2a2c3f',
  backgroundLight: '#606074',
  white: '#FFF',
  radius: 5,
  getRandomColor: getRandomColor
}

export const GlobalStyle = createGlobalStyle`
   * , ::before, ::after {
        padding:0 ;
        margin: 0;
        box-sizing: border-box;        
    }

    body{
      font-family: sans-serif;
      background-color: ${theme.backgroundMedium};
    }
`
