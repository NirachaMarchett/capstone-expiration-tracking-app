import Link from "next/link";
import { styled } from "styled-components";

export const StyledButtonLink = styled(Link)`
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

export const StyledLinkContainer = styled.div`
  margin: 100px 0px 0px 20px;
`;

export const StyledListContainer = styled(Link)`
  list-style-type: none;
  background-color: #f3f6f8;
  height: 250px;
  border-radius: 15px;
  border: 0px;
  display: grid;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 5px;
  position: relative;
  text-decoration: none;
  color: black;
`;
