import { React, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { images } from "@/next.config";
import Recipe from "@/component/Recipe";

export default function FavoritePage({ recipe }) {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Retrieve all items from local storage
    const allItems = Object.entries(localStorage);
    // Filter and get the favorite recipes
    const favoriteRecipes = allItems.filter(
      ([key, value]) => key.startsWith("favorite_") && value === "true"
    );
    // Extract the recipe labels from the keys
    const favoriteRecipeLabels = favoriteRecipes.map(([key]) =>
      key.replace("favorite_", "")
    );

    setFavoriteRecipes(favoriteRecipeLabels);
  }, []);

  const handleUnfavorite = (label) => {
    localStorage.removeItem(`favorite_${label}`);
    setFavoriteRecipes((prevFavorites) =>
      prevFavorites.filter((favLabel) => favLabel !== label)
    );
  };

  return (
    <StyledDiv>
      <StyledHeading>
        Your Favorite Recipes ({favoriteRecipes.length})
      </StyledHeading>
      <StyledList>
        {favoriteRecipes.map((label, index) => (
          <li key={index}>
            <StyledListContainer>
              <StyledUnFavoriteButton onClick={() => handleUnfavorite(label)}>
                <StyledSpan>✖️</StyledSpan>
              </StyledUnFavoriteButton>
              <div>
                <Image alt="Small image" src={recipe.images.SMALL.url} />
              </div>
              <StyledName>{label}</StyledName>
              <StyledAnchor href={recipe.url}>Instruction</StyledAnchor>
            </StyledListContainer>
          </li>
        ))}
      </StyledList>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
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
  top: 10px;
  right: 10px;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: -2px;
  left: 0px;
`;

const StyledName = styled.p`
  margin: 10px 10px 10px 200px;
  color: ${(props) => props.theme.fontColor};
`;

const StyledAnchor = styled.a`
  margin: 10px 10px 10px 200px;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  display: inline-block;
  border: 1px solid ${(props) => props.theme.fontColor};
  padding: 5px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
`;
