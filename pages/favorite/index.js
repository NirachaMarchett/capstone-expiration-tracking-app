import { React } from "react";
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
              <StyledSpan>✖️</StyledSpan>
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
  margin-bottom: 10px;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 20px 20px 90px 20px;
`;

const StyledHeading = styled.h2`
  margin: 120px 0px 0px 20px;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
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
  background-color: ${(props) => props.theme.backgroundColor};
`;
const StyledUnFavoriteButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #293241;
  position: relative;
  position: absolute;
  top: -10px;
  right: 0px;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: -2px;
  left: -1px;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  max-width: 80px;
  max-height: 80px;
  position: absolute;
  top: 25px;
  left: 30px;
`;

const StyledName = styled.p`
  margin: 10px 10px 10px 150px;
  color: ${(props) => props.theme.fontColor};
`;

const StyledAnchor = styled.a`
  margin: 10px 10px 10px 150px;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  display: inline-block;
  border: 1px solid ${(props) => props.theme.fontColor};
  padding: 5px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
`;
