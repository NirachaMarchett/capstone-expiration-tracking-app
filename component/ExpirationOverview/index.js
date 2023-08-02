import React from "react";
import { groceries } from "@/resources/groceries";
import {
  StyledDiv,
  StyledHeading,
  StyledOverviewSection,
  StyledRemainingCount,
} from "./ExpirationOverview.styled";

const filterByExpirationDate = (groceries, daysRemaining) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return groceries.filter((groceryItem) => {
    const expirationDate = new Date(groceryItem.expirationDate);
    expirationDate.setHours(0, 0, 0, 0);

    const timeDifference = expirationDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return remainingDays === daysRemaining;
  });
};

const GroceryCountByExpiration = () => {
  const todayCount = filterByExpirationDate(groceries, 0).length;
  const oneDayCount = filterByExpirationDate(groceries, 1).length;
  const twoDaysCount = filterByExpirationDate(groceries, 2).length;

  return (
    <StyledDiv>
      <div>
        <StyledRemainingCount>{todayCount}</StyledRemainingCount>
        <p>Expiring Today</p>
      </div>
      <div>
        <StyledRemainingCount>{oneDayCount}</StyledRemainingCount>
        <p>Expiring in 1 day</p>
      </div>
      <div>
        <StyledRemainingCount>{twoDaysCount}</StyledRemainingCount>
        <p>Expiring in 2 days</p>
      </div>
    </StyledDiv>
  );
};

export function ExpirationOverview() {
  return (
    <StyledOverviewSection>
      <StyledHeading>Items expiring soon. Eat me!</StyledHeading>
      <GroceryCountByExpiration />
    </StyledOverviewSection>
  );
}
