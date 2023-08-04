import ExpirationOverview from "@/component/ExpirationOverview";
import FilterButton from "@/component/FilterButton";
import Link from "next/link";

export default function HomePage({ groceriesList }) {
  return (
    <>
      <ExpirationOverview />
      <FilterButton groceriesList={groceriesList} />
      <Link href="/add">Go to Add Item Page</Link>
    </>
  );
}
