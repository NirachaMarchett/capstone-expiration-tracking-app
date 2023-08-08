import {
  StyledDetailSection,
  StyledHeading,
  StyledList,
  StyledListContainer,
  StyledRemainingDays,
} from "../GroceriesList/GroceriesList.styled";
import { groceries } from "@/resources/groceries.js";
import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining";
import Navigation from "../Navigation";

import { StyledButtonLink, StyledLinkContainer } from "./Item.styled";
import UpdateForm from "../UpdateForm";

export default function Item({ id }) {
  const grocerySelectedItem = groceries.find((item) => item.id === id);

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
          </StyledDetailSection>

          <StyledRemainingDays>
            Expire in:
            {calculateDaysRemaining(grocerySelectedItem.expirationDate)} days
          </StyledRemainingDays>
        </StyledListContainer>
      </StyledList>
      <UpdateForm defaultValues={grocerySelectedItem} />
      <Navigation />
    </>
  );
}
