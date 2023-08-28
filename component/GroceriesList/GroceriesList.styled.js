import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 0px 20px 100px 20px;

  @media (max-width: 767px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 565px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 810px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1480px) {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const StyledListContainer = styled(Link)`
  list-style-type: none;
  background-color: ${(props) => props.theme.cardItemColor};
  border-radius: 15px;
  border: solid 2px ${(props) => props.theme.cardItemBorder};
  display: grid;
  margin-top: 25px;
  padding: 5px;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.cardFontColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

  }
`;

export const StyledHeading = styled.h2`
  font-size: 3rem;
  margin: 30px 10px 40px 10px;
  background: white;
  border: 2px solid #c8cec2;
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
  color: black;
`;

export const StyledDetailSection = styled.section`
  position: absolute;
  margin: 10px 5px 10px 120px;
`;

export const StyledMessage = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
`;
export const StyledBody = styled.div`
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.body};
`;
