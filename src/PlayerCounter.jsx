import React from "react";
import styling from "./PlayerCounter.module.css";

export function PlayerCounter({ onAdd, onRemove, playerCount, onBlur }) {
  return (
    <div className={styling.playerCounter}>
      <button onClick={onRemove} onBlur={onBlur}>
        -
      </button>
      <p>{playerCount}</p>
      <button onClick={onAdd}>+</button>
    </div>
  );
}
