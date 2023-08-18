import React from "react";
import {
  StyledList,
  StyledHeading,
  StyledOverviewSection,
  StyledRemainingCount,
  StyledUl,
  StyledDiv,
} from "./ExpirationOverview.styled";
import SearchBar from "../SearchBar";

const filterByExpirationDate = (groceriesList, daysRemaining) => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return groceriesList.filter((groceryItem) => {
    const expirationDate = new Date(groceryItem.expirationDate);
    expirationDate.setHours(0, 0, 0, 0);

    const timeDifference = expirationDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return remainingDays === daysRemaining;
  });
};

const GroceryCountByExpiration = ({ groceriesList }) => {
  const todayCount = filterByExpirationDate(groceriesList, 0).length;
  const oneDayCount = filterByExpirationDate(groceriesList, 1).length;
  const twoDaysCount = filterByExpirationDate(groceriesList, 2).length;

  return (
    <StyledUl>
      <StyledList>
        <StyledDiv>
          <StyledRemainingCount>{todayCount}</StyledRemainingCount>
          <p>Expiring Today</p>
        </StyledDiv>
        <StyledDiv>
          <StyledRemainingCount>{oneDayCount}</StyledRemainingCount>
          <p>Expiring in 1 day</p>
        </StyledDiv>
        <StyledDiv>
          <StyledRemainingCount>{twoDaysCount}</StyledRemainingCount>
          <p>Expiring in 2 days</p>
        </StyledDiv>
      </StyledList>
    </StyledUl>
  );
};

export default function ExpirationOverview({ groceriesList, handleSearch }) {
  return (
    <StyledOverviewSection>
      <StyledHeading>Items expiring soon. Eat me!</StyledHeading>
      <GroceryCountByExpiration groceriesList={groceriesList} />
      <SearchBar onSearch={handleSearch} />
    </StyledOverviewSection>
  );
}
