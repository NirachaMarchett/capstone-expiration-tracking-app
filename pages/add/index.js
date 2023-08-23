import React from "react";
import AddGroceryItemForm from "@/component/Form";
import styled from "styled-components";

export default function AddItemPage({
  onAddItem,
  onOpenSubmitMessageModal,
  closeSubmitMessageModal,
  openModal = { openModal },
}) {
  return (
    <PageContainer>
      <AddGroceryItemForm
        onAddItem={onAddItem}
        onOpenSubmitMessageModal={onOpenSubmitMessageModal}
        closeSubmitMessageModal={closeSubmitMessageModal}
        openModal={openModal}
      />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-y: auto;
`;
