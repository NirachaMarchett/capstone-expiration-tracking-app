import React from "react";

import AddGroceryItemForm from "@/component/Form";
import Navigation from "@/component/Navigation";

export default function AddItemPage({ onAddItem }) {
  return (
    <>
      <AddGroceryItemForm onAddItem={onAddItem} />
      <Navigation />
    </>
  );
}
