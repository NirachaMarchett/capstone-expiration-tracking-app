import {
  StyledDetailSection,
  StyledHeading,
  StyledList,
  StyledRemainingDays,
} from "../GroceriesList/GroceriesList.styled";
import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining";
import Navigation from "../Navigation";
import { StyledButtonLink, StyledContainer, StyledDiv } from "./Item.styled";
import UpdateForm from "../UpdateForm";

export default function Item({ onChange, grocerySelectedItem }) {
  //Another approach
  // const grocerySelectedItem = groceriesList.find((item) => item.id === id);

  return (
    <>
      <StyledDiv>
        <StyledButtonLink href="/">⬅️ Back</StyledButtonLink>
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
      <UpdateForm defaultValues={grocerySelectedItem} onChange={onChange} />
      <Navigation />
    </>
  );
}
