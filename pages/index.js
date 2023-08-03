import ExpirationOverview from "@/component/ExpirationOverview";
import FilterButton from "@/component/FilterButton";

export default function HomePage({ groceries }) {
  return (
    <>
      <ExpirationOverview />
      <FilterButton groceries={groceries} />
    </>
  );
}
