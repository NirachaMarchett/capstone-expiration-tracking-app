import React from "react";
import AddGroceryItemForm from "@/component/Form";

export default function AddItemPage({
  onAddItem,
  onOpenSubmitMessageModal,
  closeSubmitMessageModal,
  openModal = { openModal },
}) {
  return (
    <>
      <AddGroceryItemForm
        onAddItem={onAddItem}
        onOpenSubmitMessageModal={onOpenSubmitMessageModal}
        closeSubmitMessageModal={closeSubmitMessageModal}
        openModal={openModal}
      />
    </>
  );
}
