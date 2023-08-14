import { useState } from "react";
import styled from "styled-components";
import {
  StyledButton,
  StyledDiv,
  StyledFormField,
  StyledLabel,
  StyledInput,
} from "./Search.styled";

export default function Search() {
  return (
    <>
      <StyledFormField>
        <StyledLabel htmlFor="searchTerm">
          Enter ingredients you’d like to use:
        </StyledLabel>
        <StyledDiv>
          <StyledInput
            name="searchTerm"
            id="searchTerm"
            placeholder=" e.g. spinach, cheese, tomato,..."
          />
          <StyledButton>Search</StyledButton>
        </StyledDiv>
      </StyledFormField>
    </>
  );
}
