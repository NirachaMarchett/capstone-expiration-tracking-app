import React from "react";
import {
  Slider,
  StyledInput,
  StyledLabel,
  SytledSwitch,
} from "./Switch.styled";

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
