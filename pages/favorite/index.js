import Xcross from "../../assets/x-cross.svg";
import {
  StyledContainer,
  StyledHeading,
  StyledList,
  StyledListContainer,
  StyledUnFavoriteButton,
  StyledSpan,
  StyledImage,
  StyledName,
  StyledAnchor,
} from "./favorite.styled";

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
