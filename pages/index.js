import ExpirationOverview from "@/component/ExpirationOverview";
import FilterButton from "@/component/FilterButton";
import SearchBar from "@/component/SearchBar";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function HomePage({ groceriesList }) {
  const [filteredGroceriesList, setFilteredGroceriesList] =
    useState(groceriesList);
  // Need to use useEffect for filteresGroceriesList because filterGroceriesList
  //has some changes depending on the groceriesList (i.g new items being added to the list)
  useEffect(() => {
    setFilteredGroceriesList(groceriesList);
  }, [groceriesList]);

  const handleSearch = (searchTerm) => {
    // convert search term to lowercase before (for better readability)
    const term = searchTerm.trim().toLowerCase();

    //since if (searchTerm.trim() === "" should check if the search bar is empty, can just check truthy falsy value
    if (!term) {
      setFilteredGroceriesList(groceriesList);
      return;
    }
    // List filteredList
    const filteredList = groceriesList.filter((item) =>
      item.name.toLowerCase().includes(term)
    );

    setFilteredGroceriesList(filteredList);
  };

  return (
    <StyledBody>
      <ExpirationOverview groceriesList={filteredGroceriesList} />
      <SearchBar onSearch={handleSearch} />
      <FilterButton groceriesList={filteredGroceriesList} />
    </StyledBody>
  );
}

const StyledBody = styled.div`
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.body};
`;
//Old solution
// const handleSearch = (searchTerm) => {
//   if (searchTerm.trim() === "") {
//     setFilteredGroceriesList(groceriesList);
//   } else {
//     const filteredList = groceriesList.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredGroceriesList(filteredList);
//   }
// };
