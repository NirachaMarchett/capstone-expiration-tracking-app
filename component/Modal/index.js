import React from "react";
import UpdateForm from "../UpdateForm";

export default function Modal({
  defaultValues,
  onChange,
  onDelete,
  closeModal,
}) {
  return (
    <>
      <UpdateForm
        defaultValues={defaultValues}
        onChange={onChange}
        onDelete={onDelete}
        closeModal={closeModal}
      />
    </>
  );
}
