import React from "react";
import { GameButton } from "./GameButton";
import styling from "./GameButtons.module.css";

export function GameButtons({ handleShuffle, handleReset, shuffle, reset }) {
  return (
    <div className={styling.gameButtons}>
      <GameButton onClick={() => handleShuffle()} description={shuffle} />
      <GameButton onClick={() => handleReset()} description={reset} />
    </div>
  );
}
