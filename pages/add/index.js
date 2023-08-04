import React from "react";
import { useState } from "react";
import AddGroceryItemForm from "@/component/Form";
import { groceries } from "@/resources/groceries";

export default function AddItemPage({ onAddItem }) {
  return <AddGroceryItemForm onAddItem={onAddItem} />;
}

// const [groceriesList, setGroceriesList] = useState([groceries]);
// const handleAddItem = (newItem) => {
//   setGroceriesList([...groceriesList, newItem]);
// };
