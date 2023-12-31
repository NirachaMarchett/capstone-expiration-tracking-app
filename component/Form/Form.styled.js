import styled from "styled-components";

export const StyledFormField = styled.div`
  margin: var(--header-height) 0px 100px 0px;
  background-color: ${(props) => props.theme.formColor};
  border: solid 2px #eaeaeb;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
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
  color: ${(props) => props.theme.navFont};
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
  border: none;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
  
  &:hover {
    color: #c32e68;
`;

export const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  margin: 10px 0px 0px 0px;
  color: ${(props) => props.theme.headerFont};
`;

export const StyledFormContainer = styled.div`
  border: none;
  position: fixed;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  overflow-y: auto;
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
  z-index: 10; 
}`;
