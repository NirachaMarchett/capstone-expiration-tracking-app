import styled from "styled-components";

export const StyledFormField = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-item: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin: 0px 20px 150px 20px;
`;
export const StyledEmojiInput = styled.input`
  font-size: 3rem;
  background: white;
  border: 2px solid #c32e68;
  border-radius: 100px;
  height: 70px;
  width: 70px;
  text-align: center;
  margin: auto;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: ${(props) => props.theme.updateFormFontColor};
`;

export const StyledInput = styled.input`
  padding-inline: 20px;
  padding-block: 10px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid;
  color: #c32e68;
`;

export const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledInputSection = styled.div`
  padding: 0.5rem;
  gap: 5px;
  margin-top: 10px;
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;
  gap: 0.5rem;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.updateFormFontColor};
`;

export const StyledSelectField = styled.div`
  display: flex;
  padding-inline: 20px;
  padding-block: 10px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid;
  flex-direction: column;
  background-color: white;
  color: #c32e68;
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: white;
  width: 260px;
  border-radius: 5px;
  padding: 5px;
  color: #c32e68;
  font-size: 1rem;
`;

export const StyledButtonSection = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.updateFormBackgroundColor};
`;

export const StyledSaveButton = styled.button`
  background-color: rgba(184, 219, 217, 1);
  border-radius: 5px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 115px;
  height: 34px;
  font-size: 1rem;

  &:hover {
    background-color: white;
  
`;

export const StyledDeleteButton = styled.button`
  background-color: #F4F5FC;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  width: 115px;
  height: 34px;
  font-size: 1rem;
  color: red;

  &:hover {
    background-color: white;
  
`;
