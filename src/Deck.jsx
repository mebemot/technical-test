import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

const Container = styled.div`
  margin: auto;
  text-align: center;
`;

export function Deck({ deck, player }) {
  const deckOfCards = deck.map((card) => (
    <Card
      key={card.id}
      label={`${player} ${card.id}`}
      value={card.v}
      suitCode={card.s.suitCode}
      suit={card.s.suitName}
    />
  ));
  return <Container>{deckOfCards}</Container>;
}
