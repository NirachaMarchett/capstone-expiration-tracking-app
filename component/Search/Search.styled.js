import styled from "styled-components";

export const StyledFormField = styled.form`
  margin: 100px 0px 0px 0px;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  flex-direction: column;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.recipeSearchFormColor};
  color: ${(props) => props.theme.fontColor};
  border-radius: 0px 0px 30px 30px;
  position: fixed;
  z-index: 999;
`;

export const StyledDiv = styled.div`
  margin: 0px 20px 20px 20px;
  display: flex;
  gap: 5px;
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
  margin-top: 45px;
  width: 300px;
  height: 40px;
  padding: 10px;
  background-color: ${(props) => props.theme.searchBackground};
  color: ${(props) => props.theme.searchInput};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  border: none;
`;

export const StyledButton = styled.button`
margin-top: 45px;
background-color: ${(props) => props.theme.searchBackground};
color: ${(props) => props.theme.searchInput};
border-radius: 30px;
border: none;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
width: 100px;
height: 40px;
font-size: 1rem;

&:hover {
  background-color: white;
`;
