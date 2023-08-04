import ExpirationOverview from "@/component/ExpirationOverview";
import FilterButton from "@/component/FilterButton";
import SearchBar from "@/component/SearchBar";
import Link from "next/link";
import { useState } from "react";

export default function HomePage({ groceriesList }) {
  const [filteredGroceriesList, setFilteredGroceriesList] =
    useState(groceriesList);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredGroceriesList(groceriesList);
    } else {
      const filteredList = groceriesList.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGroceriesList(filteredList);
    }
  };
  return (
    <>
      <ExpirationOverview />
      <SearchBar onSearch={handleSearch} />
      <FilterButton groceriesList={filteredGroceriesList} />
      <Link href="/add">Go to Add Item Page</Link>
    </>
  );
}
