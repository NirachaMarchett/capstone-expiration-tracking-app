import React from "react";
import SubmitMessageModal from "../SuccessMessage";

export default function Modal({ closeSubmitMessageModal }) {
  return (
    <SubmitMessageModal closeSubmitMessageModal={closeSubmitMessageModal} />
  );
}
