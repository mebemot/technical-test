import React from "react";

export function GameButton({ onClick, description }) {
  return (
    <button onClick={onClick} aria-label={description}>
      {description}
    </button>
  );
}
