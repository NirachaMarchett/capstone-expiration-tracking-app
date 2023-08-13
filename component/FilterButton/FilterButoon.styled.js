import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 0px 0px 0px 0px;
  width: 150px;
  font-size: 1rem;
  color: ${(props) => props.theme.fontColor};
  padding: 5px 5px 5px 0px;
`;

export const StyledDiv = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 20px 20px;
  position: relative;
  buttom: 20px;
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: ${(props) => props.theme.background};
  width: 80px;
  border-radius: 5px;
  padding: 5px;
  color: ${(props) => props.theme.fontColor};
`;
