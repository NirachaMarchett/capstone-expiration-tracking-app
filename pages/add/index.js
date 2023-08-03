import React from "react";
import AddGroceryItemForm from "@/component/Form";

export default function AddItemPage({ onAddItem }) {
  return <AddGroceryItemForm onAddItem={onAddItem} />;
}
