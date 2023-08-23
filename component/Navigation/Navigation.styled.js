import styled from "styled-components";
import Link from "next/link";

export const StyledNavList = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  height: 80px;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.navBackground};
  padding: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 999;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.navFont};
`;

export const StyledNavIcon = styled.span`
  font-size: 2em;
  display: flex;
  justify-content: center;
  margin: 5px;
`;

export const StyledNavText = styled.p`
  font-size: 1em;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
`;

export const StyledList = styled.li`
  width: 50%;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 5px;
  }
`;
