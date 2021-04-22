import React from "react";
import styling from "./Card.module.css";

export function Card({ label, value, suitCode, suit }) {
  return (
    <div className={styling.card} aria-label={label} tabIndex="1">
      {value}
      <span className={styling[suit]}>{suitCode}</span>
    </div>
  );
}
