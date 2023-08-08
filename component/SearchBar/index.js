import { useState } from "react";
import { styled } from "styled-components";

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
      <StyledForm>
        <label htmlFor="searchTerm">Item Name:</label>
        <input
          name="searchTerm"
          id="searchTerm"
          value={searchBarValue}
          onChange={handleInputChange}
          placeholder="What are you looking for?"
        />
      </StyledForm>
      <StyledButton onClick={handleCancel}>Cancel</StyledButton>
    </>
  );
}

const StyledForm = styled.form`
  margin: 0px 0px 0px 20px;
  position: relative;
`;

const StyledButton = styled.button`
  position: relative;
  position: absolute;
  right: 25px;
  top: 241px;
`;
