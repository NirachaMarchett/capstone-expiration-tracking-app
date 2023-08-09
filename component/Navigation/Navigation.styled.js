import styled from "styled-components";
import Link from "next/link";

export const StyledNavList = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 999;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledNavIcon = styled.span`
  font-size: 2em;
  display: flex;
  justify-content: center;
`;

export const StyledNavText = styled.p`
  font-size: 1em;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
`;

export const StyledList = styled.li`
  border: solid white;
  width: 50%;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: pink;
  }
`;
