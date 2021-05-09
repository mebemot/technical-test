import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 20px;
`;

export function GameButton({ onClick, onBlur, description }) {
  return (
    <StyledButton onClick={onClick} onBlur={onBlur} aria-label={description}>
      {description}
    </StyledButton>
  );
}
