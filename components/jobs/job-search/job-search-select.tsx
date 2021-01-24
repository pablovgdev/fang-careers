import styled from "@emotion/styled";
import React from "react";
import JobSearchInput from "./job-search-input";
import JobSearchOptions from "./job-search-options";

const StyledJobSearchSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: white;
  @media (min-width: 768px) {
    border-radius: 5px;
  }
`;


export default function JobSearchSelect() {
  return (
    <StyledJobSearchSelect>
      <JobSearchInput />
      <JobSearchOptions />
    </StyledJobSearchSelect>
  );
}