import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
--header-height: 100px;

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
