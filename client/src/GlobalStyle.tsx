import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0
}

#root {
  max-width: 900px;
  margin: 0 ;
  padding: 0 ;
  display: inline;
  height: 200vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
a {
  color: #000;
  text-decoration: none;
}

`;

export default GlobalStyle;
