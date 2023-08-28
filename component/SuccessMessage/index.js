import React from "react";
import Check from "../../assets/check.svg";
import {
  PageContainer,
  StyledDiv,
  StyledHeading,
  StyledMessage,
  StyledSpan,
  StyledButton,
} from "./SucccessMessage.styled";

export default function SubmitMessageModal({ closeSubmitMessageModal }) {
  return (
    <PageContainer>
      <StyledDiv>
        <StyledHeading>Sweet!</StyledHeading>
        <StyledMessage>New item successfully added to the list!</StyledMessage>
        <StyledSpan>
          <Check height={56} />
        </StyledSpan>
        <StyledButton type="button" onClick={closeSubmitMessageModal}>
          OK
        </StyledButton>
      </StyledDiv>
    </PageContainer>
  );
}
