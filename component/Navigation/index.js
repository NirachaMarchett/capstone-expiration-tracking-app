import {
  StyledLink,
  StyledNavIcon,
  StyledNavList,
  StyledNavText,
} from "./Navigation.styled";

export default function Navigation() {
  return (
    <nav>
      <StyledNavList>
        <StyledLink href="/">
          <StyledNavIcon>🏠</StyledNavIcon>
          <StyledNavText>Home</StyledNavText>
        </StyledLink>
        <StyledLink href="/add">
          <StyledNavIcon>➕</StyledNavIcon>
          <StyledNavText>Add</StyledNavText>
        </StyledLink>
      </StyledNavList>
    </nav>
  );
}
