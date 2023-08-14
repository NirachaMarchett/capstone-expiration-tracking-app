import Search from "@/component/Search";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Recipe from "@/component/Recipe";

const app_id = "7c34a514";
const app_key = "354397600a1db4ed480401dd1a84bc1e";

export default function RecipePage() {
  const [rescipes, setRescipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}&ingr=1-5&diet=balanced&calories=100-300`;
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const data = await response.json();
        setRescipes(data.hits);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (query) {
      fetchRecipes();
    } else {
      setRescipes([]); // Clear the recipes list when the query is empty
    }
  }, [query]);

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      <StyledHeading>Here are some ideas </StyledHeading>
      <StyledGrid>
        {rescipes.map((recipe) => (
          <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />
        ))}
      </StyledGrid>
    </>
  );
}

const StyledGrid = styled.div`
margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
`;

const StyledHeading = styled.h2`
  margin: 0px 0px 0px 20px;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;
