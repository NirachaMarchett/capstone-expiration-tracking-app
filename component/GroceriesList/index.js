import { groceries } from "@/resources/groceries.js";
import { StyledList } from "./GroceriesList.styled.js";
import { ItemContainer } from "./GroceriesList.styled.js";

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
            <li key={grocery.id}>
              <h2 className="itemEmoji">{grocery.emoji}</h2>

              <p className="itemName">Name: {grocery.name}</p>
              <p className="itemPurchasedDate">
                Purchased Date: {grocery.purchasedDate}
              </p>
              <p className="itemExpirationDate">
                Expiration Date: {grocery.expirationDate}
              </p>
              <p className="remainingDays">
                Expire in: {calculateDaysRemaining(grocery.expirationDate)} days
              </p>
            </li>
          </>
        );
      })}
    </StyledList>
  );
}
