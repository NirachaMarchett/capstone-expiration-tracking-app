import React from "react";
import { Slider, StyledInput, StyledLabel } from "./Switch.styled";
import styled from "styled-components";

export default function Switch({ onToggle }) {
  const handleToggler = () => {
    if (typeof onToggle === "function") {
      onToggle();
    }
  };
  return (
    <SytledSwitch>
      <StyledLabel id="switch">
        <StyledInput type="checkbox" onChange={handleToggler} id="switch" />
        <Slider className="Slider" />
      </StyledLabel>
    </SytledSwitch>
  );
}

const SytledSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px 20px 0px 0px;
`;
