import styled from "styled-components";

export const StyledOverviewSection = styled.section`
  margin: var(--header-height) 0px 0px 0px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 0px 0px 50px 50px;
  display: grid;
  padding: 0.5rem;
  gap: 5px;
  position: relative;
  height: 230px;
`;
export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0px;
  margin: 0px 0px 0px 0px;
`;

export const StyledList = styled.li`
  background: white;
  border-radius: 10px;
  height: 150px;
  margin: 20px 20px 20px 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 15px;
  position: relative;
`;
export const StyledHeading = styled.h2`
  font-size: 1rem;
  margin: 0px 0px 0px 0px;
  color: ${(props) => props.theme.headerFont};
  text-align: center;
`;

export const StyledRemainingCount = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: var(--font-color-bright-background);
  margin: 0;
  margin-top: 15px;
`;

export const StyledDiv = styled.div`
  padding: 1rem;
`;
