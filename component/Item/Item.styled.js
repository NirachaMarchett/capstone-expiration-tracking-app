import Link from "next/link";
import { styled } from "styled-components";

export const StyledButtonLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color-bright-background);
  font-size: 1rem;
  background-color: none;
  border: none;
  padding: 0.5rem;

  &:hover {
    background-color: #f3f6f8;
  }
`;

export const StyledDiv = styled.div`
  margin: 100px 0px 0px 20px;
`;

export const StyledContainer = styled.div`
  list-style-type: none;
  background-color: var(--seconary-background-color);
  height: 250px;
  border-radius: 15px;
  border: 0px;
  display: grid;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 5px;
  position: relative;
  text-decoration: none;
  color: var(--font-color-bright-background);
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 20px 20px 20px 20px;
`;

export const StyledRemainingDays = styled.p`
  font-size: 1rem;
  background: white;
  border: 2px solid #003b4a;
  border-radius: 20px;
  height: 30px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2%;
  top: -12%;
`;
