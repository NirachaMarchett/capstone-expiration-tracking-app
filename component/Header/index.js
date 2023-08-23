import styled from "styled-components";
import Switch from "../Switch";

export default function Header({ onToggle }) {
  return (
    <StyledHeader>
      <StyledHeading>⏳Expiry Track</StyledHeading>
      <StyledEmojis> 🥭🍑🍅🥩🍖🥑🍣🍩🍰</StyledEmojis>
      <Switch onToggle={onToggle} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  font-size: 0.5rem;
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0px;

  background-color: ${(props) => props.theme.body};
  z-index: 999;
`;

const StyledHeading = styled.h1`
  margin-top: 30px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.headerFont};
`;

const StyledEmojis = styled.p`
  margin: 0px;
  display: flex;
  justify-content: center;
`;
