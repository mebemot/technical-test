import React from "react";
import styled from "styled-components";
import { GameButton } from "./GameButton";

const Container = styled.div`
  margin: auto;
  text-align: center;
`;

export function GameButtons({
  handleShuffle,
  onBlur,
  handleReset,
  shuffle,
  reset,
}) {
  return (
    <Container>
      <GameButton
        onClick={() => handleShuffle()}
        onBlur={() => onBlur()}
        description={shuffle}
      />
      <GameButton onClick={() => handleReset()} description={reset} />
    </Container>
  );
}
