import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining";
import {
  StyledDetailSection,
  StyledHeading,
  StyledButtonLink,
  StyledContainer,
  StyledDiv,
  StyledList,
  StyledRemainingDays,
  StyledBody,
  StyledEditButton,
  Backdrop,
} from "./Item.styled";
import ArrowLeftIcon from "../../assets/arrow-left.svg";
import EditButton from "../../assets/edit.svg";
import Modal from "../Modal";

export default function Item({
  onChange,
  grocerySelectedItem,
  onDelete,
  onEdit,
  openModal,
  closeModal,
}) {
  // Check if grocerySelectedItem is undefined
  if (!grocerySelectedItem) {
    return;
  }
  const expirationDate = grocerySelectedItem.expirationDate;
  const daysRemaining = calculateDaysRemaining(expirationDate);
  const day = daysRemaining === 1 || daysRemaining === 0 ? "day" : "days";

  const remainingDaysStyle =
    daysRemaining < 0
      ? { color: "white", background: "#cf0000", border: "none" }
      : {} && daysRemaining === 0
      ? { color: "#c32e68", border: "solid 1px #c32e68" }
      : {};

  const ExpirationMessage =
    daysRemaining < 0
      ? `Expired: ${calculateDaysRemaining(expirationDate)} ${day}`
      : `Expires in: ${calculateDaysRemaining(expirationDate)} ${day}` &&
        daysRemaining === 0
      ? "Expiring Today"
      : `Expires in: ${calculateDaysRemaining(expirationDate)} ${day}`;

  return (
    <StyledBody>
      <StyledDiv>
        <StyledButtonLink href="/">
          <ArrowLeftIcon
            height={25}
            fill="#C32E68"
            style={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
            }}
          />
        </StyledButtonLink>
      </StyledDiv>
      <StyledList>
        <StyledContainer>
          <StyledHeading>{grocerySelectedItem.emoji}</StyledHeading>

          <StyledDetailSection>
            <p>Name: {grocerySelectedItem.name}</p>
            <p>Purchase Date: {grocerySelectedItem.purchaseDate}</p>
            <p>Expiration Date: {grocerySelectedItem.expirationDate}</p>
            <p>Amount: {grocerySelectedItem.amount}</p>
            <p>Category: {grocerySelectedItem.category}</p>
          </StyledDetailSection>

          <StyledRemainingDays style={remainingDaysStyle}>
            {ExpirationMessage}
          </StyledRemainingDays>
          <StyledEditButton type="button" onClick={() => onEdit()}>
            <EditButton height={20} />
          </StyledEditButton>
        </StyledContainer>
      </StyledList>
      {openModal && (
        <Modal
          defaultValues={grocerySelectedItem}
          closeModal={closeModal}
          onChange={onChange}
          onDelete={onDelete}
        />
      )}
      {openModal && <Backdrop />}
    </StyledBody>
  );
}
