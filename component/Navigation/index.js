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
            <StyledNavIcon>⏳</StyledNavIcon>
            <StyledNavText>Items</StyledNavText>
          </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/add">
            <StyledNavIcon>➕</StyledNavIcon>
            <StyledNavText>Add</StyledNavText>
          </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/recipe">
            <StyledNavIcon>🥘</StyledNavIcon>
            <StyledNavText>Recipes</StyledNavText>
          </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/favorite">
            <StyledNavIcon>❤️</StyledNavIcon>
            <StyledNavText>Favorites</StyledNavText>
          </StyledLink>
        </StyledList>
      </StyledNavList>
    </nav>
  );
}
