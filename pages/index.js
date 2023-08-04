import ExpirationOverview from "@/component/ExpirationOverview";
import FilterButton from "@/component/FilterButton";

export default function HomePage({ groceriesList }) {
  return (
    <>
      <ExpirationOverview />
      <FilterButton groceriesList={groceriesList} />
    </>
  );
}

// { groceriesList }
// groceriesList={groceriesList}
