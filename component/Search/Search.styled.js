import styled from "styled-components";

export const StyledFormField = styled.form`
  margin: 120px 0px 0px 0px;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

export const StyledDiv = styled.div`
  margin: 0px 20px 20px 20px;
  display: flex;
  gap: 10px;
  display: flex;
  justify-content: center;
`;
export const StyledLabel = styled.label`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.filterFont};
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  width: 300px;
  height: 40px;
  padding: 10px;
  background-color: ${(props) => props.theme.searchBackground};
  color: ${(props) => props.theme.searchInput};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: none;
`;

export const StyledButton = styled.button`
background-color: ${(props) => props.theme.searchBackground};
color: ${(props) => props.theme.searchInput};
border-radius: 30px;
border: none;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
width: 100px;
height: 40px;
font-size: 1rem;

&:hover {
  background-color: white;
`;
