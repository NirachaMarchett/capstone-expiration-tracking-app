import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
--header-height: 150px;

// light Mode
--font-color-bright-background: black;
--primary-background-color: #293241;
--seconary-background-color:#f3f6f8;

//Dark Mode
--font-color-dark-background: white;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: white;
    font-family: system-ui;
  }
`;
