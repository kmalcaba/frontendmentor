import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root {
    font-family: 'Public Sans', sans-serif;
    font-size: 18px;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.bg_primary}
  }
`;

export default GlobalStyles;
