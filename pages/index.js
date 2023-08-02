import React from "react";
import GroceriesList from "@/component/GroceriesList";
import { ExpirationOverview } from "@/component/ExpirationOverview";

export default function HomePage() {
  return (
    <>
      <ExpirationOverview />
      <GroceriesList />
    </>
  );
}
