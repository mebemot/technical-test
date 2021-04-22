import React from "react";
import styling from "./Warning.module.css";

export function Warning({ message }) {
  return (
    <div>
      <p className={styling.warning}>{message}</p>
    </div>
  );
}
