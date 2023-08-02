import { groceries } from "@/resources/groceries.js";
import {
  StyledDetailSection,
  StyledHeading,
  StyledList,
  StyledListContainer,
  StyledRemainingDays,
} from "./GroceriesList.styled.js";

export default function GroceriesList() {
  const calculateDaysRemaining = (expirationDate) => {
    const today = new Date();
    const expiringDate = new Date(expirationDate);

    const timeDifference = Math.abs(expiringDate - today);
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
  };

  return (
    <StyledList>
      {groceries.map((grocery) => {
        return (
          <>
            <StyledListContainer key={grocery.id}>
              <StyledHeading className="itemEmoji">
                {grocery.emoji}
              </StyledHeading>

              <StyledDetailSection>
                <p className="itemName">Name: {grocery.name}</p>
                <p className="itemPurchasedDate">
                  Purchased Date: {grocery.purchasedDate}
                </p>
                <p className="itemExpirationDate">
                  Expiration Date: {grocery.expirationDate}
                </p>
              </StyledDetailSection>

              <StyledRemainingDays className="remainingDays">
                Expire in: {calculateDaysRemaining(grocery.expirationDate)} days
              </StyledRemainingDays>
            </StyledListContainer>
          </>
        );
      })}
    </StyledList>
  );
}
