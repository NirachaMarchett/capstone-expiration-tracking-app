import Xcross from "../../assets/x-cross.svg";
import styled from "styled-components";
import Image from "next/image";

export default function FavoritePage({ favoriteRecipes, onToggleFavorite }) {
  return (
    <StyledContainer>
      <StyledHeading>
        Your Favorite Recipes ({favoriteRecipes.length})
      </StyledHeading>
      <StyledList>
        {favoriteRecipes.map((recipe) => (
          <StyledListContainer key={recipe.label}>
            <StyledUnFavoriteButton onClick={() => onToggleFavorite(recipe)}>
              <StyledSpan>
                <Xcross
                  height={25}
                  fill="#C32E68"
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "4px",
                  }}
                />
              </StyledSpan>
            </StyledUnFavoriteButton>
            <div>
              <StyledImage
                alt="Small image"
                src={recipe.images.SMALL.url}
                width={recipe.images.SMALL.width}
                height={recipe.images.SMALL.height}
              />
            </div>
            <StyledName>{recipe.label}</StyledName>
            <StyledAnchor href={recipe.url}>Instruction</StyledAnchor>
          </StyledListContainer>
        ))}
      </StyledList>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  overflow-x: hidden;
  height: 100%;
  height: 1200px;
  background-color: ${(props) => props.theme.body};
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 20px 10px 100px 10px;

  @media (max-width: 767px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 810px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1480px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }
`;

const StyledHeading = styled.h2`
  margin: 120px 0px 0px 20px;
  width: 100%;
  background-color: none;
  color: ${(props) => props.theme.cardFontColor};
`;

const StyledListContainer = styled.li`
  position: relative;
  margin: 20px 15px 0px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.recipeContainerColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;
const StyledUnFavoriteButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #ffffff;
  position: relative;
  position: absolute;
  top: -10px;
  right: 0px;
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: -2px;
  left: -1px;
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
  max-width: 80px;
  max-height: 80px;
  position: absolute;
  top: 25px;
  left: 30px;
`;

export const StyledName = styled.p`
  margin: 10px 10px 10px 150px;
  color: ${(props) => props.theme.cardFontColor};
`;

export const StyledAnchor = styled.a`
  margin: 10px 10px 10px 150px;
  text-decoration: none;
  color: ${(props) => props.theme.cardFontColor};
  display: inline-block;
  border: 1px solid ${(props) => props.theme.cardFontColor};
  padding: 5px 10px;
  background-color: ${(props) => props.theme.body};
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;
