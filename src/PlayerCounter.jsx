import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  text-align: center;
`;

const StyledButton = styled.button`
  margin: 20px;
`;

const Count = styled.p`
  display: inline;
`;

export function PlayerCounter({ onAdd, onRemove, playerCount, onBlur }) {
  return (
    <Container>
      <StyledButton onClick={onRemove} onBlur={onBlur}>
        -
      </StyledButton>
      <Count>{playerCount}</Count>
      <StyledButton onClick={onAdd}>+</StyledButton>
    </Container>
  );
}
