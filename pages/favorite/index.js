import { React, useEffect, useState } from "react";
import styled from "styled-components";
import HeartIcon from "../../assets/heart.svg";
import Image from "next/image";
import { images } from "@/next.config";

export default function FavoritePage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    // Retrieve all items from local storage
    const allItems = Object.entries(localStorage);
    // Filter and get the favorite recipes
    const favoriteRecipes = allItems.filter(
      ([key, value]) => key.startsWith("favorite_") && value === "true"
    );
    // Extract the recipe labels from the keys
    const favoriteRecipeLabels = favoriteRecipes.map(([key, value]) =>
      key.replace("favorite_", "")
    );

    setFavoriteRecipes(favoriteRecipeLabels);
  }, []);

  return (
    <>
      <StyledHeading>Your Favorite Recipes</StyledHeading>
      <ul>
        {favoriteRecipes.map((label, index) => (
          <StyledListContainer key={index}>
            <StyledFavoriteButton>
              <HeartIcon height={30} fill="red" />
            </StyledFavoriteButton>
            <StyledName>{label}</StyledName>
          </StyledListContainer>
        ))}
      </ul>
    </>
  );
}

const StyledHeading = styled.h2`
  margin: 120px 0px 0px 20px;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const StyledFavoriteButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 10px 10px 5px 10px;
  background-color: white;
  border: 2px solid #293241;
  position: absolute;
  top: -5px;
  right: 0px;
`;

const StyledListContainer = styled.li`
  margin: 20px 15px 0px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  padding: 10px;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const StyledName = styled.p`
  margin: 50px 10px 10px 200px;
  color: ${(props) => props.theme.fontColor};
  text-decoration: ;
`;
