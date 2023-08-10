import { styled } from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Hello Header</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: var(--header-height);
  top: 0px;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: white;
  z-index: 999;
`;
