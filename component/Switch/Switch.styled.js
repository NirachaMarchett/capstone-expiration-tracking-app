import styled from "styled-components";

export const StyledLabel = styled.label`
  margin: 0px 0px 0px 0px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;
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
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  background-color: white;
  transition: 0.4;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 2px;
    background-color: #cdcdcd;
    border-radius: 50%;
    transition: 0.4s;
  }
`;
