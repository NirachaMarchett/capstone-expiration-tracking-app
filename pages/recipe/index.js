import Search from "@/component/Search";
import { useEffect, useState } from "react";
import Recipe from "@/component/Recipe";
import {
  StyledContainer,
  StyledHeading,
  StyledGrid,
  StyledMessage,
} from "./recipe.styled";

const app_id = "7c34a514";
const app_key = "354397600a1db4ed480401dd1a84bc1e";

export default function RecipePage({ favoriteRecipes, onToggleFavorite }) {
  const [recipes, setRescipes] = useState([]);
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

    let timerId;

    if (query) {
      timerId = setTimeout(fetchRecipes, 500);
    } else {
      setRescipes([]); // Clear the recipes list when the query is empty
    }
    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <StyledContainer>
      <Search query={query} setQuery={setQuery} />
      <StyledHeading>Here are some ideas </StyledHeading>
      <StyledGrid>
        {recipes.length > 0 ? (
          recipes
            .slice(0, 2)
            .map((recipe) => (
              <Recipe
                key={recipe.recipe.uri}
                recipe={recipe.recipe}
                isFavorite={favoriteRecipes.find(
                  (x) => x.label === recipe.recipe.label
                )}
                onToggleFavorite={onToggleFavorite}
              />
            ))
        ) : (
          <StyledMessage>No recipes found.</StyledMessage>
        )}
      </StyledGrid>
    </StyledContainer>
  );
}
