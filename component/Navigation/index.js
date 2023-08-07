import {
  StyledLink,
  StyledList,
  StyledNavIcon,
  StyledNavList,
  StyledNavText,
} from "./Navigation.styled";

export default function Navigation() {
  return (
    <nav>
      <StyledNavList>
        <StyledList>
          <StyledLink href="/">
            <StyledNavIcon>🏠</StyledNavIcon>
            <StyledNavText>Home</StyledNavText>
          </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/add">
            <StyledNavIcon>➕</StyledNavIcon>
            <StyledNavText>Add</StyledNavText>
          </StyledLink>
        </StyledList>
      </StyledNavList>
    </nav>
  );
}
