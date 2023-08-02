import { groceries } from "@/resources/groceries.js";
import {
  StyledDetailSection,
  StyledHeading,
  StyledList,
  StyledListContainer,
  StyledRemainingDays,
} from "./GroceriesList.styled.js";
import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining.js";

export default function GroceriesList() {
  return (
    <StyledList>
      {groceries.map(({ id, emoji, name, purchasedDate, expirationDate }) => {
        return (
          <StyledListContainer key={id}>
            <StyledHeading className="itemEmoji">{emoji}</StyledHeading>

            <StyledDetailSection>
              <p className="itemName">Name: {name}</p>
              <p className="itemPurchasedDate">
                Purchased Date: {purchasedDate}
              </p>
              <p className="itemExpirationDate">
                Expiration Date: {expirationDate}
              </p>
            </StyledDetailSection>

            <StyledRemainingDays className="remainingDays">
              Expire in: {calculateDaysRemaining(expirationDate)} days
            </StyledRemainingDays>
          </StyledListContainer>
        );
      })}
    </StyledList>
  );
}
