import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 10px;

}

*, *::after, *::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
}

a, button{
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;

}
`;
