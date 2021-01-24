import styled from "@emotion/styled";
import React from "react";
import JobSearchInput from "./job-search-input";
import JobSearchTags from "./job-search-tags";

const StyledJobSearch = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  background-color: white;
  min-height: 43px;
  @media (min-width: 768px) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
  }
`;


export default function JobSearch() {
  return (
    <StyledJobSearch>
      <JobSearchTags />
      <JobSearchInput />
    </StyledJobSearch>
  );
}