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
      </StyleDiv>
    </>
  );
}

const StyledButton = styled.button`
  border-radius: 25px;
  border: none;
  background-color: ${(props) => props.theme.searchBackground};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.searchInput};
  &:hover {
    color: #f31102;
  }
`;

const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 20px 20px 20px;
  gap: 5px;
`;

const StyledInput = styled.input`
  border: none;
  background-color: ${(props) => props.theme.searchBackground};
  color: ${(props) => props.theme.searchInput};
  width: 300px;
  height: 50px;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;

// const StyledLabel = styled.label`
//   color: ${(props) => props.theme.fontColor};
// `;
