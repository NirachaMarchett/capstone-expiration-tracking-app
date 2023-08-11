import styled from "styled-components";

export const StyledFormField = styled.div`
  margin: var(--header-height) 0px 0px 0px;
  background-color: var(--primary-background-color);
  border-radius: 0px 0px 30px 30px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-item: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;
export const StyledEmojiInput = styled.input`
  font-size: 3rem;
  background: white;
  border: 2px solid #293241;
  border-radius: 100px;
  height: 70px;
  width: 70px;
  text-align: center;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: var(--font-color-darkmode);
`;

export const StyledInput = styled.input`
  padding-inline: 20px;
  padding-block: 10px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid;
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
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: center;
  gap: 0.5rem;
`;

export const StyledButton = styled.button`
  padding-inline: 20px;
  padding-block: 10px;
  display: flex;
  justify-content: center;
  width: 120px;
  marign-top: 25px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid;
  background: #98c1d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
  &:hover {
    background-color: white;
`;

export const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  margin: 10px 0px 0px 0px;
  color: var(--font-color-darkmode);
`;
