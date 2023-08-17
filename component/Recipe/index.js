import HeartIcon from "../../assets/heart.svg";
import {
  StyledAnchor,
  StyledContainer,
  StyledHeading,
  StyledImage,
  StyledLine,
  StyledParagraph,
  StyledFavoriteButton,
} from "./Recipe.styled";

export default function Recipe({ recipe, onToggleFavorite, isFavorite }) {
  return (
    <StyledContainer>
      <StyledFavoriteButton onClick={() => onToggleFavorite(recipe)}>
        <HeartIcon height={30} fill={`${isFavorite ? "#98c1d9" : "grey"}`} />
      </StyledFavoriteButton>
      <StyledImage
        src={recipe.images.SMALL.url}
        width={recipe.images.SMALL.width}
        height={recipe.images.SMALL.height}
        alt="Small Recipe"
      />
      <StyledHeading>{recipe.label}</StyledHeading>
      <StyledLine />
      <StyledParagraph>Time: {recipe.totalTime} mins</StyledParagraph>
      <StyledAnchor href={recipe.url}>
        {recipe.ingredients.length} Ingredients
      </StyledAnchor>
      <StyledAnchor href={recipe.url}>Instruction</StyledAnchor>
    </StyledContainer>
  );
}
