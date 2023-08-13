import styled from "styled-components";

export const StyledLabel = styled.label`
  margin: 0px 0px 0px 0px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  transition: 0.4s;
`;

export const StyledInput = styled.input`
  display: none;
  &:checked + .Slider {
    background-color: #293241;
  }
  &:checked + .Slider::before {
    transform: translateX(26px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  background-color: grey;
  transition: 0.4;

  &:before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;
