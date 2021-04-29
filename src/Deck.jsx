import React from "react";
import { Card } from "./Card";
import styling from "./Deck.module.css";

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
  return <div className={styling.deck}>{deckOfCards}</div>;
}
