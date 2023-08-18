import styled from "styled-components";

export const StyledParagraph = styled.p`
  margin: 0px 0px 0px 0px;
  width: 220px;
  font-size: 1rem;
  color: ${(props) => props.theme.filterFont};
  padding: 5px 5px 5px 5px;
  font-weight: bold;
`;

export const StyledDiv = styled.div`
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 45px 20px 20px 20px;
  position: relative;
  buttom: 20px;
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: ${(props) => props.theme.body};
  width: 80px;
  border-radius: 5px;
  padding: 5px;
  color: ${(props) => props.theme.filterFont};
`;
