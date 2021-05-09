import React from "react";
import styled from "styled-components";

const WarningText = styled.p`
  text-align: center;
  color: red;
  height: 20px;
`;

export function Warning({ message }) {
  return (
    <div>
      <WarningText>{message}</WarningText>
    </div>
  );
}
