import { groceries } from "@/resources/groceries.js";
import {
  StyledDetailSection,
  StyledHeading,
  StyledList,
  StyledListContainer,
  StyledRemainingDays,
} from "./GroceriesList.styled.js";
import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining.js";

export default function GroceriesList({ filterValue }) {
  const filteredGroceriesList = groceries.filter((item) => {
    const currentDate = new Date();
    const expirationDate = new Date(item.expirationDate);
    const remainingDays = Math.ceil(
      (expirationDate - currentDate) / (1000 * 60 * 60 * 24)
    );

    if (!filterValue || filterValue === -1) {
      return (
        <StyledList>
          {groceries.map(
            ({ id, emoji, name, purchasedDate, expirationDate }) => (
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
            )
          )}
        </StyledList>
      );
    }

    if (filterValue === 8) {
      return remainingDays > 7;
    } else if (filterValue === 9) {
      return remainingDays === 0;
    } else {
      return remainingDays === filterValue;
    }
  });

  if (filteredGroceriesList.length === 0) {
    return <p>None</p>;
  }
  return (
    <StyledList>
      {filteredGroceriesList.map(
        ({ id, emoji, name, purchasedDate, expirationDate }) => {
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
        }
      )}
    </StyledList>
  );
}
