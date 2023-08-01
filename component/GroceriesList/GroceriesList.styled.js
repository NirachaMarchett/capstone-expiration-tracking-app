import { styled } from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;

export const ItemContainer = styled.section`
  display: flex;
  fixed-direction: column;
  align-item: center;
  gap: 5px;
  padding: 1rem;
  width: 317px;
  height: 69px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(243, 246, 248, 0.87);
`;
