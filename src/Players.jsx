import React from "react";
import { Player } from "./Player";

export function Players({ players, onClick, onBlur }) {
  const playerList = [];

  for (let i = 0; i < players.length; ++i) {
    playerList.push(
      <Player
        key={i}
        playerName={`Player ${i + 1}`}
        cards={players[i]}
        onClick={() => onClick(i)}
        onBlur={() => onBlur()}
      />
    );
  }
  return <div>{playerList}</div>;
}
