import Link from "next/link";
import {
  StyledLink,
  StyledNavLinkAchor,
  StyledNavLinkText,
  StyledNavList,
} from "./Navigation.styled";

export default function Navigation() {
  return (
    <nav>
      <StyledNavList>
        <StyledLink>
          <StyledNavLinkAchor href="/">🏠</StyledNavLinkAchor>
          <StyledNavLinkText href="/">Home</StyledNavLinkText>
        </StyledLink>
        <StyledLink>
          <StyledNavLinkAchor href="/add">➕</StyledNavLinkAchor>
          <StyledNavLinkText href="/add">Add</StyledNavLinkText>
        </StyledLink>
      </StyledNavList>
    </nav>
  );
}
