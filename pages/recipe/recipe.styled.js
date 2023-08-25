import styled from "styled-components";

export const StyledContainer = styled.div`
  overflow-x: hidden;
  height: 100%;
  height: 1200px;
  background-color: ${(props) => props.theme.body};
`;

export const StyledGrid = styled.div`
  margin-bottom:50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
`;

export const StyledHeading = styled.h2`
  margin: 230px 0px 0px 20px;
  width: 100%;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.filterFont};
`;

export const StyledMessage = styled.p`
  margin-left: 20px;
  margin-right: 20px;
  padding: 0.5rem;
  border-radius: 5px;
  width: 100%;
  color: #c32e68;
`;
