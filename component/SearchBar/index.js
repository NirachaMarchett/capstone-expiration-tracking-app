import { useState } from "react";
import styled from "styled-components";

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
      <StyleDiv>
        <form>
          <label htmlFor="searchTerm">Item Name: </label>
          <StyledInput
            name="searchTerm"
            id="searchTerm"
            value={searchBarValue}
            onChange={handleInputChange}
            placeholder=" What are you looking for?"
          />
        </form>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </StyleDiv>
    </>
  );
}

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 0px;

  &:hover {
    color: #f31102;
  }
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 20px 20px 20px;
  gap: 5px;
`;

const StyledInput = styled.input`
  border: solid 1px;
  background-color: white;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
`;
