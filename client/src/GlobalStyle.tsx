import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

#root {
  max-width: 900px;
  margin: 0 ;
  padding: 0 ;
  display: inline;
  height: 200vw;
}
a {
  color: #000;
  text-decoration: none;
}

`;

export default GlobalStyle;
