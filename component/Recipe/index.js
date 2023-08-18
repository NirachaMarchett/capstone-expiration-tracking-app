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
import ArrowRightIcon from "../../assets/arrow-right.svg";

export default function Recipe({ recipe, onToggleFavorite, isFavorite }) {
  return (
    <StyledContainer>
      <StyledFavoriteButton onClick={() => onToggleFavorite(recipe)}>
        <HeartIcon
          height={30}
          fill={`${isFavorite ? "#C32E68" : "#cdcdcd"}`}
          style={{
            position: "absolute",
            bottom: "8px",
            right: "8px",
          }}
        />
      </StyledFavoriteButton>
      <StyledImage
        src={recipe.images.SMALL.url}
        width={recipe.images.SMALL.width}
        height={recipe.images.SMALL.height}
        alt="Small Recipe"
        unoptimized
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
