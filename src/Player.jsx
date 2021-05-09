import React from "react";
import styled from "styled-components";
import { Deck } from "./Deck";

const Container = styled.div`
  margin: auto;
  text-align: center;
`;

const StyledButton = styled.button`
  margin: 20px;
`;

export function Player({ playerName, cards, onClick, onBlur }) {
  const playerDeck = <Deck deck={cards} player={playerName} />;
  return (
    <Container>
      <StyledButton
        onClick={onClick}
        onBlur={onBlur}
        aria-label={"click to deal to " + playerName}
      >
        {playerName}
      </StyledButton>
      <div>{playerDeck}</div>
    </Container>
  );
}
