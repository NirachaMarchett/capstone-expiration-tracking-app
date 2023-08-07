import styled from "styled-components";
import Link from "next/link";
import css from "styled-jsx/css";

export const StyledNavList = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 999;
`;

export const StyledNavLinkAchor = styled(Link)`
  font-size: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const StyledNavLinkText = styled(Link)`
  font-size: 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const StyledLink = styled.li`
  border: solid white;
  width: 50%;

  &:hover {
    background-color: pink;
  }
`;
