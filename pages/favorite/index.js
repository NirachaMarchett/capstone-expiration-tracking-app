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

  const handleUnfavorite = (label) => {
    localStorage.removeItem(`favorite_${label}`);
    setFavoriteRecipes((prevFavorites) =>
      prevFavorites.filter((favLabel) => favLabel !== label)
    );
  };

  return (
    <>
      <StyledHeading>Your Favorite Recipes</StyledHeading>
      <StyledList>
        {favoriteRecipes.map((label, url, images, index) => (
          <li key={index}>
            <StyledListContainer>
              <StyledUnFavoriteButton onClick={() => handleUnfavorite(label)}>
                <StyledSpan>✖️</StyledSpan>
              </StyledUnFavoriteButton>
              <div>
                <Image alt="Small image" scr={images.SMALL} />
              </div>
              <StyledName>{label}</StyledName>
              <StyledAnchor href={url}>Instruction</StyledAnchor>
            </StyledListContainer>
          </li>
        ))}
      </StyledList>
    </>
  );
}

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
