import React from "react";
import { Card } from "./Card";
import styling from "./Deck.module.css";

export function Deck({ deck, player }) {
  const deckOfCards = deck.map((card) => (
    <Card
      key={card.id}
      label={`${player} ${card.id}`}
      value={card.v}
      suitCode={card.suitCode}
      suit={card.suitName}
    />
  ));
  return <div className={styling.deck}>{deckOfCards}</div>;
}
