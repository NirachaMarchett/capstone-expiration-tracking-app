import Link from "next/link";
import styled from "styled-components";

export const StyledButtonLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.filterFont};
  font-size: 1rem;
  margin: 10px 10px 10px 10px;
  position: relative;

  border: none;
  padding: 0.2rem;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 5px;
  }
`;

export const StyledDiv = styled.div`
  margin: 120px 20px 20px 20px;
`;

export const StyledContainer = styled.div`
  list-style-type: none;
  background-color: ${(props) => props.theme.cardSelectedItemColor};
  border: solid 2px ${(props) => props.theme.cardItemBorder};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  height: 250px;
  border-radius: 15px;
  display: grid;
  margin-top: 0px;
  margin-bottom: 20px;
  padding: 5px;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.theme.cardFontColor};
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0.5rem;
  margin: 0px 20px 20px 20px;
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
  right: 50px;
  top: -30px;
`;

export const StyledBody = styled.div`
  overflow: auto;
  height: 100%;
  background-color: ${(props) => props.theme.body};
`;

export const StyledEditButton = styled.button`
  background: ${(props) => props.theme.body};
  border: none;
  border-radius: 50px;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -4px;
  top: -22px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
  z-index: 10; 
}`;

export const StyledDetailSection = styled.section`
  position: absolute;
  margin: 10px 15px 10px 120px;
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
