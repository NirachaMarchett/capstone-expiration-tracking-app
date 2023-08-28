import { useState } from "react";
import {
  StyleFormContainer,
  StyledInput,
  StyledButton,
} from "./SearchBar.styled";

export default function SearchBar({ onSearch }) {
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchBarValue(searchTerm);
    onSearch(searchTerm);
  };
  const handleCancel = () => {
    setSearchBarValue("");
    onSearch("");
  };

  return (
    <>
      <StyleFormContainer>
        <form>
          <label htmlFor="searchTerm"></label>
          <StyledInput
            name="searchTerm"
            id="searchTerm"
            value={searchBarValue}
            onChange={handleInputChange}
            placeholder="  🔍  What are you looking for?"
          />
        </form>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </StyleFormContainer>
    </>
  );
}
