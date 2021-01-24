import styled from "@emotion/styled";
import React from "react";

const StyledJobSearchInput = styled.input`
  outline: none;
  border: none;
  padding: 5px 10px;
`;

export default function JobSearchInput() {
  return (
    <StyledJobSearchInput placeholder="Filter jobs..." type="text" />
  );
}