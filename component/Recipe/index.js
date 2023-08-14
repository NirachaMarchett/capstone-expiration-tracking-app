import styled from "styled-components";
import Image from "next/image";

export default function Recipe({ recipe }) {
  console.log(recipe);

  return (
    <StyledContainer>
      <StyledImage
        src={recipe.images.SMALL.url}
        width={recipe.images.SMALL.width}
        height={recipe.images.SMALL.height}
        alt="Small Recipe"
      />
      <StyledHeading>{recipe.label}</StyledHeading>
      <StyledLine />
      <StyledParagraph>Time: {recipe.totalTime} mins</StyledParagraph>
      <StyledAnchor href={recipe.url}>
        {recipe.ingredients.length} Ingredients
      </StyledAnchor>
      <StyledAnchor href={recipe.url}>Instruction</StyledAnchor>
    </StyledContainer>
  );
}

const StyledGrid = styled.div`
margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
`;

const StyledContainer = styled.div`
  margin: 20px 15px 0px 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  max-width: 100px;
  max-height: 100px;
`;

const StyledHeading = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

const StyledLine = styled.hr`
  width: 50%;
  margin: 10px auto;
  border: 2px dashed ${(props) => props.theme.fontColor};
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 0px;
  color: ${(props) => props.theme.fontColor};
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};
  display: inline-block;
  border: 1px solid ${(props) => props.theme.fontColor};
  padding: 5px 10px;
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
`;
