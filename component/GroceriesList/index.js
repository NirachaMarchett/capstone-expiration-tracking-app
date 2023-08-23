import styled from "styled-components";
import {
  StyledDetailSection,
  StyledHeading,
  StyledList,
  StyledListContainer,
  StyledRemainingDays,
} from "./GroceriesList.styled.js";
import { calculateDaysRemaining } from "@/resources/calculateDaysRemaining.js";
import ArrowRightIcon from "../../assets/arrow-right.svg";

export default function GroceriesList({ filterValue, groceriesList }) {
  if (!filterValue || filterValue === -1) {
    return (
      <StyledBody>
        <StyledList>
          {groceriesList.map(
            ({ id, emoji, name, purchasedDate, expirationDate, amount }) => {
              const daysRemaining = calculateDaysRemaining(expirationDate);
              const day = daysRemaining === 1 ? "day" : "days";

              const isExpired = daysRemaining === 1;
              const remainingDaysStyle = isExpired ? { color: "#c32e68" } : {};

              return (
                <li key={id}>
                  <StyledListContainer href={`/${id}`}>
                    <StyledHeading>{emoji}</StyledHeading>
                    <StyledDetailSection>
                      <p>Name: {name}</p>
                      <p>Purchased Date: {purchasedDate}</p>
                      <p>Amount: {amount}</p>
                    </StyledDetailSection>
                    <StyledRemainingDays style={remainingDaysStyle}>
                      Expires in: {calculateDaysRemaining(expirationDate)} {day}
                    </StyledRemainingDays>
                    <ArrowRightIcon
                      height={20}
                      fill="#C32E68"
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "15px",
                      }}
                    />
                  </StyledListContainer>
                </li>
              );
            }
          )}
        </StyledList>
      </StyledBody>
    );
  }
  const filteredGroceriesList = groceriesList.filter((item) => {
    const currentDate = new Date();
    const expirationDate = new Date(item.expirationDate);
    const remainingDays = Math.ceil(
      (expirationDate - currentDate) / (1000 * 60 * 60 * 24)
    );

    //If use code below, search bar will not work as intended
    // if (!filterValue || filterValue === -1) {
    //   return true;
    // }

    if (filterValue === 8) {
      return remainingDays > 7;
    } else if (filterValue === 9) {
      return remainingDays === 0;
    } else {
      return remainingDays === filterValue;
    }
  });

  if (filteredGroceriesList.length === 0) {
    return (
      <StyledBody>
        <StyledMessage>None</StyledMessage>
      </StyledBody>
    );
  }
  return (
    <StyledBody>
      <StyledList>
        {filteredGroceriesList.map(
          ({ id, emoji, name, purchasedDate, expirationDate, amount }) => {
            const daysRemaining = calculateDaysRemaining(expirationDate);
            const day = daysRemaining === 1 ? "day" : "days";

            const isExpired = daysRemaining === 1;
            const remainingDaysStyle = isExpired ? { color: "#c32e68" } : {};

            return (
              <li key={id}>
                <StyledListContainer href={`/${id}`}>
                  <StyledHeading>{emoji}</StyledHeading>

                  <StyledDetailSection>
                    <p>Name: {name}</p>
                    <p>Purchased Date: {purchasedDate}</p>
                    <p>Amount: {amount}</p>
                  </StyledDetailSection>

                  <StyledRemainingDays style={remainingDaysStyle}>
                    Expires in: {calculateDaysRemaining(expirationDate)} {day}
                  </StyledRemainingDays>
                </StyledListContainer>
              </li>
            );
          }
        )}
      </StyledList>
    </StyledBody>
  );
}

const StyledMessage = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;
const StyledBody = styled.div`
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.body};
`;
