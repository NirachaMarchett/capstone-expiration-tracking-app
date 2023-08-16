import styled from "styled-components";
import Image from "next/image";

export const StyledContainer = styled.div`
  margin: 20px 15px 0px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
  max-width: 100px;
  max-height: 100px;
`;

export const StyledHeading = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

export const StyledLine = styled.hr`
  width: 50%;
  margin: 10px auto;
  border: 2px dashed ${(props) => props.theme.fontColor};
`;

export const StyledParagraph = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 0px;
  color: ${(props) => props.theme.fontColor};
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  display: inline-block;
  border: 1px solid ${(props) => props.theme.fontColor};
  padding: 5px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
`;

export const StyledFavoriteButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 10px 10px 5px 10px;
  background-color: white;
  border: 2px solid #293241;
  position: absolute;
  top: -5px;
  right: 0px;
`;
