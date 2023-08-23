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
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const activePath = router.pathname;

  if (activePath === "/login") {
    return;
  }

  return (
    <nav>
      <StyledNavList>
        <StyledList>
          <StyledLink href="/">
            <StyledNavIcon>
              <Clock
                height={29}
                fill={activePath === "/" ? "#c32e68" : "#d6d6d6"}
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
                fill={activePath === "/add" ? "#C32E68" : "#d6d6d6"}
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
                fill={activePath === "/recipe" ? "#C32E68" : "#d6d6d6"}
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
                fill={activePath === "/favorite" ? "#C32E68" : "#d6d6d6"}
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
