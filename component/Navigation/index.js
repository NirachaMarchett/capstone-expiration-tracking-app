import {
  StyledLink,
  StyledList,
  StyledNavIcon,
  StyledNavList,
  StyledNavText,
} from "./Navigation.styled";
import Clock from "../../assets/clock-grey.svg";
import Plus from "../../assets/plus.svg";
import Fork from "../../assets/fork.svg";
import Favorite from "../../assets/heart.svg";

export default function Navigation() {
  return (
    <nav>
      <StyledNavList>
        <StyledList>
          <StyledLink href="/">
            <StyledNavIcon>
              <Clock
                height={29}
                fill="#d6d6d6"
                style={{
                  margin: "0px 0px 2px 0px",
                }}
              />
            </StyledNavIcon>
            <StyledNavText>Items</StyledNavText>
          </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/add">
            <StyledNavIcon>
              <Plus
                height={29}
                fill="#d6d6d6"
                style={{
                  margin: "0px 0px 2px 0px",
                }}
              />
            </StyledNavIcon>
            <StyledNavText>Add</StyledNavText>
          </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/recipe">
            <StyledNavIcon>
              <Fork
                height={29}
                fill="#d6d6d6"
                style={{
                  margin: "0px 0px 2px 0px",
                }}
              />
            </StyledNavIcon>
            <StyledNavText>Recipes</StyledNavText>
          </StyledLink>
        </StyledList>
        <StyledList>
          <StyledLink href="/favorite">
            <StyledNavIcon>
              <Favorite
                height={29}
                fill="#d6d6d6"
                style={{
                  margin: "0px 0px 2px 0px",
                }}
              />
            </StyledNavIcon>
            <StyledNavText>Favorites</StyledNavText>
          </StyledLink>
        </StyledList>
      </StyledNavList>
    </nav>
  );
}
