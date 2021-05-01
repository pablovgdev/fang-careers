import styled from "@emotion/styled";
import React from "react";
import JobSearchSelect from "./job-search-select";
import JobSearchTags from "./job-search-tags";

const StyledJobSearch = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  min-height: 50px;
  z-index: 1000;
  @media (min-width: 768px) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    position: static;
  }
`;


export default function JobSearch() {
  return (
    <StyledJobSearch>
      <JobSearchTags />
      <JobSearchSelect />
    </StyledJobSearch>
  );
}