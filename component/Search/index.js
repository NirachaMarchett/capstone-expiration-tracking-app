import {
  StyledButton,
  StyledDiv,
  StyledFormField,
  StyledLabel,
  StyledInput,
} from "./Search.styled";

export default function Search({ query, setQuery }) {
  const handleCancelClick = () => {
    setQuery("");
  };
  return (
    <>
      <StyledFormField>
        <StyledLabel htmlFor="searchTerm">
          Enter ingredients you’d like to use:
        </StyledLabel>
        <StyledDiv>
          <StyledInput
            value={query}
            onInput={(event) => setQuery(event.target.value)}
            name="searchTerm"
            id="searchTerm"
            placeholder=" e.g. spinach, cheese, tomato,..."
          />
          <StyledButton type="button" onClick={handleCancelClick}>
            Cancel
          </StyledButton>
        </StyledDiv>
      </StyledFormField>
    </>
  );
}
