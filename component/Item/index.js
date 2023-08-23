import {
  StyledDetailSection,
  StyledHeading,
} from "../GroceriesList/GroceriesList.styled";
import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining";
import {
  StyledButtonLink,
  StyledContainer,
  StyledDiv,
  StyledList,
  StyledRemainingDays,
} from "./Item.styled";
import styled from "styled-components";
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
      ? { color: "#000045", background: "#F31102", border: "none" }
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
            <p>Purchase Date: {grocerySelectedItem.purchasedDate}</p>
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

const StyledBody = styled.div`
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.body};
`;

const StyledEditButton = styled.button`
  background: ${(props) => props.theme.body};
  border: none;
  border-radius: 50px;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -4px;
  top: -22px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
  z-index: 10; 
}`;
