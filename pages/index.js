import ExpirationOverview from "@/component/ExpirationOverview";
import FilterButton from "@/component/FilterButton";
import Navigation from "@/component/Navigation";
import SearchBar from "@/component/SearchBar";
import Link from "next/link";
import { useState } from "react";

export default function HomePage({ groceriesList }) {
  const [filteredGroceriesList, setFilteredGroceriesList] =
    useState(groceriesList);

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
    <>
      <ExpirationOverview />
      <SearchBar onSearch={handleSearch} />
      <FilterButton groceriesList={filteredGroceriesList} />
      <Navigation />
    </>
  );
}

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
