import {
  StyledDetailSection,
  StyledHeading,
  StyledList,
  StyledRemainingDays,
} from "../GroceriesList/GroceriesList.styled";
import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining";
import Navigation from "../Navigation";
import {
  StyledButtonLink,
  StyledLinkContainer,
  StyledListContainer,
} from "./Item.styled";
import UpdateForm from "../UpdateForm";

export default function Item({ id, onChange, groceriesList }) {
  const grocerySelectedItem = groceriesList.find((item) => item.id === id);

  return (
    <>
      <StyledLinkContainer>
        <StyledButtonLink href="/">⬅️ Back</StyledButtonLink>
      </StyledLinkContainer>
      <StyledList>
        <StyledListContainer href={`/${id}`}>
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
        </StyledListContainer>
      </StyledList>
      <UpdateForm defaultValues={grocerySelectedItem} onChange={onChange} />
      <Navigation />
    </>
  );
}
