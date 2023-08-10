import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 20px 20px 100px 20px;
`;

export const StyledListContainer = styled(Link)`
  list-style-type: none;
  background-color: #f3f6f8;
  border-radius: 15px;
  border: 0px;
  display: grid;
  margin-top: 25px;
  padding: 5px;
  position: relative;
  text-decoration: none;
  color: black;
`;

export const StyledHeading = styled.h2`
  font-size: 3rem;
  margin: 30px 10px 40px 10px;
  background: white;
  border: 2px solid #293241;
  border-radius: 100px;
  height: 70px;
  width: 70px;
  text-align: center;
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
  top: -18%;
`;

export const StyledDetailSection = styled.section`
  position: absolute;
  right: 10%;
  top: 10%;
`;
