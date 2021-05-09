import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: inline-flex;
  width: 35px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5%;
  margin: 5px;
  padding: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const SuitSymbol = styled.span`
  color: ${(props) => (props.suit ? "black" : "red")};
`;

export function Card({ label, value, suitCode, suit }) {
  function SetSuitColor() {
    if (suit === "spades" || suit === "clubs") {
      return true;
    } else {
      return false;
    }
  }

  const isBlack = SetSuitColor();

  return (
    <CardContainer aria-label={label} tabIndex="1">
      {value}
      <SuitSymbol suit={isBlack}>{suitCode}</SuitSymbol>
    </CardContainer>
  );
}
