import { groceries } from "@/resources/groceries.js";
import { StyledList } from "./GroceriesList.styled.js";
import { ItemContainer } from "./GroceriesList.styled.js";

export default function GroceriesList() {
  return (
    <>
      <StyledList>
        {groceries.map((grocery) => {
          return (
            <li key={grocery.id}>
              <h2 className="itemEmoji">{grocery.emoji}</h2>
              <p className="itemName">Name: {grocery.name}</p>
              <p className="itemPurchasedDate">
                Purchased Date: {grocery.purchasedDate}
              </p>
              <p className="itemExpirationDate">
                Expiration Date: {grocery.expirationDate}
              </p>
            </li>
          );
        })}
      </StyledList>
    </>
  );
}
