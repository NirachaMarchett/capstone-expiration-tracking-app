import Link from "next/link";
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
import { styled } from "styled-components";

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
      <Navigation />
    </>
  );
}

const StyledButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  background-color: white;
  border: none;
  padding: 0.5rem;

  &:hover {
    background-color: pink;
  }
`;

const StyledLinkContainer = styled.div`
  margin: 100px 0px 0px 20px;
`;
