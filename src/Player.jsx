import React from "react";
import { Deck } from "./Deck";
import styling from "./Player.module.css";

export function Player({ playerName, cards, onClick, onBlur }) {
  const playerDeck = <Deck deck={cards} player={playerName} />;
  return (
    <div className={styling.player}>
      <button
        onClick={onClick}
        onBlur={onBlur}
        aria-label={"click to deal to " + playerName}
      >
        {playerName}
      </button>
      <div>{playerDeck}</div>
    </div>
  );
}
