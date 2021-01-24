import styled from "@emotion/styled";
import React from "react";
import JobList from "./job-list/job-list";
import JobSearch from "./job-search/job-search";

const StyledJobs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  @media (min-width: 768px) {
    padding: 20px;
    margin: 50px 0;
  }
`;

export default function Jobs() {
  return (
    <StyledJobs>
      <JobSearch />
      <JobList />
    </StyledJobs >
  );
}