import styled, { css } from "styled-components";
import Switch from "../Switch";
import { useRouter } from "next/router";

export default function Header({ onToggle }) {
  const router = useRouter();
  const activePath = router.pathname;
  const isHomepage = activePath === "/";
  const isRecipePage = activePath === "/recipe";

  return (
    <StyledHeader $isHomepage={isHomepage} $isRecipePage={isRecipePage}>
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

  ${(props) =>
    props.$isHomepage
      ? css`
          background-color: ${props.theme.backgroundColor};
        `
      : props.$isRecipePage
      ? css`
          background-color: ${props.theme.recipeSearchFormColor};
        `
      : css`
          background-color: ${props.theme.body};
        `};
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
