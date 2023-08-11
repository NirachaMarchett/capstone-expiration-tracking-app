import Link from "next/link";
import { styled } from "styled-components";

export const StyledButtonLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  font-size: 1rem;

  border: none;
  padding: 0.2rem;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 5px;
  }
`;

export const StyledDiv = styled.div`
  margin: 150px 20px 20px 20px;
`;

export const StyledContainer = styled.div`
  list-style-type: none;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 250px;
  border-radius: 15px;
  border: 0px;
  display: grid;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 5px;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 20px 20px 20px 20px;
  background-color: ${(props) => props.theme.body};
`;

export const StyledRemainingDays = styled.p`
  font-size: 1rem;
  background: white;
  color: black;
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
