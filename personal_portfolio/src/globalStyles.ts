import { createGlobalStyle } from "styled-components";
import { Color } from "./enums";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Montserrat';
  }

  body {
    margin: 0;
    padding: 0%;
    background-color: ${Color.Gray200};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;