import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

export const StyledDiv = styled.div`
  margin-top: -250px;
  width: 400px;
  border: 2px solid ${(props) => props.theme.submitMessageBGColor};
  padding: 10px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.submitMessageBGColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.85);
  border-radius: 2px;
  z-index: 20;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 10px 0px 0px 0px;
  color: ${(props) => props.theme.submitMessageFontColor};
`;

export const StyledMessage = styled.p`
  text-align: center;
  margin: 10px 0px 0px 0px;
  color: ${(props) => props.theme.submitMessageFontColor};
`;

export const StyledSpan = styled.span`
  text-align: center;
  margin: 20px 0px 0px 0px;
`;

export const StyledButton = styled.button`
  margin: 15px 20px 15px 20px;
  background-color: ${(props) => props.theme.formColor};
  border-radius: 5px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  width: 115px;
  height: 34px;
  font-size: 1rem;
`;
