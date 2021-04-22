import React from "react";

export function GameButton({ onClick, onBlur, description }) {
  return (
    <button onClick={onClick} onBlur={onBlur} aria-label={description}>
      {description}
    </button>
  );
}
