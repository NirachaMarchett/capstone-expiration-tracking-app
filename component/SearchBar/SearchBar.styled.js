import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 25px;
  border: none;
  background-color: ${(props) => props.theme.searchBackground};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.searchInput};
  &:hover {
    color: #f31102;
  }
`;

export const StyleFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 20px 20px 20px;
  gap: 5px;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.searchBackground};
  color: ${(props) => props.theme.searchInput};
  width: 300px;
  height: 50px;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;
