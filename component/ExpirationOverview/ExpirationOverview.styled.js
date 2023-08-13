import styled from "styled-components";

export const StyledOverviewSection = styled.section`
  margin: var(--header-height) 20px 20px 20px;
  background-color: #293241;
  border-radius: 15px;
  display: grid;
  padding: 0.5rem;
  gap: 5px;
  position: relative;
`;
export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0px;
  margin: 0px;
`;

export const StyledList = styled.li`
  background: white;
  border-radius: 10px;
  height: 130px;
  margin: 20px 20px 20px 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 15px;
  position: relative;
`;
export const StyledHeading = styled.h2`
  font-size: 1.5rem;
  margin: 20px 20px 20px 20px;
  color: var(--font-color-darkmode);
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
