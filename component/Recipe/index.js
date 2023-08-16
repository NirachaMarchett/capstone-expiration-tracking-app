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
import { useState, useEffect } from "react";

export default function Recipe({ recipe }) {
  // console.log(recipe);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Load favorite status from local storage when component mounts
    const storedIsFavorite = localStorage.getItem(`favorite_${recipe.label}`);
    setIsFavorite(storedIsFavorite === "true");
  }, [recipe.label]);

  const toggleFavorite = () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);

    // Store favorite status in local storage
    localStorage.setItem(`favorite_${recipe.label}`, newIsFavorite.toString());
  };

  return (
    <StyledContainer>
      <StyledFavoriteButton onClick={toggleFavorite}>
        <HeartIcon height={30} fill={`${isFavorite ? "red" : "grey"}`} />
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
