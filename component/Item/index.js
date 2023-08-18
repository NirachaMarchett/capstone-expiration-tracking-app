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
import UpdateForm from "../UpdateForm";
import { styled } from "styled-components";

export default function Item({ onChange, grocerySelectedItem, onDelete }) {
  // Check if grocerySelectedItem is undefined
  if (!grocerySelectedItem) {
    return;
  }
  return (
    <StyledBody>
      <StyledDiv>
        <StyledButtonLink href="/">Back</StyledButtonLink>
      </StyledDiv>
      <StyledList>
        <StyledContainer>
          <StyledHeading>{grocerySelectedItem.emoji}</StyledHeading>

          <StyledDetailSection>
            <p>Name: {grocerySelectedItem.name}</p>
            <p>Purchased Date: {grocerySelectedItem.purchasedDate}</p>
            <p>Expiration Date: {grocerySelectedItem.expirationDate}</p>
            <p>Amount: {grocerySelectedItem.amount}</p>
            <p>Category: {grocerySelectedItem.category}</p>
          </StyledDetailSection>

          <StyledRemainingDays>
            Expires in:
            {calculateDaysRemaining(grocerySelectedItem.expirationDate)} days
          </StyledRemainingDays>
        </StyledContainer>
      </StyledList>
      <UpdateForm
        defaultValues={grocerySelectedItem}
        onChange={onChange}
        onDelete={onDelete}
      />
    </StyledBody>
  );
}

const StyledBody = styled.div`
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.body};
`;
