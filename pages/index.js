import React from "react";
import GroceriesList from "@/component/GroceriesList";
import ExpirationOverview from "@/component/ExpirationOverview";
import FilterButton from "@/component/FilterButton";

export default function HomePage() {
  return (
    <>
      <ExpirationOverview />
      <FilterButton />
      {/* <GroceriesList /> */}
    </>
  );
}
