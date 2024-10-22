import React from "react";
import styled from "styled-components";

const Switch = () => {
  return (
    <StyledWrapper>
      <label className="toggle-switch">
        <input type="checkbox" />
        <div className="toggle-switch-background">
          <div className="toggle-switch-handle" />
        </div>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-switch {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 20px;
  cursor: pointer;
}

.toggle-switch input[type="checkbox"] {
  display: none;
}

.toggle-switch-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  border-radius: 20px;
  box-shadow: inset 0 0 0 2px #ccc;
  transition: background-color 0.3s ease-in-out;
}

.toggle-switch-handle {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.toggle-switch::before {
  content: "";
  position: absolute;
  top: -10px;
  right: -5px;
  font-size: 12px;
  font-weight: bold;
  color: #aaa;
  text-shadow: 1px 1px #fff;
  transition: color 0.3s ease-in-out;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch-handle {
  transform: translateX(5px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 3px #017bff;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch-background {
  background-color: #017bff;
  box-shadow: inset 0 0 0 1px #2c2c2c;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch:before {
  content: "On";
  color: #017bff;
  right: -1px;
}

.toggle-switch input[type="checkbox"]:checked + .toggle-switch-background .toggle-switch-handle {
  transform: translateX(15px);
}

`;

export default Switch;
