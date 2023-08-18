import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
--header-height: 100px;

// light Mode
--font-color-bright-background: black;
--primary-background-color: #293241;
--seconary-background-color:#f3f6f8;

//Dark Mode
--font-color-darkmode: white;
--background-color-darkmode: rgba(41, 50, 65, 0.90);
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  


  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.body};
    font-family: system-ui;

  }
  }
`;
