import { useState } from "react";

import GroceriesList from "../GroceriesList";
import { StyledDiv, StyledParagraph } from "./FilterButoon.styled";

export default function FilterButton() {
  const [filterValue, setFilterValue] = useState();

  const handleFilterChange = (event) => {
    setFilterValue(Number(event.target.value));
  };
  return (
    <>
      <StyledDiv>
        <StyledParagraph>All grocery items</StyledParagraph>
        <select value={filterValue} onChange={handleFilterChange}>
          <option value={-1}>All</option>
          <option value={9}>0 Remaining Day/Today</option>
          <option value={1}>1 Remaining Day</option>
          <option value={2}>2 Remaining Days</option>
          <option value={3}>3 Remaining Days</option>
          <option value={4}>4 Remaining Days</option>
          <option value={5}>5 Remaining Days</option>
          <option value={6}>6 Remaining Days</option>
          <option value={7}>7 Remaining Days</option>
          <option value={8}>More than 1 Week Remaining</option>
        </select>
      </StyledDiv>
      <GroceriesList filterValue={filterValue} />
    </>
  );
}
