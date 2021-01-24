import styled from "@emotion/styled";
import React from "react";
import JobSearch from "./job-search/job-search";
import JobsList from "./jobs-list";

const StyledJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  @media (min-width: 768px) {
    padding: 20px;
    margin: 50px 0;
  }
`;

export default function JobsContainer() {
  return (
    <StyledJobsContainer>
      <JobSearch />
      <JobsList />
    </StyledJobsContainer >
  );
}